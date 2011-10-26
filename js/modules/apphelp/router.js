define([
	'app/app',
	'./views/navbar.js',
	'./views/documentation.js' ],

function(
	App,
	NavBar,
	DocumentationView) {

	/**
	 * Router
	 * @type	object
	 * @extend	Backbone.Router
	 */
	return Backbone.Router.extend({

		routes: {
			'/help': 'showDocumentation'
		},

		/**
		 * indexAction
		 */
		showDocumentation: function() {
			DocumentationView.render();
		}
	});

});