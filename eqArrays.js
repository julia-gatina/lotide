// Task: function that can compare two arrays for a perfect match.

const assertEqual = function (actual, expected) {
  let message = '';
  if (actual === expected) {
    message = `😀 😀 Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `😞 😞 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(message);
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true); // => true
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
