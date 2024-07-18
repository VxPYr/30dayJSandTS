// Activity-1: Fucntion Declaration
// Task-1
function checkEvenOdd(num1) {
    console.log(num1%2==0?`${num1} is even`:`${num1} is odd`);
}
checkEvenOdd(11);

// Task-2
function square(num){
    console.log(`Square of ${num} is ${num*num}`);
}
square(4);

// Activity-2: Function expression
// Task-3
let max = function(a, b){
    return a>b?a:b;
}
console.log(`The max number is ${max(5,4)}`);

// Task-4
let str1 = "Hello.";
let str2= "How are you?";

let concatenate = function(str1, str2){
    return str1+str2;
}
console.log(concatenate(str1, str2));

// Activity-3: Arrow Functions
// Task-5
let sum2 = (num1,num2) => {
    console.log(`Sum of ${num1} and ${num2} is ${num1+num2}`);
    // console.log(`${5+5}`);
}
sum2(5,6);
// sum2();

// Task-6
let checkCharacter = (stringToBeChecked, character)=>{
    let val = stringToBeChecked.includes(character)
    if(val == true){
        return true;
    }
    else{
        return false;
    }
    // let res = val==true?true:false;
    // console.log(res);
}
console.log(checkCharacter("Howdy", "d"));

// Activity-4: Fucntion parameter and Default values
// Task-7
function product(a, b=3){
    console.log(`Product of ${a} and ${b} is ${a*b}`);
}
product(5);
product(2,5);

// Task-8
function greet(name,age= 20){
    console.log(`Hello ${name}, you are ${age} years old`);
}
greet("Vatsya", 24);
greet("Valp");

// Activity-5: Higher-Order function
// Task-9
function implement(givenString){
    console.log(givenString);
}

const high = function higherOrder(secondFunction, number){
    for(i=0; i<number;i++){
        secondFunction("Brag");
    }
}

console.log(high(implement, 5));

// Task-10
function firstFunction(num){
    return num*num;
}
function secondFunction(num){
    return num+10;
}

let multiHigherOrder = function multi(firstFunc, secondFunc, value){
    // secondFunc(firstFunc(value));
    let res = firstFunc(value);
    console.log(secondFunc(res));
}
console.log(multiHigherOrder(firstFunction, secondFunction, 5));