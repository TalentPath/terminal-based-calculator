/*let args = process.argv;
console.log(args);

let command = args[2];
let num1 = args[3];
let num2 = args[4];*/

let calc = 
{
    add(a=0,b=0) {
        let num1 = Number(a);
        let num2 = Number(b);
        console.log(num1+num2);
    },
    subtract(a=0,b=0)
    {
        let num1 = Number(a);
        let num2 = Number(b);
        console.log(num1 - num2);
    },
    multiply(a=0,b=0)
    {
        let num1 = Number(a);
        let num2 = Number(b);
        console.log(num1 * num2);
    },
    divide(a=0,b=0)
    {
        let num1 = Number(a);
        let num2 = Number(b);
        if(num2 == 0)
            console.log("Can't divide by 0!");
        else
            console.log(num1 / num2);
    },
    remainder(a=0,b=0)
    {
        let num1 = Number(a);
        let num2 = Number(b);
        console.log(num1 % num2);
        if(num2 == 0)
            console.log("Can't divide by 0!");
        else
            console.log(num1 / num2);
    },
    exponent(a=0,b=0)
    {
        let num1 = Number(a);
        let num2 = Number(b);
        console.log(num1 ** num2);
    }
}

/*try{
    if(isNaN(Number(num1)) || isNaN(Number(num2)))
        throw "nan";
    calculator.calc[command](num1,num2);
}
catch(e)
{  
    if(e == "nan")
        console.log("You didn't enter a valid number!");
    else
        console.log('Command not found');
}*/


//So the obvious deal is that we need to catch if the command is not found,
//an