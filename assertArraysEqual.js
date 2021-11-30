// compares two arrays for a perfect match and prints result as message;

const eqArrays = require('./eqArrays');

const assertArraysEqual = function (arr1, arr2) {
  let isEquals = eqArrays(arr1, arr2);
  let message = '';

  if (isEquals) {
    message = `😀 😀 Assertion Passed: ${arr1} === ${arr2}`;
  } else {
    message = `😞 😞 Assertion Failed: ${arr1} !== ${arr2}`;
  }

  console.log(message);
};



module.exports = assertArraysEqual;