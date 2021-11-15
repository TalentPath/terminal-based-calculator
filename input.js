const calc = require('./calculator.js');

// Gus input 
// input terminal value     
let args = process.argv;
let command = args[2]
let num1 = args[3];
let num2 = args[4];

//Promt 
// console.log("Type in the Arithmetic and two number \n ")
// console.log("Add, Subtract,  Multiply,  Divide, Remainder,  Exponents ") ; 

console.log(args); 
try {
  if(typeof num1 === "string" && typeof num2 === "string"){
    num1 = Number(num1);
    num2 = Number(num2);
  }
} catch (error) {
    console.log("This is a string")

}

calc[command](num1,num2);


let obj = {
  favLang: 'Java',
  understanding: 6,
  toLearn: 'ML' 

}