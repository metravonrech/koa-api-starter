const Joi = require('@hapi/joi');

const validate = require('middlewares/validate');

const writersService = require('../writers.service');

const schema = Joi.object({
  firstName: Joi.string()
    .trim()
    .messages({
      'string.empty': 'First name should be string',
    }),
  lastName: Joi.string()
    .trim()
    .messages({
      'string.empty': 'Last name should be string',
    }),
  age: Joi.string()
    .trim()
    .messages({
      'number.empty': 'Age should be string',
    }),
});


async function handler(ctx) {
  if (!ctx.request.body.id) {
    ctx.statusCode = 418;
    ctx.body = 'Specify id of writer';
  }
  await writersService.updateWriter(ctx.request.body);
  ctx.body = {};
}

module.exports.register = (router) => {
  router.put('/', validate(schema), handler);
};
