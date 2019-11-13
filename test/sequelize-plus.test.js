'use strict';

const mock = require('egg-mock');

describe('test/sequelize-plus.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/sequelize-plus-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, sequelizePlus')
      .expect(200);
  });
});
