var ListView = Backbone.View.extend({
	className: 'lisst-item',

	createTemplate: _.template($('#list-item-template').text()),

	initialize: function(){
		$('.js-contact-list').append(this.el);

		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model.attributes));
	}
});