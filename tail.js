// returns the 'tail' of an array, i.e. everything but the 'head'

const tail = array => {
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

module.exports = tail;
