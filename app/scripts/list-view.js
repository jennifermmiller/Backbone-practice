var ListView = Backbone.View.extend({
	className: 'list-item',

	createTemplate: _.template($('#list-item-template').text()),

	events: {
		'click .expand': 'getFocused' //if you take out the class, it will target this.el
	},

	initialize: function(){
		$('.js-contact-list').append(this.el);

		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model.attributes));
	},

	getFocused: function(){
		console.log('did we make it here?!');
		new MainView({model: this.model});
		this.$el.hide();
	}
});