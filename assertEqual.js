const assertEqual = function (actual, expected) {
  if (actual === expected) console.log(`😀 😀 Assertion Passed: ${actual} === ${expected}`);
  else console.log(`😞 😞 Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual('bootcamp', 'Bootcamp');
assertEqual(34, 34);
