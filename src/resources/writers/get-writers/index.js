const writersService = require('../writers.service');

async function handler(ctx) {
  const {
    pageNumber = 1,
    documentsInPage = 5,
    sortBy = '_id',
    sortOrder = 1,
  } = ctx.query;
  const data = await writersService.find({}, {
    page: +pageNumber,
    perPage: +documentsInPage,
    $sort: { [sortBy]: sortOrder },
  });
  ctx.body = data;
}

module.exports.register = (router) => {
  router.get('/', handler);
};
