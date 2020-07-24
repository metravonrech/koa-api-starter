// eslint-disable-next-line no-unused-vars
const Joi = require('@hapi/joi');

// eslint-disable-next-line no-unused-vars
const validate = require('middlewares/validate');
const writersService = require('../writers.service');
//
// const schema = Joi.object({
//   firstName: Joi.string()
//     .trim()
//     .required()
//     .messages({
//       'string.empty': 'First name is required',
//     }),
//   lastName: Joi.string()
//     .trim()
//     .required()
//     .messages({
//       'string.empty': 'Last name is required',
//     }),
//   age: Joi.string()
//     .trim()
//     .required()
//     .messages({
//       'number.empty': 'Age is required',
//     }),
// });


async function handler(ctx) {
  const fields = Object.keys(ctx.request.body);
  const values = Object.values(ctx.request.body);
  if (!fields.id) {
    ctx.statusCode = 418;
    ctx.body = 'Specify id of writer';
  }

  writersService.updateWriter(fields, values);
}

module.exports.register = (router) => {
  router.put('/', handler);
};
