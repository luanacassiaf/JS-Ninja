"use strict";

var exp = function exp(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return x * y;
};

console.log(exp(2, 8));
