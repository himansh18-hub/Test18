var age = 1;
let salary = 10000;
const fixed = 1000;
// fixed = 1200;
console.log(fixed);
const numbers = [2, 11, 1, 4, 3];
// numbers = [4, 5];
numbers.push(-1);
console.log(numbers);
const callback = function(x, y) {
    return y - x;
}
numbers.sort(callback);
console.log(numbers);

//npm i -g nodemon
//nodemon basics.js
//nested callback