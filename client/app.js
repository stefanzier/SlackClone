import { Template } from 'meteor/templating';

Template.messages.helpers({
  messages: Messages.find({})
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Template.registerHelper("usernameFromId", function (userId) {
  var user = Meteor.users.findOne({_id: userId});
  if (typeof user === "undefined") {
      return "Anonymous";
  }
  if (typeof user.services.github !== "undefined") {
      return user.services.github.username;
  }
  return user.username;
});

Template.registerHelper("timestampToTime", function (timestamp) {
  var date = new Date(timestamp);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  return hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);
});

Template.channel.helpers({
  active: function () {
    if (Session.get('channel') === this.name) {
      return "active";
    } else {
      return "";
    }
  }
});

Template.listings.helpers({
  channels: function () {
    return Channels.find();
  }
});

Template.footer.events({
  'keypress input': function(e) {
    var inputVal = $('.input-box_text').val();
    if(!!inputVal) {
      var charCode = (typeof e.which == "number") ? e.which : e.keycode;
      if(charCode == 13) {
        e.stopPropagation();
        Messages.insert({text: $('.input-box_text').val()});
        $('.input-box_text').val("");
        return false;
      }
    }
  }
});
