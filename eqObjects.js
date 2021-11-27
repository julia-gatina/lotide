const assertEqual = function (actual, expected) {
  let message = '';
  if (actual === expected) {
    message = `😀 😀 Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `😞 😞 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(message);
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

// for testing with objects with arrays inside

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

// const a = { c: '1', d: ['2', 3] };
// const b = { d: ['2', 3], c: '1' };
// assertEqual(eqObjects(a, b), true); // => true

const c = { c: '1', d: ['2', '3'] };
const d = { d: 2, c: '1' };
assertEqual(eqObjects(c, d), true); // => false
