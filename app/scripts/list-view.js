//Things I want to be able to do:
//have div on jumbotron hide/show depending on if on jumbotron
//


var ListView = Backbone.View.extend({
	className: 'list-item',

	createTemplate: _.template($('#list-item-template').text()),

	events: {
		'click .expand': 'toJumbotron', //if you take out the class, it will target this.el
		//'blur .focus-item' : 'outOfTron
		'click .delete': 'destroy',
		'click .edit': 'editContact',
		'click .js-submit-edit': 'saveEdit'
	},

	initialize: function(){
		$('.js-contact-list').append(this.el);

		this.render();

		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove); //why does this work?
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
	},

	destroy: function(){
		this.model.destroy();
	},

	editContact: function(){
		//$('.list-item').html(''); Maybe put height and overflow in seperate class so we can add/remove it

		var renderTemplate = _.template($('#edit-item-template').text());

		$('.js-focus-item').html(this.el);

		this.$el.html(renderTemplate(this.model.attributes));
		//this.$el.find('.js-edit-name').focus(); Way to focus input at top?

	},

	saveEdit: function(){
		var editedName = this.$el.find('#js-edit-name').val();
		var editedPhone = this.$el.find('#js-edit-phone').val();
		var editedBio = this.$el.find('#js-edit-bio').val();
		var editedAvatar = this.$el.find('#js-edit-avatar').val();

		this.model.save({
			name: editedName,
			phone: editedPhone,
			bio: editedBio,
			avatar: editedAvatar
		});

		//this.render();
		new MainView({model: this.model});
		new ListView({model: this.model});

	}


	// outOfTron: function(){
	// 	this.$el.show();
	// }
});