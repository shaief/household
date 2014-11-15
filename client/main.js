console.log("main.js");

house = function () {
    return Houses.findOne({users: {$in: [Meteor.userId()]}});
};

Template.purchase.helpers({
    users: function () {
        return Meteor.users.find({_id: {$in: house().users}});
    },
    items: function () {
        var search =  {house: house()._id};
        if(Session.get("category")){
            search.category = Session.get("category");
        }
        return Items.find(search);
    },
    categories: function () {
        return Categories.find({house: house()._id});
    },
    suggestedItems: function () {
        if (Session.get("searched-item")) {
            return Items.find({name: new RegExp(Session.get("searched-item"))})
        }
    }
});

Template.purchase.events({

    "keyup #add-item": function(JQevent, blazeTemplate) {
      Session.set("searched-item", $("#add-item").val());
    },

    "change .categories-list": function (JQevent, blazeTemplate) {
        var categoryName = $(".categories-list .category").filter(function (i, cat) {
            return cat.selected;
        }).attr('category-name');
        Session.set('category', categoryName);
    },


    "click #submit-item": function (JQevent, blazeTemplate) {
        var addItem = document.getElementById("add-item").value;
        Items.insert({
            "name": addItem,
            "house": house()._id,
            "category": Session.get("category")
        })
        document.getElementById("add-item").value = '';
    },

    "click #submit-payment": function (JQevent, blazeTemplate) {

        var tenant = $("#tenant-names .tenant")
            .filter(function (i, tenant) {
                return tenant.selected;
            })
            .map(function (i, tenant) {
                return tenant.id
            })[0];

        var items = $("#items-list").find(".single-item");
        items = items.filter(function (i, item) {
            return item.selected;
        })
            .map(function (i, item) {
                return item.id
            });

        Purchases.insert({
            "date": new Date,
            "tenant": tenant,
            "category": Session.get("category"),
            "items": items.toArray()
        });
    }
});
