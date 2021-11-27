const eqObjects = function (object1, object2) {
  let areEqual = true;
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length === object2Keys.length) {
    for (const key of object1Keys) {
      const object1KeyValue = object1[key];
      const object2KeyValue = object2[key];
      // compare value in both object for the same key (e.g. c:)

      const isObject1KeyValueOfTypeArray = Array.isArray(object1KeyValue);
      const isObject2KeyValueOfTypeArray = Array.isArray(object2KeyValue);

      // 1. if both values are Arrays
      if (isObject1KeyValueOfTypeArray && isObject2KeyValueOfTypeArray) {
        // compare Arrays
        const areArraysEqual = eqArrays(object1KeyValue, object2KeyValue);
        if (!areArraysEqual) {
          areEqual = false;
          break;
        }
        // 2. else if only one of the values is Array
      } else if (isObject1KeyValueOfTypeArray || isObject2KeyValueOfTypeArray) {
        // not equal
        areEqual = false;
        break;
        // 3. else if both values are primitive
      } else {
        // compare primitives
        if (object1KeyValue !== object2KeyValue) {
          areEqual = false;
          break;
        }
      }
    }
  } else {
    areEqual = false;
  }
  return areEqual;
};

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

// will take two objects and print appropriate message
const inspect = require('util').inspect;
// use the util library's inspect function, so it does not print [obeject object]
const assertObjectsEqual = function (actual, expected) {
  let message = '';
  const areObjectsEqual = eqObjects(actual, expected);

  if (areObjectsEqual) {
    message = `😀 😀 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    message = `😞 😞 Assertion Failed: ${inspect(actual)} !== ${inspect(actual)}`;
  }
  console.log(message);
};

const c = { c: '1', d: ['2', '3'] };
const d = { d: 2, c: '1' };

const a = { a: '1', b: ['2', '3'] };
const b = { b: ['2', '3'], a: '1' };

assertObjectsEqual(c, d); // => failed
assertObjectsEqual(a, b); // => passed
