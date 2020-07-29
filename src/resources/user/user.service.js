const _ = require('lodash');

const db = require('db');
const constants = require('app.constants');

const validateSchema = require('./user.schema');


const service = db.createService(constants.DATABASE_DOCUMENTS.USERS, { validateSchema });

service.updateLastRequest = async (_id) => {
  return service.atomic.update({ _id }, {
    $set: {
      lastRequest: new Date(),
      updatedOn: new Date(),
    },
  });
};

// eslint-disable-next-line no-unused-vars
const privateFields = [
  'passwordHash',
  'signupToken',
  'resetPasswordToken',
];

service.getPublic = (user) => {
  return _.omit(user);
};

module.exports = service;
