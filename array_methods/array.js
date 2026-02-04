const fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["apple", 10, true, null];

console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "orange"
fruits[1] = "grape"; // modify element
console.log(fruits); // ["apple", "grape", "orange"]

//loop
for (let i = 0; i < numbers.length; i++) {
  console.log(`Loop ${numbers[i]}`);
}


let arr1 = new Array(5); // creates an array of length 5, empty slots
let arr2 = new Array(1, 2, 3); // creates [1, 2, 3]
arr1 = "first array"
arr1 = "second array"
console.log(arr1);
console.log(arr2);


