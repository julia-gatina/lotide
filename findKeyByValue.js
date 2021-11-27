const assertEqual = function (actual, expected) {
  let message = '';
  if (actual === expected) {
    message = `😀 😀 Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `😞 😞 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(message);
};

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};

const findKeyByValue = function (objectToScan, valueToFind) {
  let key = '';
  for (let i in objectToScan) {
    if (objectToScan[i] === valueToFind) {
      key = i;
      break;
    }
  }
  return key;
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine'), 'sci_fi');
