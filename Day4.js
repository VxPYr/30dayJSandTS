// Activity-1: for loop
for(let i = 1;i<=10;i++){
    console.log(i);
}

for(let i= 1; i<=10;i++){
    console.log(`5*${i} = ${5*i}`)
}
// Activity-2: while loop
let i = 0;
let sum=0;
while(i<=10){
    sum+=i;
    i++;
}
console.log(sum);

let j = 10;
while(j>=1){
    console.log(j);
    j--;
}

// Activity-3: do-while loop
let k = 1;
console.log(`1 to 5 using do-while`);
do{
    console.log(k);
    k++;
} while(k<=5);

let l =10;
console.log(`10 to 1 using do-while`);

do{
    console.log(l);
    l--;
} while(l>=1);

// Activity-4: Nested loops
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         console.log("*");
//     }
// }
for(let i = 1;i<=10;i++){
    for(let j = 1;j<=10;j++){
        console.log(`${i}*${j} = ${i*j}`);
    }
}