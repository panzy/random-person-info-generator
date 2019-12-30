const { randInt, randItem } = require('../lib/rand-funcs.js');

module.exports = function gen(dob) {
  if (!dob)
    dob = [
      randInt(1950, 2010),
      new Number(randInt(1, 12)).toString().padStart(2, '0'),
      new Number(randInt(1, 30)).toString().padStart(2, '0'),
    ].join('');

  return [
    randInt(100, 600),
    randInt(100, 999),
    dob,
    randInt(100, 999),
    randInt(10, 99),
    randItem('1234567890X')
  ].join('');
};
