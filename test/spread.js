const human = {
	name: "Deepak",
	age: 37,
};

console.log(human);
console.log({ ...human, age: 40 });

const obj = { ..."test" };
console.log(obj);

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
console.log([...numbersOne]);
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

const myVehicle = {
	brand: "Ford",
	model: "Mustang",
	color: "red",
};

const updateMyVehicle = {
	type: "car",
	year: 2021,
	color: "yellow",
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle,year:2024 };

console.log(myUpdatedVehicle);
