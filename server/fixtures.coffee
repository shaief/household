var Shopping = new Meteor.Collection('Shopping');
 
if (Meteor.isServer && Shopping.find().count() == 0) {
  var users = [
        {house: 'King George', user: 'John'},
        {house: 'King George', user: 'Paul'},
      ];
  var payment = [
	   	{department: 'Food',
	    shop_name: 'Mega',
	    items: 'Pita bread, Chocolate', 
	    price: 27.5, 
	    created_date = new Date,
	    modified_date = new Date,
	    purchase_date: new Date},
	  ];
  _.each(shopping, function(shopping) {
    Shopping.insert(shopping);
  });
}