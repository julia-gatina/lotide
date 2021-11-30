const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(['1', '2', '3'], ['1', '2', '3']); // => passed
assertArraysEqual(['1', '2'], ['1', '2', '3']);