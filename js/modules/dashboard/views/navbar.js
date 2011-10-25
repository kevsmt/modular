define([
	'app/app' ],

function(App) {

	var View = Backbone.View.extend({
		initialize: function() {
			this.el = App.UI.NavBar.addItem({
				text: 'Dashboard',
				href: '#/dashboard'
			});
		}
	});

	return new View;

});