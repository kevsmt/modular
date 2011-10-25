define([
	'text!./navbar.tpl',
	'text!./navbar_li.tpl',
	'libs/bootstrap/bootstrap-dropdown',
	'libs/jquery/plugins/form' ],

function(navbar_tpl, navbar_li_tpl) {

	/**
	 * Backbone View
	 * @type	object
	 */
	var Control =  Backbone.View.extend({

		tagName: 'div',
		className: 'navbar hide',
		id: 'x-app-navbar',

		/**
		 * __getNavUL
		 * @param	string
		 * @return	object
		 */
		__getNavUL: function(pos) {
			return this.el.find('.container > ul.' + (pos === 'right' ? 'secondary-nav' : 'nav')).first();
		},

		/**
		 * addSearchForm
		 * @param	object
		 * @return	object
		 */
		addSearchForm: function(config) {
			config = _.defaults(config||{}, {
				method: 'POST',
				action: '#/search'
			});

			var hash = document.location.hash,
				hashRegMatch = new RegExp(config.action + '/', 'g');

			var input = $('<input/>')
				.addClass('search-query span2')
				.attr('name', 'q')
				.attr('type', 'text')
				.attr('placeholder', 'Search');

			var form = $('<form />')
				.addClass('form-search navbar-search')
				.attr('method', config.method)
				.attr('action', config.action)
				.append(input)
				.ajaxForm({
					beforeSubmit: function(formData) {
						document.location = config.action + '/' + encodeURI(formData[0].value)
						return false;
					}
				})
				.insertAfter(
					this.__getNavUL(config.position)
				);

			// Check for Search Term in hash
			//
			if (hashRegMatch.exec(hash)) {
				var srcValue = document.location.hash.replace(hashRegMatch, '');
				if (srcValue) input.val(decodeURI(srcValue));
			}
		},

		/**
		 * addItem
		 * @param	object
		 * @return	object
		 */
		addItem: function(config) {
			config = _.defaults(config||{}, { _: _,
				position: 'left',
				menu: null,
				href: '#'
			});

			var tpl = $(_.template(navbar_li_tpl, config)),
				ul = this.__getNavUL(config.position);

			ul.append(tpl);

			return tpl;
		},

		/**
		 * setTitle
		 * @param	string
		 * @param	string
		 * @return	void
		 */
		setTitle: function(title, href) {
			this.el
				.find('.container > a.brand')
				.attr('href', href || '#')
				.text(title);
		},

		initialize: function() {
			this.el = $(this.el);
		},

		/**
		 * render
		 */
		render: function() {
			// Set Properties
			//
			this.el.html(navbar_tpl);
			this.el.appendTo(document.body);

			this.addSearchForm();
			return this;
		}
	});

	return new Control;
});