// Chase Faggard - Talent Path - 11/3/2021
// "Calculator Functions"

/* Description: Exports an object that contains calculator functions */

const functions = {
    add(a, b) { return a + b; },
    subtract(a, b) { return a - b; },
    multiply(a, b) { return a * b; },
    divide(a, b) { return a / b; },
    remainder(a, b) { return a % b; },
    exponent(a, b) { return a ** b; }
}

module.exports = { functions }; // Export module