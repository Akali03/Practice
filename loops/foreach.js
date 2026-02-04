const fruits = ["apple", "banana", "orange"];

fruits.forEach(f =>{
    console.log(`Fruits loop: ${f}`);
})

fruits.forEach((value, index)=>{ //value and index
    console.log(`Get value and Index:  value: ${value} - index: ${index}`); 
    
})     