const assertEqual = function (actual, expected) {
  let message = '';
  if (actual === expected) {
    message = `😀 😀 Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `😞 😞 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(message);
};

assertEqual('bootcamp', 'Bootcamp');
assertEqual(34, 34);
