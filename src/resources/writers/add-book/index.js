const Joi = require('@hapi/joi');

const validate = require('middlewares/validate');
const writersService = require('../writers.service');

const bookSchema = Joi.object().keys({
  id: Joi.string().required(),
  title: Joi.string().required(),
  genre: Joi.string().valid('novel', 'poem').required(),
}).required();

async function handler(ctx) {
  if (!ctx.request.body.id) {
    ctx.statusCode = 404;
    ctx.body = 'Specify id of writer';
  } else {
    const writer = await writersService.addBook(ctx.request.body);
    ctx.body = writer;
  }
}

module.exports.register = (router) => {
  router.post('/books', validate(bookSchema), handler);
};
