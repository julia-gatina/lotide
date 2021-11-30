const assertEqual = require('../assertEqual');
const head = require('../head');


assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');

const param1 = [5, 6, 7];
const param2 = 5;
assertEqual(head(param1), param2);