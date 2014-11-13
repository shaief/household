console.log("hello");

Meteor.subscribe('users');

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
		var html_username = blazeTemplate.find('select').item(username);
		var userId = html.attributes.getNamedItem('id');
		// var html_itemsPurchased = blazeTemplate.find('select#category');
		Purcheses.insert({
			"user": userId
		}); 
	}
});