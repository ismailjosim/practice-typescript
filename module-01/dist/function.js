"use strict";
// Normal function: in JS
// function add(num1, num2) {
// 	return num1 + num2
// }
// Normal function: in TS
function add2(num1, num2) {
    return num1 + num2;
}
// add(2, 3) // 5
// add2('2', 2) // will show error
add2(2, 2); // 4
// arrow function in ts
const addArrow = (num1, num2) => num1 + num2;
const addArrow2 = (num1, num2) => {
    return num1 + num2;
};
// Squire the elements
const arr = [2, 3, 5];
const newArray = arr.map((el) => el * el);
console.log(newArray);
// Function in object method
const person = {
    name: 'ismail',
    balance: 2000,
    addBalance(money) {
        console.log(`My new Balance is ${this.balance + money}`);
    },
};
