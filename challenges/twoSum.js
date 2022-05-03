const assert = require('assert');

const twoSum = (nums = [], target = 0) => {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 < nums.length) {
      let sum = nums[i] + nums[i + 1];
      if (sum === target) {
        res.push(i);
        res.push(i + 1);
        break;
      }
    }
  }
  return res;
};

describe('Tests Two Sum ', function () {
  it('Should return a function', function () {
    assert(typeof twoSum === 'function');
  });
  it('Function should return an Array', function () {
    assert(Array.isArray(twoSum()) === true);
  });
  it('Function should return [1,2]', function () {
    assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
  });
  it('Function should return [0,1]', function () {
    assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
  });
  it('Function should return [0,1]', function () {
    assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  });
});
