define([
	'app/app',
	'text!./index.tpl' ],

function(App, indexTpl) {

	var View = Backbone.View.extend({

		el: App.UI.Container.el,

		render: function(keyword) {
			var compiledHtml = _.template(indexTpl, {
				keyword: keyword
			});

			this.el.html(compiledHtml);
		}

	});

	return new View;
});
