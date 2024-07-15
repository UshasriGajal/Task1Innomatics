let num = 5
let count=0
for(var i=1;i<=num;i++){
    if(num%i===0){
        count++
    }
}
if(count==2){
    console.log("prime number")
}
else{
    console.log("not a prime number")
}
// console.log(count)

let number=7
if(number>5 && number<9){
    console.log(number,"is between 5 and 9")
}
else{
    console.log(number,"is not between 5 and 9")
}

if(number>5){
    if(number<9){
        console.log(`${number} is between 5 and 9`)
    }
}
    
else{
    console.log(`${number} is not between 5 and 9`)
}

let char1="a"
let char2="h"
if((char1 == "a" || char1 == "e" || char1 == "i" || char1 == "o" || char1 == "u") && ((char2 == "a" || char2 == "e" || char2 == "i" || char2 == "o" || char2 == "u"))){
    console.log(`${char1} and ${char2} is a vowel`)
}
else if(char1 == "a" || char1 == "e" || char1 == "i" || char1 == "o" || char1 == "u"){
    console.log(`${char1} is a vowel`)
}
else if(char2 == "a" || char2 == "e" || char2 == "i" || char2 == "o" || char2 == "u"){
    console.log(`${char2} is a vowel`)
}
else{
    console.log("Both are not vowels")
}

let country1 = "X"
let age1 = 17
let currency1 = "xinr"

let country2 = "y"
let age2 = 18
let currency2 = "yinr"
 
let inputC="X"
let inputA="20"
if(inputC == country1 || inputC === country2){
    if(inputA <= age1)
        console.log(currency1)
    else if(inputA >= age2)
        console.log(currency2)
}
else{
    console.log("country not found")
}
// console.log(21 > '20')
var value=22
if(value >= 1 && value <= 10){
    console.log(value,' is in the range of 1 to 10')
}
else if(value <= -1 && value >= -10){
    console.log( value,' is in the range of -1 to -10')
}
else if(value >= 200 && value <= 300){
    console.log( value,' is in the range of 200 to 300')
}
else{
    console.log(value,"is not falling in any range")
}
var gender="female"

switch (gender){
    case "male":
        console.log('person is male')
        break
    case "female":
        console.log("person is female")
        break
    default:
        console.log('person is others')
}

switch (value){
    case(value >= 1 && value <= 10):
        console.log(value,' is in the range of 1 to 10')
        break
    case(value <= -1 && value >= -10):
        console.log( value,' is in the range of 200 to 300')
        break
    case(value >= 200 && value <= 300):
        console.log( value,' is in the range of 200 to 300')
        break
    case 22:
        console.log("22 case")
        break
    default:
        console.log(value,"is not falling in any range")       
}

