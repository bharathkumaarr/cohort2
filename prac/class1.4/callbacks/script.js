// callback functions -function calling inside another function

function square(n) {
    return n*n;
}
function cube(n) {
    return n*n*n;
}

// function sumOfSquares(a,b) {
//     return square(a) + square(b);
// }
// function sumOfSCubes(a,b) {
//     return cube(a) + cube(b);
// }

function sumOfSomething(a,b,fn) {
    return fn(a) + fn(b);
}
// console.log(sumOfSquares(2,3));
// console.log(sumOfSCubes(2,3));
console.log(sumOfSomething(2,3,square));
console.log(sumOfSomething(2,3,cube));