//If-Else conditional statements
let n = -2
if(n > 0)
    console.log(`${n} is a Positive Number`)
else if(n < 0)
    console.log(`${n} is a Negative Number`)
else
    console.log(`${n} is a Zero`)
//output : -2 is a Negative Number
  

//Switch-Case Statements
let day=5
switch(day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid day")         
}
//output : Friday


//Ternary Operator
let Marks = 50
console.log(Marks >= 45 ? "Pass" : "Fail")
//output : Pass


//for loop
for(let i = 1;i <= 10;i++){
    console.log(i)
}
//output : 1-10


//Reverse for loop
for(let i = 10;i >= 1;i--){
    console.log(i)
}
// output : 10-1