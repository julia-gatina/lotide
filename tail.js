// 1. Function to compare 2 values
// Function that only takes the 'tail' of an array (everything but the head, first item)

const tail = array => {
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

module.exports = tail;
