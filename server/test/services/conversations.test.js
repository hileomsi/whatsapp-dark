const app = require('../../src/app');

describe('\'conversations\' service', () => {
  it('registered the service', () => {
    const service = app.service('conversations');
    expect(service).toBeTruthy();
  });
});
