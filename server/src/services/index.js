const avatars = require('./avatars/avatars.service.js');
const users = require('./users/users.service.js');
const conversations = require('./conversations/conversations.service.js');
const messages = require('./messages/messages.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(avatars);
  app.configure(users);
  app.configure(conversations);
  app.configure(messages);
};
