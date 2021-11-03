

let args = process.argv;
console.log(args);

let command = args[2];
let num1 = args[3];
let num2 = args[4];

let calc = {
    add(a,b){
        let num1 = Number(a);
        let num2 = Number(b);
        console.log(a+b);
    },

    subtract(a,b){
        let num1 = Number(a);
        let num2 = Number(b);
        console.log(a-b);
    },

    multiply(a,b){
        let num1 = Number(a);
        let num2 = Number(b);
        console.log(a*b);
    },

    divide(a,b){
        let num1 = Number(a);
        let num2 = Number(b);
        console.log(a/b);
    },

    remainder(a,b){
        let num1 = Number(a);
        let num2 = Number(b);
        console.log(a%b);
    },

    exponent(a,b){
        let num1 = Number(a);
        let num2 = Number(b);
        console.log(Math.pow(a,b));
    }
}

//const calculate = () => {


try{
calc[command](num1,num2);}
catch{
    console.log('not a command')
}


//}
//exports.calculate = calculate;