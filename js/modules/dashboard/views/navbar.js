define([
	'app/app' ],

function(App) {
	return new (Backbone.View.extend({
		initialize: function() {
			this.el = App.UI.NavBar.addItem({
				text: 'Dashboard',
				href: '#/dashboard'
			});
		}
	}));
});