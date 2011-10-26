define([
	'app/app',
	'text!./index.tpl' ],

function(App, indexTpl) {
	return new (Backbone.View.extend({
		el: App.UI.Container.el,
		render: function(keyword) {
			var compiledHtml = _.template(indexTpl, {
				keyword: keyword
			});
			this.el.html(compiledHtml);
		}
	}));
});
