let array = [];
console.log(array);
// array with elements
let element = [1, 2, 3, "hello", false, 'c', 45.556];
console.log(element);
// calling the indexes 
console.log(element[2]);
//replace elements
element[6] = 45.5;
console.log(element[6]);
//Array methods
console.log("Array methods");
element.push("new item");
console.log(element);
element.pop();
console.log(element);
element.shift();
console.log(element);
element.unshift("New element");
console.log(element);
let len = element.length;
console.log(len);