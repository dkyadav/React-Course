function greeter1(person: string) {
	return "Hello, " + person;
}

let user1 = "Jane User";

console.log(greeter1(user1));

type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
	year: CarYear;
	type: CarType;
	model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";
const car: Car = {
	year: carYear,
	type: carType,
	model: carModel,
};

console.log(car);

interface Rectangle {
	height: number;
	width: number;
}

const rectangle: Rectangle = {
	height: 20,
	width: 10,
};

console.log(rectangle);