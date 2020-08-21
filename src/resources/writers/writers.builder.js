const faker = require('faker');

const db = require('tests/db');
const { WRITERS } = require('tests/constants');
const BaseBuilder = require('tests/base.builder');

const validateSchema = require('./writers.schema');

const writers = db.createService(WRITERS.COLLECTION, { validateSchema });

class UserBuilder extends BaseBuilder {
  constructor({
    firstName = faker.name.firstName(),
    lastName = faker.name.lastName(),
    age = faker.random.number(),
    books = {
      title: faker.adjective(),
      genre: 'poem',
    },
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

module.exports = UserBuilder;
