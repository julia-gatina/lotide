// counts how many times each characted appears in a given sentence

const assertEqual = (actual, expected) => {
  let message = '';
  if (actual === expected) {
    message = `😀 😀 Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `😞 😞 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(message);
};

const countLetters = function (stringValue) {
  const result = {};
  for (const char of stringValue) {
    if (' ' !== char) {
      if (result[char]) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
};

console.log(countLetters('lighthouse in the house'));
