const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


// Function to return the 'middle' of an array
const middle = array => {
  const onlyMiddleArray = [];

  const arraySize = array.length;
  if (arraySize > 3) {
    // odd number of items - 1 in the middle
    if (arraySize % 2 !== 0) {
      const middleIndex = (arraySize - 1) / 2;
      onlyMiddleArray.push(array[middleIndex]);
      // even number of items - 2 in the middle
    } else {
      const halfArraySize = arraySize / 2;
      const middleIndexes = {
        first: halfArraySize - 1,
        second: halfArraySize,
      };
      onlyMiddleArray.push(array[middleIndexes.first]);
      onlyMiddleArray.push(array[middleIndexes.second]);
    }
  }
  // < 3 items - []
  return onlyMiddleArray;
};


module.exports = middle;