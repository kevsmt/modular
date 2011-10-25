define(function() {
	/**
	 * Backbone View
	 * @type	object
	 */
	var Control =  Backbone.View.extend({

		tagName: 'div',
		className: 'container hide',
		id: 'x-app-container',

		initialize: function() {
			this.el = $(this.el);
		},

		/**
		 * render
		 */
		render: function() {
			// Set Properties
			//
			this.el.appendTo(document.body);

			return this;
		}
	});

	return new Control;
});