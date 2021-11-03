const calculate = require('./functions').functions;

let input = process.argv;
//console.log(input[2]);
let num1 = Number(input[3]), num2 = Number(input[4]), func = input[2].toLowerCase();

if(isNaN(num1)  || isNaN(num2)){
    console.log(`\nYour input variables: "${input[3]}" & "${input[4]}" were not valid numbers.\n`);
} else if (typeof calculate[func] != 'function'){
    console.log(`\nYour operation: "${input[2]}" & "${input[4]}" is invalid or not currently supported. Valid operations are: 
    \nAdd
    \nSubtract
    \nMultiply
    \nDivide
    \nRemainder
    \nExponents\n`);
}else {
    try{
        let result = calculate[func](num1, num2);
        if (typeof result === 'number'){
            console.log(result)
        } else {
            console.log(`\nAn error occurred. ${result}\n`)
        }
    } catch(e){
        console.log(`\nAn unexpected error occurred.\n`)
    }
}