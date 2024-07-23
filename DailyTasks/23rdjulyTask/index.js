// Shallow Copy
let obj={
    name:'person1',
    age:21,
    address:{
        pincode:232434,
        location:'kphb'
    }
}
let copiedobj={...obj}
copiedobj.age=50
console.log("original",obj)
console.log("copied",copiedobj)


let copiedobj1={...obj}
let obj1={address:{pincode:999999}}
Object.assign(copiedobj1,obj1)

console.log("original",obj)
console.log("copied",copiedobj1)


// Deep Copy
let student={
    name:'student1',
    id:1236,
    age:21,
    address:{
        place:"Tadipatri",
        pincode:517501
    }
}
var codiedStud=JSON.parse(JSON.stringify(student))
codiedStud.address.pincode=567483
console.log(student,codiedStud)


// Using Spread Operator
// Spread in Arrays
let arr=[1,2,3,4,5]
let arr1=['a','e','i','o','u']
let newarr=[...arr,...arr1]
console.log(newarr)


// Spread in Objects
let object1 = {
    place:"Tirupati",
    pincode:517501
    }
let object2 = {
    Temple:"Tirupala", 
    food:'Laddu'}

let object = {...object1, ...object2}
console.log(object)


//Rest in functions
function sum(...nums){
    let sum = nums.reduce((a, b) =>
        {return a+b})
    return sum
}
console.log(sum(2,5,6,8,10))


//Rest in Destructuring
let names =["usha", "prudhvi", "vishnu", "charan"]
let [first, second, ...rest] = names
console.log(first, second, rest)