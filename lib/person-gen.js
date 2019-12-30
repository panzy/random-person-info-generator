/*
 * Provides functions to generate random person information, including name,
 * sex, dob, mobile, and addr.
 */

module.exports = gen;

const { randInt, randItem } = require('../lib/rand-funcs.js');
const name = require('../lib/fullname-gen.js');
const addr = require('../lib/addr-gen.js');
const personId = require('../lib/person-id-gen.js');

function gen() {
  let sex = randInt(1, 2);
  let id = personId();
  return {
    id,
    name: name(sex),
    dob: id.substr(6, 8),
    sex,
    addr: addr(),
    mobile: ['1', randInt(30, 99), randInt(1000, 9999), randInt(1000, 9999)].join(''),
  };
}
