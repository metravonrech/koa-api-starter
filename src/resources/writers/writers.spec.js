// const _ = require('lodash');
// const supertest = require('supertest');
// const chai = require('chai');
//
// const server = require('app');
// const db = require('tests/db');
// const { WRITERS } = require('tests/constants');
// const testsHelper = require('tests/tests.helper');
//
// const WritersBuilder = require('./writers.builder');
// const writersSchema = require('./writers.schema');
//
//
// const app = server.listen();
// // const writersService = db.createService(WRITERS.COLLECTION, writersSchema);
// chai.should();
//
// describe('/writers', async () => {
//   let newUser;
//   let verifiedUser;
//
//   let verifiedUserRequest;
//
//   before(async () => {
//     await db.get(WRITERS.COLLECTION).drop();
//
//     [
//       newUser,
//       verifiedUser,
//     ] = await Promise.all([
//       new WritersBuilder().build(),
//     ]);
//
//     verifiedUserRequest = supertest.agent(app);
//   });
//
//   it('should successfully return data of the current user', (done) => {
//     testsHelper.test(done, async () => {
//       // const startTime = Date.now();
//
//       // let updated = verifiedUser;
//
//       const response = await verifiedUserRequest.post('/writers/books')
//         .expect(200);
//       console.log(response);
//
//       // testsHelper.checkAutoUpdatedFields(response, startTime, autoUpdatedFields);
//       // response.body.should.be.deep.equal(testsHelper.datesToISOStrings(
//       //   _.omit(updated, WRITERS.PRIVATE_FIELDS),
//       // ));
//
//       // const dbUser = await writersService.findOne({ _id: updated._id });
//       // testsHelper.datesToISOStrings(dbUser).should.be.deep.equal(
//       //   testsHelper.datesToISOStrings(updated),
//       // );
//
//       verifiedUser = updated;
//     });
//   });
//
// //   it('should return an error that email is already in use', (done) => {
// //     testsHelper.test(done, async () => {
// //       const response = await verifiedUserRequest.put('/users/current')
// //         .send({ email: newUser.email })
// //         .expect(400);
// //
// //       response.body.should.be.deep.equal({ errors: ERRORS.EMAIL_IN_USE });
// //     });
// //   });
// //
// //   it('should successfully update user info', (done) => {
// //     testsHelper.test(done, async () => {
// //       const startTime = Date.now();
// //
// //       const newUserData = {
// //         firstName: '123',
// //         lastName: 'Test',
// //       };
// //       let updated = {
// //         ...verifiedUser,
// //         ...newUserData,
// //       };
// //
// //       const response = await verifiedUserRequest
// //         .put('/users/current')
// //         .send(newUserData)
// //         .expect(200);
// //
// //       const autoUpdatedFields = ['lastRequest', 'updatedOn'];
// //       updated = autoUpdatedFields.reduce((acc, field) => ({
// //         ...acc,
// //         [field]: response.body[field],
// //       }), updated);
// //
// //       testsHelper.checkAutoUpdatedFields(response, startTime, autoUpdatedFields);
// //       response.body.should.be.deep.equal(testsHelper.datesToISOStrings(
// //         _.omit(updated, USER.PRIVATE_FIELDS),
// //       ));
// //
// //       const dbUser = await userService.findOne({ _id: updated._id });
// //       testsHelper.datesToISOStrings(dbUser).should.be.deep.equal(
// //         testsHelper.datesToISOStrings(updated),
// //       );
// //
// //       verifiedUser = updated;
// //     });
// //   });
// //
// //   it('should successfully update user info exept not existing field', (done) => {
// //     testsHelper.test(done, async () => {
// //       const startTime = Date.now();
// //
// //       const newUserData = {
// //         firstName: '123',
// //         lastName: 'Test',
// //         email: 'new@email.com',
// //       };
// //       let updated = {
// //         ...verifiedUser,
// //         ...newUserData,
// //       };
// //
// //       const response = await verifiedUserRequest
// //         .put('/users/current')
// //         .send({
// //           ...newUserData,
// //           not_exists: 'value',
// //         })
// //         .expect(200);
// //
// //       const autoUpdatedFields = ['lastRequest', 'updatedOn'];
// //       updated = autoUpdatedFields.reduce((acc, field) => ({
// //         ...acc,
// //         [field]: response.body[field],
// //       }), updated);
// //       console.log("awdaw ", response.body);
// //       testsHelper.checkAutoUpdatedFields(response, startTime, autoUpdatedFields);
// //       response.body.should.be.deep.equal(testsHelper.datesToISOStrings(
// //         _.omit(updated, WRITERS.PRIVATE_FIELDS),
// //       ));
// //
// //       const dbUser = await writersService.findOne({ _id: updated._id });
// //       testsHelper.datesToISOStrings(dbUser).should.be.deep.equal(
// //         testsHelper.datesToISOStrings(updated),
// //       );
// //
// //       verifiedUser = updated;
// //     });
// //   });
// });
