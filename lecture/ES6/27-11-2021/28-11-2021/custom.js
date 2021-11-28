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