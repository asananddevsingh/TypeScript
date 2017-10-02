//1. let and const variables
let myBlockScoveVar = "Variable with block scope";

const maxPercentage = 100;
//maxPercentage = 99; // It is not possible with const keyword variable. It is immutable variable.

// Block scope
function reset (){
	if(true){
		let myValue = 100;	
		console.log("Variable inside if block: ", myValue)
	}	
	//console.log("Variable outside if block: ", myValue);//  It will throw an error.
}

reset();

//2. Arrow functions
console.log("ARROW FUNCTIONS");
const addNumbers = function (number1 : number, number2:number ): number{
	return number1  + number2;
}

console.log(addNumbers(10, 4));

const multipleNumbers = (num1: number, num2: number): number => {
	return num1 * num2;
}

console.log(multipleNumbers(10,4));

//OR => If there is only one line i.e. return statement in the function then this can be done like.

const divideNumbers = (num1: number, num2: number ): number => num1/num2;

console.log(divideNumbers(40,10));

// OR => function with only one parameter.

const printFn = message  => message;

console.log(printFn("Printing..."));

// OR => If function without any parameter.

const greetFn = () => console.log('welcome');

greetFn();

//3. Default Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start:number = 4): void => {
	console.log('Starting value: ', start);
	while(start > 0){ 
		start--;
	}
	console.log('Done: ', start);
}
countdown();

// Multiple default values.
// Here we are using default value of 'start' in  'target' since start is defined before target
// But can't use value of 'target' in 'start'.
const printTable = (tableOf: number, start: number = 1, target: number = start + 10): void => {
	console.log('Table of: ', tableOf)	;
	while(start < target){
		console.log(tableOf*start);
		start++;
	}
}

printTable(2);
printTable(3, 1);

//4. Rest & Spread operators.
console.log('REST & SPREAD');

const numbers = [1,10,40, -4];
// console.log(Math.max(numbers)); //It will not work.
console.log(Math.max(...numbers)); // Here tripple dots '...' are spread operator.

// Here tripple dots '...' are rest operator
function makeArray(name: string , ...restValues: number[]): number []{
	return restValues;
}

console.log(makeArray("Anand", 1,2,3,4,5));

//5. Destructuring
console.log('DESTRUCTURING');

// With Array
const hobbies = ['running', 'playing', 'reading'];

const [hobby1, ...restHobbies] = hobbies;
console.log('First hobby:',  hobby1);
console.log('Rest of hobbies:',  restHobbies);

// With Object

const userData = {username: "Anand", age: 30, salary:100};

// Traditional way
const userName = userData.username;
const userAge = userData.age;

// Destructuring way
const {username, age, salary: userSalary} = userData; // Here userSalary is alias to salary property.

console.log('username: ', username, '- age: ', age , '- salary: ', userSalary);

//6. Template Literals;
const myCompany = "Picturewale";

// Traditional way
let greetings = 'Welcome to ' + myCompany + 'How may I help you.';
console.log(greetings);

// Using backticks (`) 
greetings = `Welcome!
to ${myCompany} 
How may I help you.`;

console.log('Using template literals: ', greetings);

