console.log("main.js");

house = function(){
	return Houses.findOne({users:{$in:[Meteor.userId()]}});
}

Template.purchase.helpers({
	users: function(){
		return Meteor.users.find({_id: {$in: house().users}});
	},
	items: function(){
		return Items.find({house: house()._id});
	},
	categories: function(){
		return Categories.find({house: house()._id});
	}
});

Template.purchase.events({
	"click #button1id-0": function(JQevent, blazeTemplate){
		debugger;
		var username = blazeTemplate.find('select').value;
		var htmlUsername = blazeTemplate.find('select').item(username);
		var userIdHtml = htmlUsername.attributes.getNamedItem('id');
		var userId = userIdHtml.value;
		var htmlItemsPurchased = blazeTemplate.find('select#category');
		Purcheses.insert({
			"user": userId
		}); 
	}
});