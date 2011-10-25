// Define Module
//
define([
	'app/config',
	'app/ui/navbar',
	'app/ui/container' ],

function(config, NavBar, Container) {

	/**
	 * App
	 * @singleton
	 * @type	object
	 */
	var App = {
		/**
		 * UI
		 * @type	object
		 */
		UI: {}
	};

	// Alias to App.UI so you can access this
	// through your modules
	//
	App.UI.NavBar = NavBar.render();
	App.UI.Container = Container.render();

	/**
	 * initialize
	 *
	 * @access	public
	 * @return	void
	 */
	App.initialize = function() {
		var hash = document.location.hash;

		// Check if we have a module to load
		//
		if (config.modules && config.modules.length > 0) {
			// We are expecting a module folder
			// e.g. app, also module must have a router.js
			//
			_(config.modules)
			.chain()

			// Format module
			//
			.map(function(m) {
				return config.modURL + m + '/router.js';
			})

			// Load modules once all are formatted
			//
			.tap(function(modules) {
				// All modules now will be:
				// -- modules/mymodule/router.js
				//
				require(modules, function() {
					// Loop through all arguments
					//
					_(_.toArray(arguments).slice(0))
					.chain()

					// Initialize each router
					//
					.each(function(router) {
						new router();
					})

					// Once all router are loaded,
					// we start Backbone history.
					//
					.tap(function() {
						// Show UI
						//
						App.UI.NavBar.el.fadeIn('fast').removeClass('hide');
						App.UI.Container.el.fadeIn('fast').removeClass('hide');

						// Start History Manager
						//
						Backbone.history.start();

						// Set First Route
						//
						if (!document.location.hash) {
							document.location = config.defaultRoute;
						}
					});
				});
			});
		}
	};

	return App;
});