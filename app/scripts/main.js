console.log('\'Allo \'Allo!');

$(document).ready(function(){
	window.contacts = new ContactsCollection(dataArray);

	contacts.each(function(conctact){
		new ListView({model: conctact});
	});
});