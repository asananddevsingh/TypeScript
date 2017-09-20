console.log('TS works!');

//DataTypes
/*1:  string*/
let myName = "Anand";
// myName = 24; => It will give error;
let yourName: string;
yourName = 'ABC';

/*2: number*/
let myAge = 30;
// myAge = 'Anand'; => It will give error;
let yourAge : number;
yourAge = 40;

/*3: boolean*/
let hasHobbies = true;
//hasHobbies =  1; => It will also give an error.

/*4: Assign types 'any';*/
let myId; // By default it's type is 'any
myId = 30.5;
myId = '30.5';

let yourId: any;
yourId = 'ABC001';
yourId = 2001;

/*5 : array */
let myHobbies = ['writing', "running"];
//myHobbies = [100, 200]; // Error: Type 'number[]' is not assignable to type 'string[]'.

let yourHobies : any[];
yourHobies = ['playing', 'reading'];
yourHobies = [100,200];

//6: tuples
let myDetail = ['Anand Dev' , 30];
// myDetail = [30, 'Anand Dev']; => This will throw an error.
let yourDetail : [string, number] = ['Abigail', 24];
let hisDetails: {name: string, age:number} = {name: "John", age:33};
// In the case of object, sequence doesn't matters, but propertynames neet to be same.
let herDetails: {age:number, name: string, greet: () => void } = {name: "Abigail", age:24, greet: function () {
	console.log('Hello tuple');
}};

herDetails.greet();

//7: enum 
enum color {
	Red, // = 0
	Blue = 101, // = 101
	Green // = 102
}

console.log(color.Blue);
let myColor = color.Green;
console.log(myColor);

//8: any
let car: any = "BMW";
console.log(car);
car = {brand: "BMW", series: 'x'};
console.log(car);

//9: function return types
function getName (): string{ // Here 'string' is the return type.
	return "JavaScript"
}
console.log(getName());

//10: void => If there is nothing to return from function.
function greet (): void{
	console.log('Hello!');
}
greet()

//11: arguments types
function multiply (value1: number, value2: number){
	return value1 * value2;
}

console.log(multiply(2, 4));

//12: function type
let myFunction;
myFunction = greet;
myFunction();
myFunction = multiply;
myFunction(2,4); 

let yourFunction: (val1: number, val2: number) => number;
// yourFunction = greet; => It will thow an error.
yourFunction = multiply;
console.log(yourFunction(4, 10));

//13: objects
let myUserData = {
	name: 'Anand Dev',
	age: 30
}

// myUserData = {}  => It will throw an error.
/* Even this will throw an error because the property names are different. */
/*myUserData = {
	a: 'Anand Dev',
	b: 30
}*/

// how to define the object's type is
let yourUserData : {name: string, age: number } = {
	name: "Praveen",
	age: 32
}

//14: complex types
let myComplex: {data: number[], output: (all: boolean) => number []} = {
	data: [10, 20, 40],
	output: function(all: boolean): number []{
		return this.data;
	}
} ;

console.log(myComplex.output(true));

// Using 'type' keyword, we can create our own complex types. 
// This is also called as type aliasing.
type myType = {data: number[], output: (all: boolean) => number []};

let yourComplex : myType = {
	data: [10, 20, 40],
	output: function(all: boolean): number []{
		return this.data;
	}
} ;

//15: union types (when there is posibility of having more than one type and we don't want to use any)
let mySalary : number | string;
mySalary = 100;
mySalary = '100';
// mySalary = [100]; This is not posible where as we can assign both number and string to mySalary variable.

//16: check types => by using typeof keyword.
let anything = 14;
if(typeof anything === 'number'){
	console.log('This is number');
}

//17: never type (When any function is not going to return anything, NOT even void e.g. Exception's)
function neverReturns(): never{
	throw new Error('My Error');	
}

//neverReturns();

//18: nullable types (this check can be controlled by the flag "strictNullChecks": true/false in tsconfig.js).
let canNotBeNull = 12;
// canNotBeNull = null; => This is not possible.

// Here we are making it nullable by assigning type 'null' as union.
let canBeNull: number | null = 12;
canBeNull  = null;

// Because implicitly it's type is null.
let canAlsoBeNull = null;
canAlsoBeNull = 4;
canAlsoBeNull = null;
canAlsoBeNull = 'ABC';

// Because be default it's type is any.
let canAlsoBeAgainNull;
canAlsoBeAgainNull = 1001;
canAlsoBeAgainNull =  null;

/****************************************************
	Excercise = Add types in the below code snippet
*****************************************************/


/*let bankAccount = {
	money: 2000,
	deposit (value) {
		this.money += value;
	}
};

let myself = {
	name: "Anand Dev",
	bankAccount: bankAccount,
	hobbies: ['reading', 'running']
}

myself.bankAccount.deposit(3000);

console.log(myself);*/


type bankType = {money: number, deposit: (val: number) => void };
let bankAccount: bankType = {
	money: 2000,
	deposit (value: number) : void {
		this.money += value;
	}
};

let myself : {name: string, bankAccount: bankType, hobbies: string[] } = {
	name: "Anand Dev",
	bankAccount: bankAccount,
	hobbies: ['reading', 'running']
}
 
myself.bankAccount.deposit(3000);

console.log(myself);

/************************ Excercise - END ******************************/