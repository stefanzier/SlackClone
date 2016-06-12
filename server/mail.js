Meteor.startup(function () {
  smtp = {
    username: 'SlackClone',
    password: 'kTmhmK7FlDZI3IMyxUBjmQ',
    server:   'smtp.mandrillapp.com',
    port: 587
  };
    
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});
