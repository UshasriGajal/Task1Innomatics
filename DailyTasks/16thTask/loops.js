// Multiplication
let num=5
for(let i=1;i<=10;i++){
    console.log(`5 x ${i} = ${5*i}`)
}
// output
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

// Sum of Even Numbers Between 1 and 50
let sum=0
for(let i=0;i<=50;i++){
    if(i%2==0){
        sum+=i
    }
}
console.log(sum)
// output-650

// Countdown Timer

let i=2
let count=0
while(i<20){
    j=1
    while(j<=i){
        // console.log(i%j)
        if(i%j==0){
            count++
        }
        j++
    }
    
    if(count==2){
        console.log(i)
    }
    count=0
    i++
}
// output
// 2,3,5,7,11,13,17,19,20

// Sum of Odd Numbers
let add=0
let z=0
while(z<=20){
    if(z%2 != 0){
        add+=z
    }
    z++
}
console.log(add)
// output- 100

// Factorial Calculation
let fact=1
let x=1

while(x<=5){
    fact*=x
    x++
}
console.log(fact)
// output- 120
