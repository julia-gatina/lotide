const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

const expected = tail(['Hello', 'Lighthouse', 'Labs']);
const actual = ['Lighthouse', 'Labs']
assertArraysEqual(expected, actual);