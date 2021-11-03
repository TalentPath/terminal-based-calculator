let calc = {
    add(a, b)
    {
        console.log(a+b);
    },

    subtract(a, b)
    {
        console.log(a-b);
    },

    multiply(a, b)
    {
        console.log(a*b);
    },

    divide(a, b)
    {
        if (b == 0)
        {
            console.log("Undefined");
        }
        console.log(a/b);
    },

    remainder(a, b)
    {
        console.log(a%b);
    },

    exponents(a, b)
    {
        console.log(a**b);
    }
}

module.exports = { calc };