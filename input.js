const { calc } = require('./calc')
let args = process.argv;
console.log(args);

let command = args[2];
let num1 = args[3];
let num2 = args[4];

try{
    if(isNaN(Number(num1)) || isNaN(Number(num2)))
        throw "nan";
    
    calc[command](num1,num2);
}
catch(e)
{  
    if(e == "nan")
        console.log("You didn't enter a valid number!");
    else
        console.log('Command not found');
}