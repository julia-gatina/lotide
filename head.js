const assertEqual = function (actual, expected) {
  let message = '';
  if (actual === expected) {
    message = `😀 😀 Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `😞 😞 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(message);
};

const head = (array) => {
  return array[0];
};

const param1 = head([5, 6, 7]);
const param2 = 5;
assertEqual(param1, param2);

assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
