const fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];

//Loops through indexes
for(const index in fruits){
    console.log(index);
    
}

for(const index in numbers){
    console.log(index);
}

//for object
const test = {
    name: "John Doe",
    age: 21
}

const thisname = "name"
console.log(test[thisname]);

for(const index in test){  //property assign index variable
    console.log(test[index]); //Use bracket notation if the property name is in a variable
}
