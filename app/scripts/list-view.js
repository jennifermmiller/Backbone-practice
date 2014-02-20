//To do List:
//have list-item that corresponds to div on jumbotron hide/show depending on status
//have edit input focus on name
//


var ListView = Backbone.View.extend({
	className: 'list-item',

	createTemplate: _.template($('#list-item-template').text()),

	events: {
		'click .js-to-jumbotron': 'toJumbotron', //if you take out the class, it will target this.el
		'click .clear-tron': 'clearJumbotron',
		'click .delete': 'destroy',
		'click .edit': 'editContact',
		'click .js-submit-edit': 'saveEdit',
		'click .js-cancel-edit': 'cancelEdit'
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
	},

	clearJumbotron: function(){
		console.log('clicking?');
		('.main-item').remove();
	},

	destroy: function(){
		this.model.destroy();
	},

	editContact: function(){
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

		new MainView({model: this.model});
		new ListView({model: this.model});
	},

	cancelEdit: function() {
		$('.edit-info').remove();

		new ListView({model: this.model});
	}


	// outOfTron: function(){
	// 	this.$el.show();
	// }
});