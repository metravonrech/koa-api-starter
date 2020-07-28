const { v4: uuidv4 } = require('uuid');
const db = require('db');
const constants = require('app.constants');

const validateSchema = require('./writers.schema');

const service = db.createService(constants.DATABASE_DOCUMENTS.WRITERS, { validateSchema });

service.createWriter = async (writer) => {
  writer.books.forEach((book) => {
    // eslint-disable-next-line no-param-reassign
    book.id = uuidv4();
  });
  return service.create(writer);
};

service.getWriter = async (_id) => {
  if (!_id) {
    return service.find({});
  }
  return service.findOne({ _id });
};

service.deleteWriter = async (_id) => {
  return service.remove({ _id });
};

service.updateWriter = async (writer) => {
  const { id } = writer;
  // eslint-disable-next-line no-param-reassign
  delete writer.id;
  return service.atomic.findOneAndUpdate({ _id: id }, {
    $set: writer,
  });
};

service.addBook = async (req) => {
  return service.atomic.findOneAndUpdate({ _id: req.id }, {
    $push: {
      books: {
        id: uuidv4(),
        title: req.title,
        genre: req.genre,
      },
    },
  });
};

service.deleteBook = async (idWriter, idBook) => {
  return service.atomic.update({ _id: idWriter }, {
    $pull: {
      books: {
        id: idBook,
      },
    },
  });
};

service.updateBooks = async (req) => {
  req.books.forEach((book) => {
    // eslint-disable-next-line no-param-reassign
    book.id = uuidv4();
  });
  return service.atomic.findOneAndUpdate({ _id: req.id }, {
    $set: {
      books: req.books,
    },
  });
};

module.exports = service;
