const assertEqual = function (actual, expected) {
  let message = '';
  if (actual === expected) {
    message = `😀 😀 Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `😞 😞 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(message);
};

//Returns the key of the matched element, else undefined.

const findKey = function (object, callback) {
  let keyFound;
  // scan the object
  for (const key in object) {
    // find first key for which callback returns truthy value
    if (callback(object[key])) {
      //return that key, if no key found, return indefined
      keyFound = key;
      break;
    }
  }
  return keyFound;
};

// TESTING
const object1 = {
  'Blue Hill': { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

const callback1 = x => x.stars === 2;
assertEqual(findKey(object1, callback1), 'noma'); // --> passed

const object2 = {
  pizza: { top: 'cheese', add: 'meat' },
  pizza2: { top: 'goat cheese', add: 'tomato' },
  pizza3: { top: 'cheese', add: 'chicken' },
};

const callback2 = x => x.top === 'cheese' && x.add === 'chicken';
assertEqual(findKey(object2, callback2), 'pizza1'); // --> failed, has to be pizza3
