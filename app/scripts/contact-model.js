var Contact = Backbone.Model.extend({
	idAttribute: "_id", //Backbone and MongoDB want to use use different ids -> this fixes it

	defaults: {
		name: '???',
		phone:'(999) 999-9999',
		bio: "Pork belly PBR shabby chic Williamsburg, American Apparel asymmetrical DIY cardigan gastropub aesthetic Echo Park forage selvage whatever keytar. Carles authentic craft beer Helvetica artisan, ethical selfies Neutra seitan High Life. Squid 90's fixie, lomo Godard hashtag PBR&B church-key tousled master cleanse leggings raw denim Odd Future PBR +1. Fixie Neutra 3 wolf moon, Marfa Intelligentsia whatever hashtag flannel DIY bespoke. Lo-fi pork belly brunch flannel Williamsburg scenester, street art post-ironic hoodie Tumblr. VHS Carles fingerstache, shabby chic selfies fashion axe yr Shoreditch locavore before they sold out PBR&B paleo. Organic meh forage selvage hashtag artisan, tofu typewriter craft beer yr messenger bag.",
		avatar: 'http://i500.listal.com/image/2433041/500full.jpg'
	}
});

var ContactsCollection = Backbone.Collection.extend({
	model: Contact,

	//where our collection will be stored; no previous folder contacts but mongo will see this line and create one for us
	//can easily swap this out for other databases
	url: 'http://0.0.0.0:3000/collections/contacts' //can also name this folder after the app
});