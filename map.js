// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.

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

const words = ['ground', 'control', 'to', 'major', 'tom'];

const map = function (arrayToMap, callbackFunction) {
  const results = [];
  for (let item of arrayToMap) {
    results.push(callbackFunction(item));
  }
  return results;
};

//testing
const expectedArray = ['ground1', 'control1', 'to1', 'major1', 'tom1'];
const callback = word => word + 1;

assertArraysEqual(map(words, callback), expectedArray); // => passed

const expectedArray1 = ['GROUND', 'CONTROL', 'TO', 'MAJOr', 'TOM'];
const callback1 = word => word.toUpperCase();
assertArraysEqual(map(words, callback1), expectedArray1); // => failed

const expectedArray2 = ['ground1', 'control1', 'to1', 'major1', 'tom1'];
const callback2 = word => word.split('').reverse().join('');
assertArraysEqual(map(words, callback2), expectedArray2); // => failed
