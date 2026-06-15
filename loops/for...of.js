//Use for iterating through values in arrays, strings, sets, etc.
const fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];

for(const fruit of fruits){
  //  console.log(fruit);
    
}

for(const number of numbers){
    //console.log(number);

}

//Real-world example
//Imagine an e-commerce cart:
const cart = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 }
];

let total = 0;
for(const item of cart){
    total += item.price;
}
console.log(total);

/*
This is a common use of for...of
because you're working directly with each item in an array.
*/

const word = 'hello'
let count = {};

/*
count["h"] = 1;
count["e"] = 1;
count["l"] = 2;
count["o"] = 1;
*/

for(const w of word){
  if(count[w]){
    count[w]++;
  }else{
     count[w] = 1;
  }


 } 
   
 console.log(count);