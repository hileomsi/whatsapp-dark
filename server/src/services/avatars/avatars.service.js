// Initializes the `avatars` service on path `/avatars`
const createService = require('feathers-nedb');
const createModel = require('../../models/avatars.model');
const hooks = require('./avatars.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/avatars', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('avatars');

  service.hooks(hooks);
};
