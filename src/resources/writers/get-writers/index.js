const writersService = require('../writers.service');

async function handler(ctx) {
  console.log('AAAAAAAAAAAAAAAAAAAAAaa ', ctx.query);
  const {
    pageNumber = 1,
    documentsInPage = 5,
    // sortBy = 'firsrName',
    // sortOrder = 1,
  } = ctx.query;
  const data = await writersService.aggregate([
    // {
    //   $sort:
    // },
    {
      $skip: (pageNumber - 1) * documentsInPage,
    },
    {
      $limit: +documentsInPage,
    },
  ]);
  // .sort({ [sortBy]: sortOrder })
  // .skip((pageNumber - 1) * documentsInPage)
  // .limit(documentsInPage);
  ctx.body = data;
}

//
// service.addBook = async (req) => {
//   return service.atomic.findOneAndUpdate({ _id: req.id }, {
//     $push: {
//       books: {
//         id: uuidv4(),
//         title: req.title,
//         genre: req.genre,
//       },
//     },
//   });
// };


module.exports.register = (router) => {
  router.get('/', handler);
};
