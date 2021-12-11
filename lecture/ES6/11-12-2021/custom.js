const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve();
        reject();
    }, 3000);
});

console.log(1);

promise1.then(function () {
    console.log("Function Accept");
}).catch(function () {
    console.log("Function Reject");
});

const arr = [];
for (let index = 0; index < 1000; index++) {
    console.log("Task in Progress");
    arr.push(index);
}
console.log(arr);