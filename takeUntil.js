// returns a slice of array with elements taken from the 
// beginning until a callback function returns true

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

//Function to return a slice of array with elements taken from the beginning
// until a callback function returns true

const takeUntil = function (array, callback) {
  const sliceOfArray = [];

  // loop through array
  for (let i = 0; i < array.length; i++) {
    // if callback is false, push results to sliceOfArray
    if (!callback(array[i])) {
      sliceOfArray.push(array[i]);
      // check if callback is true and if so, break
    } else {
      break;
    }
  }
  return sliceOfArray;
};

// TESTING
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const expectedArray1 = [1, 2, 5, 7, 2];
const callbackFunction1 = x => x < 0;

assertArraysEqual(takeUntil(data1, callbackFunction1), expectedArray1);

console.log('---');

const data2 = ["I've", 'been', 'to', 'Hollywood', ',', "I've", 'been', 'to', 'Redwood'];
const expectedArray2 = ["I've", 'been', 'to', 'Redwood'];
const callbackFunction2 = x => x === ',';
assertArraysEqual(takeUntil(data2, callbackFunction2), expectedArray2);
