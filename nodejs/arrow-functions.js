const array = [2, 3, 6, 4];
array.sort(function(a, b) {
    return a - b
})

array.sort((a, b) => a - b);
const total = array.reduce((previous, current) => previous + current);

// console.log(total);

const add = (numbers) => {
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        sum = sum + element;
    }
    return sum;
}
const result = add([2, 3, 6, 5, 6])
console.log(result);