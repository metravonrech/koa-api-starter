// const _ = require('lodash');

const db = require('db');
const constants = require('app.constants');

const validateSchema = require('./writers.schema');


const service = db.createService(constants.DATABASE_DOCUMENTS.WRITERS, { validateSchema });

service.updateArticle = async (_id) => {
  return service.atomic.update({ _id }, {
    $set: {
      lastRequest: new Date(),
      updatedOn: new Date(),
    },
  });
};

service.createWriter = async (article) => {
  return service.create(article);
};

service.getWriter = async (_id) => {
  if (!_id) {
    return service.find({});
  }
  return service.find({ _id });
};

service.deleteWriter = async (_id) => {
  return service.remove({ _id });
};

// service.updateWriter = async (fields, values) => {
//
//   return service.update({ _id: fields.id }, ((doc) => {
//       for (let i = 0; i < fields.length; i++) {
//         doc[fields[i]] =
//       }
//     }
//
//   ));
// };


// const privateFields = [
//   'passwordHash',
//   'signupToken',
//   'resetPasswordToken',
// ];
//
// service.getPublic = (user) => {
//   return _.omit(user, privateFields);
// };

module.exports = service;
