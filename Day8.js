// Activity-1: Template Literals
// Task-1
let name = "Vatsya", age=20, year1=2000;
console.log(`My name is ${name} and I am ${age} years old`);

// Task-2
let str = 
`Hello, this is first line.
This is second line.`
console.log(str);

// Actvity-2: Destructuring
// Task-3
let numArr = [1,4,2,6,34,64,23];
let [a,b] = numArr;
console.log(a,b);

// Task-4
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
};
let {title,author,year} = book;
console.log(title,author,year);

// Activity-3: Spread and Rest operators
// Task-5
let arr = [...numArr, 200, 120]; // spread operator copies
console.log(arr);

// Task-6
function sum(a,b,c,d, ...e){
    let s = 0;
    for(let i=0; i<e.length; i++){
        s += e[i];
    }
    console.log(s);
}
sum(5,5,5,5,5,5,5);

// Activity-4: Default Parameters
// Task-7
function task7(a,b=1){
    return a*b;
}
console.log(task7(5));
console.log(task7(7,5))

// Activity-5: Enhanced Object Literals
// Task-8
let variable = "lastName"
let obj = {
    name,
    age,
    year1,
    study(subject){
        console.log(`I am studying ${subject} in ${year1} year`);
    },
}
console.log(obj);

// Task-9
let obj1 ={
    [variable]: "Varja"
}
console.log(obj1);