console.log("main.js");

house = function () {
    return Houses.findOne({users: {$in: [Meteor.userId()]}});
};

Template.purchase.helpers({
    users: function () {
        return Meteor.users.find({_id: {$in: house().users}});
    },
    items: function () {
        return Items.find({house: house()._id, category: Session.get("category")});
    },
    categories: function () {
        return Categories.find({house: house()._id});
    }
});

Template.purchase.events({

    "change .categories-list": function (JQevent, blazeTemplate) {
        var categoryName = $(".categories-list .category").filter(function (i, cat) {
            return cat.checked;
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

        var categories = $("#categories-list #category");
        category_id = categories.filter(function (i, category) {
            return category.selected;
        })
            .map(function (i, category) {
                return category.id
            });

        Purchases.insert({
            "tenant": tenant,
            "category": category_id,
            "items": items.toArray()
        });
    }
});
