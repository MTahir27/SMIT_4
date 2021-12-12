// Arrow Function
double = (num) => 2 * num;
console.log(double(3));


const arr = [1, 2, 3, 4, 5];
const doubleArr = arr.map((item) => item * 2);
console.log(doubleArr);


// Technical Difference
const obj = {
    name: "Tahir",
    getName: function name() {
        return this.name;
    },
};

console.log(obj.getName());


const objname = {
    name: "Parent",
    child: {
        getName: () => {
            return this.name;
        },
    },
    // getName: () => {
    //     return this.name;
    // },
};
console.log(objname.child.getName());