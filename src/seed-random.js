export var seedRandom = function seedRandom(seed, range) {
  var adder = 0;
  return {
    next() {
      var big = (seed + adder++) * Math.PI;
      return Math.floor((big * adder - seed) % range);
    }
  }
}
