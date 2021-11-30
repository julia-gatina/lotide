// Function that can compare two arrays for a perfect match.

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

module.exports = eqArrays;