const faker = require('faker');

const { v4: uuidv4 } = require('uuid');
const db = require('tests/db');
const { WRITERS } = require('tests/constants');
const BaseBuilder = require('tests/base.builder');

const validateSchema = require('./writers.schema');

const writers = db.createService(WRITERS.COLLECTION, { validateSchema });

class WritersBuilder extends BaseBuilder {
  constructor({
    firstName = faker.name.firstName(),
    lastName = faker.name.lastName(),
    age = faker.random.number(),
    books = [{
      id: uuidv4(),
      title: faker.hacker.adjective(),
      genre: 'poem',
    }],
  } = {}) {
    super(writers);

    this.data = {
      ...this.data,
      firstName,
      lastName,
      age,
      books,
    };
  }
}

module.exports = WritersBuilder;
