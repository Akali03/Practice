const fruits = ["apple", "banana", "orange", "grapes"];

const find = fruits.find(f => f === "orange") //Return the first element that matches a condition

console.log(find); //orange


const numbers = [1, 2, 3, 4];

const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2
