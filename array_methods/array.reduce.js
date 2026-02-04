const numbers = [1, 2, 3, 4, 5] //1 + 2 = 3 + 3 = 6 + 4 = 10 + 5 = 15

const sum = numbers.reduce((acc, num) => acc + num)//combine values step by step into a single result
console.log(sum); // 15
