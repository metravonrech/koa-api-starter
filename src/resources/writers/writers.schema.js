const Joi = require('@hapi/joi');

const schema = Joi.object({
  createdOn: Joi.date().default(new Date()),
  firstName: Joi.string()
    .required(),
  lastName: Joi.string()
    .required(),
  age: Joi.string()
    .required(),
  books: Joi.array().items(Joi.object({
    _id: Joi.string(),
    title: Joi.string().required(),
    genre: Joi.string().regex(/^(novel|poem)$/),
  })),
});

module.exports = (obj) => schema.validate(obj, { allowUnknown: false });
