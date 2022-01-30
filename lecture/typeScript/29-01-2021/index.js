// Data Type Decleration
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date, "!"));
}
greet("1", new Date("12-12-2020"));
// String
var name1 = "Tahir";
// Number
var number = 1;
// Array
var array = ["One", "Two"];
// Any
var anyDataType = "234";
var person = {
    name: "Muhammad Tahir",
    age: 21,
    study: "BS CS",
    hobby: ["Web Devlopment", "Backend Dev"]
};
// Functions
function add(numOne, numTwo) {
    return numOne + numTwo;
}
var addFun = function (num1, num2) {
    return num1 + num2;
};
var getFullName = function (person) {
    if (person.age) {
        return "".concat(person.firstName, " ").concat(person.lastName, " and age is ").concat(person.age);
    }
    else {
        return "".concat(person.firstName, " ").concat(person.lastName);
    }
};
var myself = {
    firstName: "Muhammad",
    lastName: "Tahir"
};
var myself2 = {
    firstName: "Muhammad",
    lastName: "Tahir",
    age: 21
};
var myself3 = {
    firstName: "Muhammad",
    lastName: "Tahir",
    age: "Twenty One"
};
console.log(getFullName(myself));
console.log(getFullName(myself2));
console.log(getFullName(myself3));
