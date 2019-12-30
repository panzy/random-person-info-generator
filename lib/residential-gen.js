/*
 * Provides functions to genrate random residential area name, like "金色家园".
 */

module.exports = gen;

const { randItem } = require('../lib/rand-funcs.js');

const PART1 = [
  "阳光", "金色", "锦绣", "未来", "金碧", "书香",
  "幸福", "玲珑", "璀璨", "鼎盛", "传奇", "卓越",
];

const PART2 = [
  "花园", "水岸", "江南", "绿洲", "海岸", "左岸", "蓝湾", "海湾",
  "华府", "公园", "豪庭", "小镇", "华庭", "雅苑", "庄园", "山庄",
  "御苑",
];

function gen() {
  return randItem(PART1) + randItem(PART2);
}
