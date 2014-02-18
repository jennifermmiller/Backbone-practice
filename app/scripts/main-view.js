var MainView = Backbone.View.extend({
	className: 'focus-item',

	createTemplate: _.template($('#main-item-template').text()),

	initialize: function(){
		$('.js-focus-item').html(this.el); //html b/c you dont want to have more than one

		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model.attributes));
	},
});


//more interesting stuff: an edit; 