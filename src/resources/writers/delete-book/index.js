const writersService = require('../writers.service');

async function handler(ctx) {
  const { idWriter, idBook } = ctx.request.body;
  if (!ctx.request.body.idWriter || !ctx.request.body.idBook) {
    ctx.statusCode = 418;
    ctx.body = 'Specify id of book';
  } else {
    await writersService.deleteBook(idWriter, idBook);
    ctx.body = 'Book was deleted';
  }
}

module.exports.register = (router) => {
  router.delete('/books', handler);
};
