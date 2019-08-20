const app = require('../../src/app');

describe('\'avatars\' service', () => {
  it('registered the service', () => {
    const service = app.service('avatars');
    expect(service).toBeTruthy();
  });
});
