let calc = {
    add(a, b)
    {
        console.log();
        console.log(`${a} + ${b} = ${a+b}`);
        console.log();
    },

    subtract(a, b)
    {
        console.log();
        console.log(`${a} - ${b} = ${a-b}`);
        console.log();
    },

    multiply(a, b)
    {
        console.log();
        console.log(`${a} * ${b} = ${a*b}`);
        console.log();
    },

    divide(a, b)
    {
        if (b == 0)
        {
            console.log();
            console.log(`${a} / ${b} = Undefined`);
            console.log();
        }
        else
        {
            console.log();
            console.log(`${a} / ${b} = ${a/b}`);
            console.log();
        }
    },

    remainder(a, b)
    {
        console.log();
        console.log(`The remainder of '${a} / ${b}" is ${a%b}`);
        console.log();
    },

    exponents(a, b)
    {
        console.log();
        console.log(`${a} to the power of ${b} = ${a**b}`);
        console.log();
    }
}

module.exports = { calc };