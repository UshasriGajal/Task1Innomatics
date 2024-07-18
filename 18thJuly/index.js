// function parent(){
//     let a=10
//     function child1(){
//         console.log("a",a)
//     }
//     child1() //we should only can the function in its parent function only
// }
// parent()

// // encapsulation
// function abc(){
//     return function(){
//         return "usha"
//     }
// }
// console.log(abc()())// to call a function inside a function 



// function getCounter(){
//     let counter=0 //it is hiding the value (encapsulation is taking place here)
//     return function(){
//         return counter = counter +1
//     }
// }
// console.log(getCounter()()) //o/p-1
// console.log(getCounter()()) //o/p-1

// let theCounter = getCounter()
// console.log(theCounter()) //o/p-1
// console.log(theCounter()) //o/p-2 because it is calling the inside function(the anonymous function) and store the the value of its closure variable


// concept involved closures ,var & let
// setTimeout(function(){
//     console.log("HEllo")
// },100)

// for(var i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i)
//     },1000)
// }

// for(let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i)
//     },1000)
// }


// xyz()
// var xyz = ()=>{
//     console.log('usha')
// }

// fun()
// function fun(){
//     console.log('ushasri')
// }


// calling a another function as a callback function to the function
// function call(number,cb){
//     cb(number)
// }

// const xyz=()=>{ // we are storing a function in a variable and the sending the varible as a parameter of the function and calling the function

// }
// call(xyz) // calling the function

function fun1(number,cb){
    number=number*2
    cb(number)
}
fun1(10,(input)=>{
    console.log(input)
})

function fun2(number,cb){
    number=number*2
    cb(number)
}
var sum = function(input){
    console.log(input)
}
fun2(10,sum)


function add(func){
    return ()=>{
        let a =func(10)
        return a+30
    }
}

const multi= (b)=>{
    return b*2
}
const mod = (d)=>{
    return d%2
}
console.log(add(multi)())
console.log(add(mod)())


// (function(){
//     console.log("usha")
// })()
// ((number)=>{
//     console.log(number)
// })(10)

recurssiongit 
function print(number){
    console.log(number)
    if(number!==10){
        print(number+1)
    }
}
print(1)