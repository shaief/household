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
<<<<<<< HEAD
	doron.houses = [demodina._id];
	Meteor.users.update(doron, doron);
}
if(demodina.users.indexOf(shai._id) < 0){
	demodina.users.push(shai._id);
	shai.houses = [demodina._id];
	Meteor.users.update(shai, shai);
=======
	doron.profile = {houses: [demodina._id]};
	Meteor.users.update(doron._id, doron);
}
if(demodina.users.indexOf(shai._id) < 0){
	demodina.users.push(shai._id);
	shai.profile = {houses = [demodina._id]};
	Meteor.users.update(shai._id, shai);
>>>>>>> a115bbe7adb84c23672e806a7eba305e1a975a89
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



