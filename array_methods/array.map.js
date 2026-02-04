const numbers = [1, 2, 3, 4, 5]

const doubled = numbers.map(num => num * 2)//Transform each element into a new array
console.log(doubled);


const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
];

const names = users.map(user => user.name);

console.log(names);



const fruits = ["apple", "banana", "orange", "grapes"];
const newFruits = fruits.map(f => f);
console.log(newFruits); // ["apple", "banana", "orange", "grapes"]
console.log(fruits);    // ["apple", "banana", "orange", "grapes"]


const numberedFruits = fruits.map((fruit, index) => `${index + 1}. ${fruit}`);
console.log(numberedFruits);
