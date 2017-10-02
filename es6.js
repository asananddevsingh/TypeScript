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
//3. Default Parameters
console.log("DEFAULT PARAMETERS");
var countdown = function (start) {
    if (start === void 0) { start = 4; }
    console.log('Starting value: ', start);
    while (start > 0) {
        start--;
    }
    console.log('Done: ', start);
};
countdown();
// Multiple default values.
// Here we are using default value of 'start' in  'target' since start is defined before target
// But can't use value of 'target' in 'start'.
var printTable = function (tableOf, start, target) {
    if (start === void 0) { start = 1; }
    if (target === void 0) { target = start + 10; }
    console.log('Table of: ', tableOf);
    while (start < target) {
        console.log(tableOf * start);
        start++;
    }
};
printTable(2);
printTable(3, 1);
//4. Rest & Spread operators.
console.log('REST & SPREAD');
var numbers = [1, 10, 40, -4];
// console.log(Math.max(numbers)); //It will not work.
console.log(Math.max.apply(Math, numbers)); // Here tripple dots '...' are spread operator.
// Here tripple dots '...' are rest operator
function makeArray(name) {
    var restValues = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restValues[_i - 1] = arguments[_i];
    }
    return restValues;
}
console.log(makeArray("Anand", 1, 2, 3, 4, 5));
//5. Destructuring
console.log('DESTRUCTURING');
// With Array
var hobbies = ['running', 'playing', 'reading'];
var hobby1 = hobbies[0], restHobbies = hobbies.slice(1);
console.log('First hobby:', hobby1);
console.log('Rest of hobbies:', restHobbies);
// With Object
var userData = { username: "Anand", age: 30, salary: 100 };
// Traditional way
var userName = userData.username;
var userAge = userData.age;
// Destructuring way
var username = userData.username, age = userData.age, userSalary = userData.salary;
console.log('username: ', username, '- age: ', age, '- salary: ', userSalary);
