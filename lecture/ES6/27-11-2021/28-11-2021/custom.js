// // Tthis Keyword
// const mySelf = {
//     name: "Mauhammad Tahir",
//     changeNmae: function (newName) {
//         //Get the name property & then assign the new value to name
//         mySelf.name = newName; //Not Recomended
//         // this keyword represent the object in which yoou calling the function
//         console.log("This use in Function: ", this);
//         mySelf.name = newName;

//         // Another Menthod
//         this.name = newName;
//     },
// };

// console.log(mySelf);
// console.log(mySelf.changeNmae("Hamza"));
// console.log(mySelf);
// console.log(mySelf);


// function myFun() {
//     console.log("This :", this);
// }
// myFun();


// const obj = {
//     a: {
//         name: "Mauhammad Tahir",
//         changeName: function () {
//             console.log(this);
//         }
//     },
//     changeName: function () {
//         console.log(this);
//     }
// };

// console.log(obj.changeName());
// console.log(obj.a.changeName());
// // Global Object



// Classes In OOP
// Class is a blue print to make object


// Class of Human

class Human {
    // Constructor -> function
    constructor(name, height, age) {
        this.name = name;
        this.height = height;
        this.age = age;
    };
    // name, Heght, age
    // Change Name, Height, Age
};

const mySelf = new Human("Muhammad Tahir", '5.8', '20');
const mySelf2 = new Human("Syed Husnain Shah", '5.8', '20');
const mySelf3 = new Human("Hamza Amir", '5.8', '20');
console.log("My Self: ", mySelf);
console.log("My Self2: ", mySelf2);
console.log("My Self3: ", mySelf3);