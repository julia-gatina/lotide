const assertEqual = function (actual, expected) {
  let message = '';
  if (actual === expected) {
    message = `😀 😀 Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `😞 😞 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(message);
};

const assertArraysEqual = function (array1, array2) {
  let isEquals = true;
  let message = '';

  // 1. compare lengths
  if (array1.length !== array2.length) {
    isEquals = false;
  } else {
    // 2. compare each element
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        isEquals = false;
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
};

const tail = (array) => {
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertArraysEqual(result, ['Lighthouse', 'Labs']);
