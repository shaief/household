console.log("main.js");

house = function(){
	return Houses.findOne({users:{$in:[Meteor.userId()]}});
};

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

	"click #submit-item": function(JQevent, blazeTemplate) {
		var addItem = document.getElementById("add-item").value;
		Items.insert({
			"name": addItem,
			"house": house()._id,
		})
		document.getElementById("add-item").value = '';
		debugger;
	},

	"click #submit-payment": function(JQevent, blazeTemplate){

		var tenant = $("#tenant-names .tenant")
			.filter(function(i, tenant){return tenant.selected;})
			.map(function(i, tenant){return tenant.id})[0];

		var items = $("#items-list").find(".single-item");
		items = items.filter(function(i,item){return item.selected;})
			.map(function(i, item){return item.id});

		var categories = $("#categories-list #category");
		category = categories.filter(function(i,category){return category.selected;})
			.map(function(i, item){return item.id});



		debugger;
		Purchases.insert({
			"tenant": tenant,
			"category": category,
			"items": items.toArray()
		}); 
	}
});
