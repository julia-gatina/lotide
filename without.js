// returns a new array with only those elements from source 
// that are not present in the itemsToRemove array

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


const without = function (source, itemsToRemove) {
  const arrayWithout = [];
  for (const sourceItem of source) {
    let foundInItemsToRemove = false;

    for (const removeItem of itemsToRemove) {
      if (sourceItem === removeItem) {
        foundInItemsToRemove = true;
      }
    }

    if (!foundInItemsToRemove) {
      arrayWithout.push(sourceItem);
    }
  }
  return arrayWithout;
};

const words = ['hello', 'world', 'lighthouse'];
assertArraysEqual(without(words,['hello1', 'world1', 'lighthouse']), ['hello', 'world']);
assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
