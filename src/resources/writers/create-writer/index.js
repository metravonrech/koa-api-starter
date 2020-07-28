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
  books: Joi.array().items(Joi.object().keys({
    title: Joi.string().required(),
    genre: Joi.string().pattern(new RegExp(/^(novel|poem)$/)).required(),
  })),
});

async function handler(ctx) {
  const writer = await writersService.createWriter(ctx.request.body);
  ctx.body = writer;
}

module.exports.register = (router) => {
  router.post('/', validate(schema), handler);
};
