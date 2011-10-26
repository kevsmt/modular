define([
	'app/app',
	'text!./index.tpl' ],

function(App, indexTpl) {
	return new (Backbone.View.extend({
		el: App.UI.Container.el,
		render: function() {
		  this.el.html(indexTpl);
		}
	}));
});
