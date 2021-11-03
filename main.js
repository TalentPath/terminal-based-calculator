// Chase Faggard - Talent Path - 11/3/2021
// "Simple JS Calculator"

/* Description: Takes & verifies cmd input, then returns 
 * a calculated result accordingly. 
 */

const { functions } = require('./functions.js') // Import function object

const args =  process.argv; // Get arguments

if(args.length == 5) { // Check length
    const num1 = parseInt(args[3]);
    const num2 = parseInt(args[4]);
    if(!isNaN(num1) && !isNaN(num2)) { // If last two arguments are numbers
        try {
            console.log(functions[args[2].toLowerCase()](num1, num2));
        } catch (error) {
            console.log("Command not found.");
        }
    } else { console.log("Please enter a number for the last 2 arguments"); }
} else { console.log("Incorrect number of arguments"); }

