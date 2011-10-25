define([
	'app/app',
	'text!./index.tpl' ],

function(App, indexTpl) {

	var View = Backbone.View.extend({

		el: App.UI.Container.el,

		render: function() {
		  this.el.html(indexTpl);
		}

	});

	return new View;
});
