// Activity 1: Arithmetic Operations
let a = 25;
let b = 20;

// console.log("Sum is: ", a+b, "type is ", typeof(a+b));
console.log(`Sum is ${a+b} and ${typeof(a+b)}`);
console.log(`Difference is ${a-b}`);
console.log(`Product is ${a*b}`);
console.log(`Quotient by division is ${a/b}`);
console.log(`Remainder by Modulo/Modulus is ${a%b}`);

// Activity 2: Assignment Operators
let c = 3;
// c += a;
console.log(`Variable c after adding a is ${c+=a}`);
console.log(`Variable c after subtracting a is ${c-=a}`);

// Activity 3: Comparison Operators
if(a>b){
    console.log(`${a} is greater than ${b}`)
}
else if(a==b){
    console.log(`${b} is equal to ${a}`)
}
else{
    console.log(`${b} is greater than ${a}`)
}

if(a>=b){
    console.log(`${a} is greater than or equal to ${b}`)
}
else{
    console.log(`${b} is greater than ${a}`)
}

if(a===b){
    console.log(`${a} is equal to ${b} on basis of same datatype and value `)
}
else if (a==b) {
    console.log(`${a} is equal to ${b} on basis of same value `)
} else {
    console.log(`${a} is not equal to ${b} on any basis of same value `)  
}

// Activity 4: Logical Operators
if(b>a && b>c){
    console.log(`${b} is greater than ${a} and ${c}`)
}
if(a>c || a>b){
    console.log(`${a} is greater than either ${b} or ${c}`)
}
if(a!=b ){
    console.log(`${a} is not equal to ${b} `)
}

// Activity 5: Ternary Operators (condition?output_if_true:output_if_false)
// console.log(a<b?console.log(`${a} is less than ${b}`):console.log(`${a} is greater than  ${b}`))
let d = a<b ? a : b;
console.log(d);