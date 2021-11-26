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

console.log(middle([]));
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
