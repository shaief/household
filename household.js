// if (Meteor.isClient) {
//   // counter starts at 0
//   Session.setDefault("counter", 0);
//   Session.setDefault("plus", 0);
//   Session.setDefault("minus", 0);

//   Template.hello.helpers({
//     plus: function () {
//       return Session.get("plus");
//     },
//     minus: function () {
//       return Session.get("minus");
//     },
//     counter: function () {
//       return Session.get("counter");
//     },
//     userIsVerified: function(){
//       return Meteor.user().emails[0].verified;
//     },
//     userEmailAddress: function(){
//       return Meteor.user().emails[0].address;
//     },
//     totalCounts: function  () {
//       // debugger;
//       var counts = Shopping.find({userId: Meteor.userId()}).fetch().filter(function(x){return x.counter});
//       var sum = 0;
//       for(var i in counts){
//         sum += counts[i].counter;
//       }
//       return sum;
//     }

//   });

//   Template.hello.events({
//     'click .addToCounter': function () {
//       // increment the counter when button is clicked
//       Session.set("plus", Session.get("plus") + 1);
//       Session.set("counter", Session.get("counter") + 1);
//       Shopping.insert({counter:Session.get("counter"),
//                       userId:Meteor.userId()
//                     });
//     },
//     'click .addToCounter1': function () {
//       // increment the counter when button is clicked
//       Session.set("counter", Session.get("counter") - 1);
//       Session.set("minus", Session.get("minus") + 1);
//       Shopping.insert({counter:Session.get("counter"),
//                       userId:Meteor.userId()
//                     });
//     }
//   });
// }

// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     // code to run on server at startup
//   });
// }
