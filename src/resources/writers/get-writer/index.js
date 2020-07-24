const writersService = require('../writers.service');

async function handler(ctx) {
  const writer = await writersService.getWriter(ctx.params.id);
  ctx.body = writer;
}

module.exports.register = (router) => {
  router.get('/:id', handler);
};
