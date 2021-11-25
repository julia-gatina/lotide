// 1. Function to compare 2 values

const assertEqual = function (actual, expected) {
  let message = '';
  if (actual === expected) {
    message = `😀 😀 Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `😞 😞 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(message);
};

// Function that only takes the 'tail' of an array (everything but the head, first item)

<<<<<<< a771c4f32723055140008eee48b3ded9cfd4d722
const tail = (array) => {
=======
const tail = array => {
>>>>>>> updates in tail function
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

<<<<<<< a771c4f32723055140008eee48b3ded9cfd4d722

// Upgrade of AssertEqual function to be able to compare two arrays

=======
// Upgrade of AssertEqual function to be able to compare two arrays
// TO DO => change the below function to the version in eqEqual.js and test!!!!!!!!!!
>>>>>>> updates in tail function
const assertArraysEqual = function (array1, array2) {
  let isEquals = true;
  let message = '';

  // 1. compare lengths, if length is not equal, no need to compare elements
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

<<<<<<< a771c4f32723055140008eee48b3ded9cfd4d722

=======
>>>>>>> updates in tail function
const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertArraysEqual(result, ['Lighthouse', 'Labs']);
