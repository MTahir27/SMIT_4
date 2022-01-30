// Data Type Decleration
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date}!`);
}
greet("1", new Date("12-12-2020"));

// String
const name1: string = "Tahir";
// Number
const number: number = 1;
// Array
const array: string[] = ["One", "Two"];
// Any
const anyDataType: any = "234";
// Multiple Type
type personType = {
  name: string;
  age: number;
  study: string;
  hobby: string[];
};

const person: personType = {
  name: "Muhammad Tahir",
  age: 21,
  study: "BS CS",
  hobby: ["Web Devlopment", "Backend Dev"],
};

// Functions
function add(numOne: number, numTwo: number): number {
  return numOne + numTwo;
}

// Arrow Function
type addFunType = (num1: number, num2: number) => number;
const addFun: addFunType = (num1, num2) => {
  return num1 + num2;
};

type personType2 = {
  firstName: string;
  lastName: string;
  age?: number | string;
};

type getFullNameType = (person: personType2) => string;

const getFullName: getFullNameType = (person) => {
  if (person.age) {
    return `${person.firstName} ${person.lastName} and age is ${person.age}`;
  } else {
    return `${person.firstName} ${person.lastName}`;
  }
};

const myself = {
  firstName: "Muhammad",
  lastName: "Tahir",
};

const myself2 = {
  firstName: "Muhammad",
  lastName: "Tahir",
  age: 21,
};

const myself3 = {
  firstName: "Muhammad",
  lastName: "Tahir",
  age: "Twenty One",
};

console.log(getFullName(myself));

console.log(getFullName(myself2));
console.log(getFullName(myself3));
