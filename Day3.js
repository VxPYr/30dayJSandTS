// Activity-1: if-else
let a= -10;
if(a>=1){
    console.log(`${a} is positive.`);
}
else if(a==0){
    console.log(`${a} is zero.`);
}
else{
    console.log(`${a} is negative.`);
}

let age = 18;
if(age>=18){
    console.log("You can vote.");
}

// Activity-2: Nested if-else
let num1 = 40;
let num2 = 60;
let num3 = 30;
if(num1>num2){
    if(num1>num3){
        console.log(`${num1} is the largest number.`);
    }
}
else if(num2>num1 && num2>num3){
    console.log(`${num2} is the largest number.`);
}
else{
    console.log(`${num3} is the largest number.`);
}

// Activity-3: Switch case
let day = "Monday";

switch (day) {
    case "Monday":
        console.log(`Monday`);
        break;
    case "Tuesday":
        console.log(`Tuesday`);
        break;
    case "Wednesday":
        console.log(`Wednesday`);
        break;
    case "Thursday":
        console.log(`Thursday`);
        break;
    case "Friday":
        console.log(`Friday`);
        break;
    case "Saturday":
        console.log(`Saturday`);
        break;
    case "Sunday":
        console.log(`Sunday`);
        break;

    default:
        break;
}

// Activity-4: Conditional(Ternary) Operator
let c = 38;
console.log(c%2==0? "Even" : "Odd");

// Activity-5: Combining Conditions
let year = 2004;
if(year%4==0 && year%100!=0 || year%400==0){
    console.log(`${year} is a leap year`)
}
else{
    console.log(`${year} is not a leap year`);
}