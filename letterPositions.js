// returns all the indices (zero-based positions)
// of each character in a string;

const assertArraysEqual = function (array1, array2) {
  let isEquals = true;
  let message = '';

  // 1. compare lengths, if length is not equal, no need to compare elements
  if (array1.length !== array2.length) {
    return (isEquals = false);
  } else {
    // 2. compare each element
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return (isEquals = false);
        break;
      }
    }
  }

  if (isEquals) {
    message = `😀 😀 Assertion Passed: ${array1} === ${array2}`;
  } else {
    message = `😞 😞 Assertion Failed: ${array1} !== ${array2}`;
  }
  console.log(message);
  return true;
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

// hello
const letterPositions = function (sentence) {
  const sentenceToArrayOfChars = sentence.split('');
  const results = {};

  for (let i = 0; i < sentenceToArrayOfChars.length; i++) {
    const char = sentenceToArrayOfChars[i];
    if (results[char] !== ' ') {
      if (!results[char]) {
        results[char] = [i];
      } else {
        results[char].push(i);
      }
    }
  }
  return results;
};

console.log(letterPositions('hello'));

assertArraysEqual(letterPositions('hello').e, [1]);
