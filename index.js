const Ajv = require('ajv');
const userSchema = require('./schemas/user.json');
const usersSchema = require('./schemas/users.json');

const data = {
  users: [
    {
      name: 'Josefine',
    },
    {
      age: 23,
    },
  ],
};

const ajv = new Ajv();
ajv.addSchema(userSchema);
ajv.addSchema(usersSchema);
const valid = ajv.validate('#users', data);
if (!valid) {
  console.error(ajv.errors);
} else {
  console.log('no errors');
}
