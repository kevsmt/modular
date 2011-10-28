require.config({
	/**
	 * baseURL
	 * @type	string
	 */
	baseUrl: location.pathname + 'js/',
	wait: 15,

	/**
	 * urlArgs
	 * Comment this if you wish to cache things
	 * @type	string
	 */
	urlArgs: "cached=" +  (new Date()).getTime(),

	/**
	 * paths
	 * @type	object
	 */
	paths: {
		'text': 'libs/require/text',
		'order': 'libs/require/order'
	},

	/**
	 * deps
	 * @type	array
	 */
	deps: [
		'order!libs/jquery/jquery-min',
		'order!libs/underscore/underscore-min',
		'order!libs/backbone/backbone-min'
	],

	/**
	 * callback
	 * @param	arguments
	 */
	callback: function() {
		$(document).ready(function() {
			require([ 'app/app' ], function(App) {
				App.initialize(function() {
					$('#spinner').remove();
				});
			});
		});
	}
});