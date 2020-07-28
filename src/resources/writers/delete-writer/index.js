const writersService = require('../writers.service');

async function handler(ctx) {
  const writer = await writersService.deleteWriter(ctx.request.body.id);
  if (!writer) {
    ctx.statusCode = 418;
    ctx.body = 'there is no writer with such id';
  } else {
    ctx.body = 'writer was deleted';
  }
}

module.exports.register = (router) => {
  router.delete('/', handler);
};
