const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  powerof: function (a, b) {
    return a ** b;
  },
};

const res1 = calculator.plus(2, 3);
const res2 = calculator.minus(res1, 5);
const res3 = calculator.times(res1, res2);
const res4 = calculator.divide(res3, 5);
const res5 = calculator.powerof(res4, res3);

console.log(res5);
