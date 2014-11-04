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
	for(house in houses){ 
		Houses.insert(houses[house]);
	}
}

// put some users in houses
var demodina = Houses.findOne({name: "demodina"});
var doron = Meteor.users.findOne({username: "doron"});
var shai = Meteor.users.findOne({username: "shai"});
if(demodina.users.indexOf(doron._id) < 0){
	demodina.users.push(doron._id);
	doron.houses = [demodina._id];
	Meteor.users.update(doron._id, doron);
}
if(demodina.users.indexOf(shai._id) < 0){
	demodina.users.push(shai._id);
	shai.houses = [demodina._id];
	Meteor.users.update(shai._id, shai);
}
Houses.update(demodina._id, demodina);

//add some purchases
//if Purchases.find().count() is 0
