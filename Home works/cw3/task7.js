// 7. Добавьте ["Paul", 35] в начало переменной myArray, используя unshift().

// // Setup
// var myArray = [["John", 23], ["dog", 3]];

var myArray = [["John", 23], ["dog", 3]];
var newLength = myArray.unshift(["Paul", 35]);
console.log(newLength);
console.log(myArray);