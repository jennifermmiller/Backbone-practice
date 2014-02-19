var EditView = Backbone.View.extend({
	className: "edit-info",

	renderTemplate: _.template($('#edit-item-template').text()),

	initialize: function(){
		$('.js-focus-item').html(this.el);

		this.render();
	},

	render: function(){
		this.$el.html(this.renderTemplate(this.model.attributes));
	}
});