const assert = require('assert');

const getCharValue = (char) => {
  switch (char) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
    default:
      return -1;
  }
};

const romanToInt = (s) => {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let num1 = getCharValue(s.charAt(i));
    if (i + 1 < s.length) {
      let num2 = getCharValue(s.charAt(i + 1));
      if (num1 < num2) {
        total = total - num1;
      } else if (num1 >= num2) {
        total = total + num1;
      }
    } else {
      total = total + num1;
    }
  }
  return total;
};

describe('Tests Roman to integer', function () {
  it('Should return a function', function () {
    assert(typeof romanToInt === 'function');
  });
  it('Function should return an Integer', function () {
    assert(typeof romanToInt('I') === 'number');
  });
  it('Function should return 3', function () {
    assert(romanToInt('III') === 3);
  });
  it('Function should return 58', function () {
    assert(romanToInt('LVIII') === 58);
  });
  it('Function should return 1994', function () {
    assert(romanToInt('MCMXCIV') === 1994);
  });
});
