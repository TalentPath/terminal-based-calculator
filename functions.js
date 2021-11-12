let functions = {
    add(a,b){
        return a+b;
    },
    subtract(a,b){
        return a-b;
    },
    multiply(a,b){
        return a*b;
    },
    divide(a,b){
        if(b === 0){
            return "Cannot divide by zero."
        }
        return a/b;
    },
    remainder(a,b){
        if(b === 0){
            return "Cannot divide by zero."
        }
        return a%b;
    },
    exponent(a,b){
        return Math.pow(a, b);
    },
}

exports.functions = functions;