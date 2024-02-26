class Student {
	fullName: string;
	constructor(
		public firstName: string,
		public middleInitial: string,
		public lastName: string
	) {
		this.fullName = firstName + " " + middleInitial + " " + lastName;
	}
}

interface Person {
	firstName: string;
	lastName: string;
    middleInitial?:String;
}

function greeter(person: Person) {
	return "Hello, " + person.firstName + " " + person.middleInitial+ " " + person.lastName;
}

let userClass = new Student("Jane", "M.", "User");

console.log(greeter(userClass));

const personobj: Person = {
	firstName: "Deepak",
	lastName: "yadav",
};

console.log(greeter(personobj));