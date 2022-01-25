//This is MAIN script

//IMPORT MAIN HELPER
const makeEmail = require('./helpers/mainHelper');

//IMPORT ISEMAIL
const isEmail = require('isemail');

//SETTINGS
const setup = '200@1.1';

//GENERATING
const email = makeEmail(setup);
console.log(email);

//CHECK that generated email is valid
console.log(isEmail.validate(email));
