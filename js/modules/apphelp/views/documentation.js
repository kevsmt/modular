define([
	'app/app',
	'text!./documentation.tpl' ],

function(App, template) {
	return new (Backbone.View.extend({
		el: App.UI.Container.el,
		render: function() {
		  this.el.html(template);
		}
	}));
});
