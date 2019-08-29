const { authenticate } = require('@feathersjs/authentication').hooks;
const { disablePagination, fastJoin } = require('feathers-hooks-common');
const { checkIfExistsChat } = require('./before');

const resolvers = {
  joins: {
    users: () => async (chat, context) => {
      const Users = context.app.service('users');
      chat.users = await Users.find({
        query: { _id: { $in: chat.users } },
        paginate: false
      });
      return chat;
    },
  }
};

module.exports = {
  before: {
    // all: [ authenticate('jwt') ],
    all: [],
    find: [ disablePagination() ],
    get: [],
    create: [ checkIfExistsChat() ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [
      fastJoin(resolvers)
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
