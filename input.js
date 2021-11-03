let mycalc = require("./calc");

let args = process.argv;
let commandList = ["add", "subtract", "divide", "multiply", "remainder", "exponents"];

// console.log(args);

if (args.length != 5)
{
    console.log();
    console.log(`You entered ${args.length-2} arguments, which is invalid`);
    console.log("Please enter a command followed by only two numbers as arguements");
    console.log("Valid commands are:");
    console.log(commandList);
    console.log();
    process.exit();
}

let num1 = 0;
let num2 = 0;

num1 = Number(args[3]);

if (!isNaN(num1))
{
    console.log();
    console.log("You entered an invalid argument for the first number.");
    console.log("Please try again with only numbers");
    console.log();
    process.exit();
}

num2 = Number(args[4]);
if (!isNaN(num2))
{
    console.log();
    console.log("You entered an invalid argument for the second number.");
    console.log("Please try again with only numbers");
    console.log();
    process.exit();
}

if (num1 > Number.MAX_SAFE_INTEGER)
{
    console.log();
    console.log("The first number is too large! Please enter a smaller number");
    console.log();
    process.exit();
}

if (num2 > Number.MAX_SAFE_INTEGER)
{
    console.log();
    console.log("The second number is too large! Please enter a smaller number");
    console.log();
    process.exit();
}

try
{
    command = args[2];
    mycalc.calc[command](num1, num2);
} catch (error)
{
    console.log();
    console.log("You entered an invalid command,", command);
    console.log("Valid commands are:");
    console.log(commandList);
    console.log();
    process.exit();
}