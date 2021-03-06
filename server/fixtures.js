// create some users
if(Meteor.users.find().count() == 0){
	var users = JSON.parse(Assets.getText("fixtures/users.json"));
	for(user in users){
		Accounts.createUser(users[user]);
	}
}

// create some houses
if(Houses.find().count() == 0){
	var houses = JSON.parse(Assets.getText("fixtures/houses.json"));
	for(var house in houses){ 
		Houses.insert(houses[house]);
	}
}

// put some users in houses
var demodina = Houses.findOne({name: "demodina"});
var doron = Meteor.users.findOne({username: "doron"});
var shai = Meteor.users.findOne({username: "shai"});
if(demodina.users.indexOf(doron._id) < 0){
	demodina.users.push(doron._id);
	var _doron = doron;
	_doron.houses = [demodina._id];
	Meteor.users.update(doron, _doron);
}
if(demodina.users.indexOf(shai._id) < 0){
	demodina.users.push(shai._id);
	shai.houses = [demodina._id];
	Meteor.users.update(shai, shai);
}
Houses.update(demodina._id, demodina);

//add some items
if(Items.find().count() == 0){
	var items = JSON.parse(Assets.getText("fixtures/items.json"));
	for(var item in  items){
		items[item].house = demodina._id;
		Items.insert(items[item]);
	}
}

//add some categories
if(Categories.find().count() == 0){
	var categories = JSON.parse(Assets.getText("fixtures/categories.json"));
	for(var category in  categories){
		categories[category].house = demodina._id;
		Categories.insert(categories[category]);
	}
}
