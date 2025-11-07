function oddAndEven(num){
    let isEven = num % 2 == 0;

   return isEven ? 'Even': 'Odd';
}
console.log(oddAndEven(4)) //Even
console.log(oddAndEven(3)) //Odd