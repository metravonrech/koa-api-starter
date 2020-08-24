const writersService = require('../writers.service');

async function handler(ctx) {
  const writer = await writersService.findOne({ _id: ctx.params.id });
  ctx.body = writer;
}

module.exports.register = (router) => {
  router.get('/:id', handler);
};
