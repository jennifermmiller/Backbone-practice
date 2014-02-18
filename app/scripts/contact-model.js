var Contact = Backbone.Model.extend({
	defaults: {
		name: '???',
		phone:'(999) 999-9999',
		bio: 'grumpy',
		avatar: 'http://www.brunningonline.net/simon/blog/archives/002272.html'
	}
});

var ContactsCollection = Backbone.Collection.extend({
	model: Contact
});