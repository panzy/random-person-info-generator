const gen = require('../lib/person-gen.js');

let n = 1;
if (process.argv.length >= 3) {
  n = parseInt(process.argv[2]);
}

for (let i = 0; i < n; ++i) {
  let {id, name, dob, sex, mobile, addr} = gen();
  console.log([0, id, name, dob, sex, mobile, addr].join('\t'));
}
