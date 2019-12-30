/*
 * Provides functions to generate random address.
 */

module.exports = gen;

const { randInt, randItem } = require('../lib/rand-funcs.js');

const streets = require('../data/streets-suzhou');
const roads = require('../data/roads-suzhou');
const districts = require('../data/districts-suzhou');
const residential = require('../lib/residential-gen');

function gen() {
  if (Math.random() > 0.4) {
    // street
    return '苏州市' + randItem(districts) + randItem(streets) +
      randInt(1, 999) + '号';
  } else {
    // residential area
    return '苏州市' + randItem(districts) + randItem(roads) +
      residential() + randInt(1, 20) + randItem('幢栋') + randInt(1, 24) + '0' + randInt(1, 4) + '室';
  }
}
