 define([
	'app/app',
	'./views/navbar.js',
	'./views/index.js' ],

function(
	App,
	NavBar,
	IndexView) {

	/**
	 * Router
	 * @type	object
	 * @extend	Backbone.Router
	 */
	return Backbone.Router.extend({

		routes: {
			'/dashboard': 'indexAction'
		},

		/**
		 * indexAction
		 */
		indexAction: function() {
			IndexView.render();
		}
	});

});