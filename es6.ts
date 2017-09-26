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