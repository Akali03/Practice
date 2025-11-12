//javascript hoisting
/*
Function declarations are fully hoisted. 
This means you can call a function before its declaration appears in the code, and it will execute correctly.
*/
myFunction(); //this works!

function myFunction(){
    console.log('This is a Function');
}

/*
Variables declared with var are hoisted, but only their declaration is moved to the top of the scope, 
not their initialization. They are initialized with undefined when hoisted
*/
console.log(myVar); //undefined
var myVar = "Hello";


console.log(letVar); //// ReferenceError: Cannot access 'myLet' before initialization
let myLet = "Hello";


console.log(myConst); //ReferenceError: Cannot access 'myConst' before initialization
const myConst = "Hello";
