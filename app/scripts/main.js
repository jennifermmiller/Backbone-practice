console.log('\'Allo \'Allo!');

$(document).ready(function(){
	window.contacts = new ContactsCollection(); //previously had collection taking in dummy data
	//hash = object (in ruby)
	//re-read docs on fetch and sync
	contacts.fetch({
		success: function(){
			contacts.each(function(conctact){
				new ListView({model: conctact});
			})
		},
		error: function(){
			console.log('Whoa, problem!')
		}
	});

	$('.add-new-contact').on('click', '.add', function() {
		new AddContactView({model: this.model});
	}); 

	$('.js-submit').click(function(){

		var person = {
			name: $('#add-contact-form #js-new-name').val(),
			phone: $('#add-contact-form #js-new-phone').val(),
			bio: $('#add-contact-form #js-new-bio').val(),
			avatar: $('#add-contact-form #js-new-avatar').val()
		};

		var newPerson = contacts.add(person);

		new ListView({model: newPerson});

		newPerson.save();

		('form').val('');
	});
});

//babckbone does everything fo us - dont hav eot think about api's
//everything is completely modular - can change database w/ just one line (changing the url in collection)
//databases: mondoHQ, Parse
//can retro-fit old projects to use tiny-server (but tiny-server wont work on gh-pages)
