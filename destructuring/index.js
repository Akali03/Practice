//Array Destructuring
const numbers = [1,2,3,4,5,6,7,8];
//1st-index  2nd-index  3rd-index   
const [first,  second,  third] = numbers;
console.log(first)

const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
const [firstColor, secondColor, thirdColor] = colors;
// const [firstColor, secondColor, thirdColor, ...rest] = colors;

console.log(firstColor);


//OObject Destructuring
const person = {
    name: 'John Doe',
    age: 20,
    sex: 'Male'
};
const {name ,age , sex} = person;

console.log(sex)

//swapping variables
let num1 = 5;
let num2 = 10;
[num1,num2] = [num2, num1]; //destructuring assignment

console.log(num2)
// console.log(typeof num1)