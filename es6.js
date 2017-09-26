//1. let and const variables
var myBlockScoveVar = "Variable with block scope";
var maxPercentage = 100;
//maxPercentage = 99; // It is not possible with const keyword variable. It is immutable variable.
// Block scope
function reset() {
    if (true) {
        var myValue = 100;
        console.log("Variable inside if block: ", myValue);
    }
    //console.log("Variable outside if block: ", myValue);//  It will throw an error.
}
reset();
//2. Arrow functions
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 4));
var multipleNumbers = function (num1, num2) {
    return num1 * num2;
};
console.log(multipleNumbers(10, 4));
//OR => If there is only one line i.e. return statement in the function then this can be done like.
var divideNumbers = function (num1, num2) { return num1 / num2; };
console.log(divideNumbers(40, 10));
// OR => function with only one parameter.
var printFn = function (message) { return message; };
console.log(printFn("Printing..."));
// OR => If function without any parameter.
var greetFn = function () { return console.log('welcome'); };
greetFn();
