define([
	'app/app' ],

function(App) {
	return new (Backbone.View.extend({
		initialize: function() {
			this.el = App.UI.NavBar.addItem({
				position: 'right',
				text: 'Help',
				menu: [{
					text: 'Documentation',
					href: '#/help'
				}, {
					text: 'Getting Started',
					href: '#/help/getting-started'
				}, '-', {
					text: 'Installed Modules',
					href: '#/core/modules'
				}, {
					text: 'Software License',
					href: '#/core/license'
				}, '-', {
					text: 'System Logs',
					href: '#/core/logs'
				}, '-', {
					text: 'About this Software',
					href: '#/help/about-this-software'
				}]
			});
		}
	}));
});