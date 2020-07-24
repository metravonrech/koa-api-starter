const Joi = require('@hapi/joi');

const validate = require('middlewares/validate');
const writersService = require('../writers.service');

const schema = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .messages({
      'string.empty': 'First name is required',
    }),
  lastName: Joi.string()
    .trim()
    .required()
    .messages({
      'string.empty': 'Last name is required',
    }),
  age: Joi.string()
    .trim()
    .required()
    .messages({
      'number.empty': 'Age is required',
    }),
  books: Joi.string()
    .trim()
    .required()
    .messages({
      'number.empty': 'Age is required',
    }),
});

async function handler(ctx) {
  await writersService.createWriter(ctx.request.body);
  ctx.body = 'Article created';
}

module.exports.register = (router) => {
  router.post('/', validate(schema), handler);
};
