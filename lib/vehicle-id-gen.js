/*
 * Provides functions to generate random vehicle ID, like "苏E12345".
 */

module.exports = gen;

const { randItem } = require('../lib/rand-funcs.js');

const CHAR1_LIST = [
  "京", "津", "冀", "晋", "辽", "吉", "黑", "沪", "苏", "浙", "皖",
  "闽", "赣", "鲁", "豫", "鄂", "湘", "粤", "桂", "琼", "川", "贵",
  "云", "渝", "藏", "陕", "甘", "青", "宁",
];
const CHAR2_LIST = "ABCDEFJHJK";
const CHAR3_LIST = "0123456789ABCDEFJHJKLMNPQRSTUVWXYZ";


/**
 * @arg {string} [char1] the first char, like '苏'.
 * @arg {string} [char2] the second char, like 'E'.
 */
function gen(char1, char2) {
  if (!char1)
    char1 = randItem(CHAR1_LIST);
  if (!char2)
    char2 = randItem(CHAR2_LIST);
  return char1 + char2 +
    randItem(CHAR3_LIST) + randItem(CHAR3_LIST) +
    randItem(CHAR3_LIST) + randItem(CHAR3_LIST) +
    randItem(CHAR3_LIST);
}
