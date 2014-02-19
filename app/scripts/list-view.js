var ListView = Backbone.View.extend({
	className: 'list-item',

	createTemplate: _.template($('#list-item-template').text()),

	events: {
		'click .expand': 'toJumbotron', //if you take out the class, it will target this.el
		//'blur .focus-item' : 'outOfTron'
	},

	initialize: function(){
		$('.js-contact-list').append(this.el);

		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model.attributes));
	},

	toJumbotron: function(){
		new MainView({model: this.model});
		//var getBack = this.model.cid();
		// this.$el.hide();
		// $('.container').on('blur', '.focus-item', function(){
		// 	ContactsCollection.findWhere(function())
		// 	this.$el.show();
		// });
	}

	// outOfTron: function(){
	// 	this.$el.show();
	// }
});