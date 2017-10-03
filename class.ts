// Class in typescript.

class Person {
	/*Peoperties*/
	name: string; // This is public by default.
	private type: string;
	protected age: number = 30;

	/* Here public username:string is shortcut to create a public property and asign it its value in constructure as well.*/
	constructor(name:string, public username:string){ 
		this.name = name
		this.setAge(40);
	}

	/*Methods*/
	printAge(){
		console.log(this.age);
	}

	setType(type:string){
		this.type = type;
		console.log(this.type);
	}

	private setAge(age:number){
		this.age = age;
	}
}

const person = new Person('Anand', 'anand');
console.log(person);
// Here both name and username properties are available.
console.log(`Username: ${person.username} & Name: ${person.name}`);
person.printAge();
person.setType('Cool');
// person.setAge(40) // This is not accessable.
