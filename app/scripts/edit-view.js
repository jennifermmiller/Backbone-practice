//How do I save info as input value (like in todo)

var EditView = Backbone.View.extend({
	className: "edit-info",

	renderTemplate: _.template($('#edit-item-template').text()),

	events: {
		"click .submit": "updateInfo"
	},

	initialize: function(){
		$('.js-focus-item').html(this.el);

		this.render();
	},

	render: function(){
		this.$el.html(this.renderTemplate(this.model.attributes));
		this.$el.find('.js-edit-name').focus();
	},

	updateInfo: function(){
		var val = this.input.val();
		this.model.save(val);

	}
});