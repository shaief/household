var Shopping = new Meteor.Collection('Shopping');
 
if (Meteor.isServer && Shopping.find().count() == 0) {
  var users = [
        {house: 'De-Modina', user: 'Shai'},
        {house: 'De-Modina', user: 'Doron'},
      ];
  var payment = [
	   	{department: 'Food',
	    shop_name: 'Super Zol Alon',
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