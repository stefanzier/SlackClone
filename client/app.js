import { Template } from 'meteor/templating';

Template.messages.helpers({
  messages: Messages.find({})
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
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
