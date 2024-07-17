// Functions without Parameters
function greet(){
    console.log("Hello World!")
}
greet()
// output - Hello World!

// Functions with Parameters
function addNumbers(a,b){
    console.log(a+b)
}
addNumbers(10,30)
addNumbers(200,500)
addNumbers(1000,2000)

// output-
// 40
// 700
// 3000

// Functions with Return Statements
function multiply(x,y){
    return x*y
}
let mul=multiply(25,30)
console.log(mul)
// output-750

// Combining Functions
function calculateRectangleArea(length,width){
    let result=multiply(length,width)
    return result
}
let area=calculateRectangleArea(5,4)
console.log(area)
// output-20


// Default Parameters
function greetUser(name="Guest"){
    return `Hello, ${name}!`
}
console.log(greetUser())
console.log(greetUser("Usha"))
// output-
// Hello, Guest!
// Hello, Usha!