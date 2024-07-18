// Activity-1: Array Creation and Access
// Task-1
let arr = [1,2,3,4,5];
let arr1 = [5,4,10,23,31];

console.log(arr);

// Task-2
console.log(`First element of array is ${arr[0]} and last element is ${arr[4]}`);

// Activity-2: Array Methods(Basic)
// Task-3
arr.push(10);
console.log(arr);

// Task-4
arr.pop(); // pop removes last element of an array
console.log(arr);

// Task-5
arr.shift(); // shift removes first element of an array
console.log(arr);

// Task-6
arr.unshift(20); // unshift adds an element in the beginning of array
console.log(arr);

// Activity-3: Array Intermediate
// Task-7
let map1 = arr1.map((i)=>i*2);
console.log(map1);

// Task-8
let filter1 = arr1.filter((i)=> i<10);
console.log(filter1);