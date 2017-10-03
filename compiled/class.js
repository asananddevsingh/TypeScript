"use strict";
// Class in typescript.
var Person = /** @class */ (function () {
    /* Here public username:string is shortcut to create a public property and asign it its value in constructure as well.*/
    function Person(name, username) {
        this.username = username;
        this.age = 30;
        this.name = name;
        this.setAge(40);
    }
    /*Methods*/
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    return Person;
}());
var person = new Person('Anand', 'anand');
console.log(person);
// Here both name and username properties are available.
console.log("Username: " + person.username + " & Name: " + person.name);
person.printAge();
person.setType('Cool');
// person.setAge(40) // This is not accessable.
