const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail function", () => {

  it("Returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs'])
  });

  it("Returns [3, 4, 5] for [2, 3, 4, 5]", () => {
    assert.deepEqual(tail([2, 3, 4, 5]), [3, 4, 5])
  });
});