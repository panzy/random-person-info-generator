/*
 * Provides functions to generate random full name.
 */

const surnames = require('../data/surnames.js');
const nameCharsMale = require('../data/name-chars-male.js');
const nameCharsFemale = require('../data/name-chars-female.js');
const { randItem } = require('../lib/rand-funcs.js');

/**
 * Generate a random full name.
 * @arg {int} [sex=0] 0 for random, 1 for male, and 2 for female.
 */
module.exports = function gen(sex = 0) {
  let c1, c2, c3;
  c1 = randItem(surnames);

  if (sex === 1) {
    c2 = randItem(nameCharsMale);
    c3 = randItem(nameCharsMale);
  } else if (sex === 2) {
    c2 = randItem(nameCharsFemale);
    c3 = randItem(nameCharsFemale);
  } else {
    if (Math.random() > 0.5) {
      c2 = randItem(nameCharsMale);
      c3 = randItem(nameCharsMale);
    } else {
      c2 = randItem(nameCharsFemale);
      c3 = randItem(nameCharsFemale);
    }
  }

  return c1 + c2 + (Math.random() > 0.5 ? c3 : '');
};
