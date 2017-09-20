"use strict";
console.log('TS works!');
//DataTypes
/*1:  string*/
var myName = "Anand";
// myName = 24; => It will give error;
var yourName;
yourName = 'ABC';
/*2: number*/
var myAge = 30;
// myAge = 'Anand'; => It will give error;
var yourAge;
yourAge = 40;
/*3: boolean*/
var hasHobbies = true;
//hasHobbies =  1; => It will also give an error.
/*4: Assign types 'any';*/
var myId; // By default it's type is 'any
myId = 30.5;
myId = '30.5';
var yourId;
yourId = 'ABC001';
yourId = 2001;
/*5 : array */
var myHobbies = ['writing', "running"];
//myHobbies = [100, 200]; // Error: Type 'number[]' is not assignable to type 'string[]'.
var yourHobies;
yourHobies = ['playing', 'reading'];
yourHobies = [100, 200];
//6: tuples
var myDetail = ['Anand Dev', 30];
// myDetail = [30, 'Anand Dev']; => This will throw an error.
var yourDetail = ['Abigail', 24];
var hisDetails = { name: "John", age: 33 };
// In the case of object, sequence doesn't matters, but propertynames neet to be same.
var herDetails = { name: "Abigail", age: 24, greet: function () {
        console.log('Hello tuple');
    } };
herDetails.greet();
//7: enum 
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Blue"] = 101] = "Blue";
    color[color["Green"] = 102] = "Green"; // = 102
})(color || (color = {}));
console.log(color.Blue);
var myColor = color.Green;
console.log(myColor);
//8: any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 'x' };
console.log(car);
//9: function return types
function getName() {
    return "JavaScript";
}
console.log(getName());
//10: void => If there is nothing to return from function.
function greet() {
    console.log('Hello!');
}
greet();
//11: arguments types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 4));
//12: function type
var myFunction;
myFunction = greet;
myFunction();
myFunction = multiply;
myFunction(2, 4);
var yourFunction;
// yourFunction = greet; => It will thow an error.
yourFunction = multiply;
console.log(yourFunction(4, 10));
//13: objects
var myUserData = {
    name: 'Anand Dev',
    age: 30
};
// myUserData = {}  => It will throw an error.
/* Even this will throw an error because the property names are different. */
/*myUserData = {
    a: 'Anand Dev',
    b: 30
}*/
// how to define the object's type is
var yourUserData = {
    name: "Praveen",
    age: 32
};
// complex object
var myComplex = {
    data: [10, 20, 40],
    output: function (all) {
        return this.data;
    }
};
console.log(myComplex.output(true));
var yourComplex = {
    data: [10, 20, 40],
    output: function (all) {
        return this.data;
    }
};
