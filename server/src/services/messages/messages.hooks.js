const { authenticate } = require('@feathersjs/authentication').hooks;
const { disablePagination, fastJoin } = require('feathers-hooks-common');
const { updateLastMessageInChat } = require('./after');

const resolvers = {
  joins: {
    user: () => async (message, context) => {
      const Users = context.app.service('users');
      message.user = await Users.get(message.user, { paginate: false });
      return message;
    }
  }
};

module.exports = {
  before: {
    // all: [ authenticate('jwt') ],
    find: [
      disablePagination()
    ],
    get: [],
    create: [],
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
    create: [
      updateLastMessageInChat()
    ],
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
