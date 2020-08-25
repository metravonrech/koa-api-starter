const chai = require('chai');
const supertest = require('supertest');
const db = require('tests/db');

const { expect } = chai;

const server = require('app');
const { WRITERS } = require('tests/constants');
const testsHelper = require('tests/tests.helper');

const WriterBuilder = require('./writers.builder');
const writerSchema = require('./writers.schema');

const app = server.listen();
const writerService = db.createService(WRITERS.COLLECTION, writerSchema);

const TEST_WRITER = {
  _id: '1',
  firstName: 'name',
  lastName: 'lastName',
  age: 5,
  books: [
    {
      title: 'poem',
      genre: 'poem',
    },
    {
      title: 'novel',
      genre: 'novel',
    },
  ],
};

describe('/writers', async () => {
  const writerReq = supertest.agent(app);

  beforeEach(async () => {
    await new WriterBuilder().build();
  });

  afterEach(async () => {
    await db.get(WRITERS.COLLECTION).drop();
  });

  it('should return writer', (done) => {
    testsHelper.test(done, async () => {
      await writerService.findOne();
    });
  });

  it('should return an error if writer\'s age is not a number', (done) => {
    testsHelper.test(done, async () => {
      const writers = await writerService.findOne();
      expect(writers.age).to.be.a('number');
    });
  });

  it('should return an error if writer\'s firstName is not a string', (done) => {
    testsHelper.test(done, async () => {
      const writers = await writerService.findOne();
      expect(writers.firstName).to.be.a('string');
    });
  });

  it('should return an error if writer\'s lastName is not a string', (done) => {
    testsHelper.test(done, async () => {
      const writers = await writerService.findOne();
      expect(writers.lastName).to.be.a('string');
    });
  });

  it('should return an error if writer\'s books is not a array', (done) => {
    testsHelper.test(done, async () => {
      const writers = await writerService.findOne();
      expect(writers.books).to.be.a('array');
    });
  });

  it('should return an error if writer\'s books title is not a string', (done) => {
    testsHelper.test(done, async () => {
      const writers = await writerService.findOne();
      expect(writers.books[0].title).to.be.a('string');
    });
  });

  it('should return an error if writer\'s books genre is not a string', (done) => {
    testsHelper.test(done, async () => {
      const writers = await writerService.findOne();
      expect(writers.books[0].genre).to.be.a('string');
    });
  });

  it('should return error if client is empty', (done) => {
    testsHelper.test(done, async () => {
      await writerReq.get('/writers').expect(200);
    });
  });

  it('should create writer', (done) => {
    testsHelper.test(done, async () => {
      await writerReq.post('/writers')
        .send(TEST_WRITER)
        .expect(200);
    });
  });

  it('should return an error if writer doesn\'t exists', (done) => {
    testsHelper.test(done, async () => {
      await writerService.create(TEST_WRITER);
      await writerReq.delete('/writers').send({ id: 1 })
        .expect(200);
    });
  });

  it('should update writer', (done) => {
    testsHelper.test(done, async () => {
      await writerService.create(TEST_WRITER);
      await writerReq.put('/writers')
        .send({ id: 1, firstName: 'uniqueName' })
        .expect(200);
    });
  });
});
