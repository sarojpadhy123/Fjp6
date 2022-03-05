console.log("Swagat mhi karoge hamara!!1");
let a = 10;
let str = "String";
let bool = true;
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//print num is prime
let n = 123;
for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
        isprime = false;
    }
}
if (isprime == true) {
    console.log("Number is prime");
} else {
    console.log("Number is not prime");
}

function hello() {
    console.log("Hello");
}
hello();
//function with parameters
function add(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
}
add(10, 15);
//function with return values
function mul(num1, num2) {
    let multiply = num1 * num2;
    return multiply;

}
mul(10, 15);
let ans = mul(10, 15);
console.log(ans);
let another = function subtract(num1, num2) {
    return num1 - num2;
}
console.log(another(10, 5));
let divison = function divide(num1, num2) {
    return num1 / num2;
}
console.log(divison(100, 2));
//iife imidiate invoke function iife
(function() {
    console.log("Hello i am IIFE!");
})();
// IIFE with parameters
(function(num1, num2) {
    console.log(num1 + " " + num2);
})(10, 2);
(function(num1, num2, num3) {
    let add = num1 + num2 + num3;
    console.log(add);
})(10, 15, 25);