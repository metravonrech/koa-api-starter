const Joi = require('@hapi/joi');

const validate = require('middlewares/validate');
const writersService = require('../writers.service');

const schema = Joi.object({
  books: Joi.array().items(Joi.object().keys({
    title: Joi.string().required(),
    genre: Joi.string().pattern(new RegExp(/^(novel|poem)$/)).required(),
  })).required(),
});

async function handler(ctx) {
  if (!ctx.request.body.id) {
    ctx.statusCode = 418;
    ctx.body = 'specify id of writer';
  } else {
    const writer = await writersService.updateBooks(ctx.request.body);
    ctx.body = writer;
  }
}

module.exports.register = (router) => {
  router.put('/books', validate(schema), handler);
};
