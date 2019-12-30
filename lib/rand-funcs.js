module.exports = { randInt, randItem };

function randItem(arr) {
  return arr[randInt(0, arr.length - 1)];
}

function randInt(min, max) {
  return min + Math.round(Math.random() * (max - min));
}

