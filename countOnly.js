// counts only those values of an array that are set to true;

const assertEqual = (actual, expected) => {
  let message = '';
  if (actual === expected) {
    message = `😀 😀 Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `😞 😞 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(message);
};

const countOnly = (allItems, itemsToCount) => {
  const results = {};
  for (const item of allItems) {
    if (results[item]) {
      if (itemsToCount[item]) {
        results[item]++;
      }
    } else {
      results[item] = 1;
    }
  }
  return results;
};

// initial values to take for counting

const firstNames = ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'];

// but only count the ones that are set to true

const result1 = countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false });

assertEqual(result1['Jason'], 1);
// compare counted result (nuber of times the name is in firstNames array) with the provided outcome.
assertEqual(result1['Karima'], undefined);
assertEqual(result1['Fang'], 2);
assertEqual(result1['Agouhanna'], undefined);
