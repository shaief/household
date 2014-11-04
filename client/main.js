console.log("hello")

Template.purchase.helpers({
	items: function(){
		return Items.find({house: Meteor.user().houses[0]._id});
	}
});