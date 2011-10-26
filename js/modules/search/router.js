define([
	'app/app',
	'./views/index.js' ],

function(App, IndexView) {
	/**
	 * Router
	 * @type	object
	 * @extend	Backbone.Router
	 */
	return Backbone.Router.extend({

		routes: {
			'/search/:any': 'indexAction'
		},

		/**
		 * indexAction
		 */
		indexAction: function(keyword) {
			IndexView.render(keyword);
		}
	});

});