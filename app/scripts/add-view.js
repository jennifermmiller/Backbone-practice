//Why doesn't this work?!? 



//var AddContactView = Backbone.View.extend({
// 	addClass: 'new-contact',

// 	renderTemplate: _.template($('#new-contact-template').text()),

// 	events:{
// 		'click .js-submit-btn': 'addContact'
// 	},

// 	initialize: function() {
// 		this.render();
// 		this.listenTo(this.model, 'add', this.render);
// 	},

// 	render: function() {
// 		$('.js-focus-item').html(this.el);

// 		this.$el.html(this.renderTemplate());

// 		this.$el.find('#js-new-name').focus();
// 	},

// 	addContact: function(){
// 		console.log('do we???????????????');

// 		var person = {
// 			name: $('#js-new-name').val(),
// 			phone: $('#js-new-phone').val(),
// 			bio: $('#js-new-bio').val(),
// 			avatar: $('#js-new-avatar').val()
// 		};

// 		var newPerson = contacts.add(person);

// 		new ListView({model: newPerson});

// 		newPerson.save();

// 		this.$el.find('form').val('');
// 	}
// });

//Script tag for template:
        // <script type="text/template" id="new-contact-template">
        //     <h4>Add New Contact:</h4>
        //     <form>    
        //         <ul>
        //             <li>
        //                 <label for="js-new-name">Name:</label>
        //                 <input type="text" id="js-new-name" placeholder="Contact Name"/></li>
        //             <li>
        //                 <label for="js-new-phone">Phone:</label>
        //                 <input type="text" id="js-new-phone" placeholder="Contact Phone Number"/>
        //             </li>
        //             <li>
        //                 <label for="js-new-avatar">Avatar:</label>
        //                 <input type="text" id="js-new-avatar" placeholder="Link to Conact Avatar"/>
        //             </li>
        //             <li>
        //                 <label for="js-new-bio">Bio:</label>
        //                 <textarea type="text" id="js-new-bio" placeholder="Contact Bio"></textarea>
        //             </li>  
        //         </ul>
        //         <button type="button" class="js-cancel-btn btn btn-default">Cancel</button>
        //         <button type="button" class="js-submit-btn btn btn-primary">Submit Contact</button>
        //     </form>    
        // </script> 



