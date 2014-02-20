var MainView = Backbone.View.extend({
	className: 'main-item',

	createTemplate: _.template($('#main-item-template').text()),

	events:{
		'click .clear-tron': 'clearJumbotron'
	},

	initialize: function(){
		$('.js-focus-item').html(this.el); //html b/c you dont want to have more than one (vs prepemd/append)

		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model.attributes));
	},

	clearJumbotron: function(){
		this.remove();
	},
});
