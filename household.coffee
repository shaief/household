if Meteor.isClient
  
  # counter starts at 0
  Session.setDefault "counter", 0
  Session.setDefault "plus", 0
  Session.setDefault "minus", 0
  Template.hello.helpers
    plus: ->
      Session.get "plus"

    minus: ->
      Session.get "minus"

    counter: ->
      Session.get "counter"

    userIsVerified: ->
      Meteor.user().emails[0].verified

    userEmailAddress: ->
      Meteor.user().emails[0].address

    totalCounts: ->
      
      # debugger;
      counts = Shopping.find(userId: Meteor.userId()).fetch().filter((x) ->
        x.counter
      )
      sum = 0
      for i of counts
        sum += counts[i].counter
      sum

  Template.hello.events
    "click .addToCounter": ->
      
      # increment the counter when button is clicked
      Session.set "plus", Session.get("plus") + 1
      Session.set "counter", Session.get("counter") + 1
      Shopping.insert
        counter: Session.get("counter")
        userId: Meteor.userId()

      return

    "click .addToCounter1": ->
      
      # increment the counter when button is clicked
      Session.set "counter", Session.get("counter") - 1
      Session.set "minus", Session.get("minus") + 1
      Shopping.insert
        counter: Session.get("counter")
        userId: Meteor.userId()

      return

if Meteor.isServer
  Meteor.startup ->


# code to run on server at startup