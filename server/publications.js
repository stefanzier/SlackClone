Meteor.publish('messages', function () {
  return Messages.find({channel: channel});
});

Meteor.publish('channels', function () {
  return Channels.find();
});
