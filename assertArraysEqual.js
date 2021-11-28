const eqArrays = function (array1, array2) {
  let areEquals = true;

  if (array1.length !== array2.length) {
    areEquals = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        areEquals = false;
        break;
      }
    }
  }
  return areEquals;
};

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

assertArraysEqual(['1', '2', '3'], ['1', '2', '3']); // => passed
