// Using Array Methods
// Push and Pop

let numArr=[] //Intializing array
numArr.push(1) //pushing elements
numArr.push(2)
numArr.push(3)
console.log(numArr) // o/p-[1,2,3]
numArr.pop()
console.log(numArr) // o/p-[1,2]

// Shift and Unshift
let letterArr=['a','b','c']
letterArr.shift()
console.log(letterArr) // o/p['b','c']
letterArr.unshift('z')
console.log(letterArr) // o/p['z','b','c']

// Slice
let arr=[1,2,3,4,5]
let slicedArr=arr.slice(1,4)
console.log(slicedArr) // o/p[ 2, 3, 4 ]

// Splice
let arr1=['red','green','blue','yellow']
arr1.splice(2,1,'purple','orange')
console.log(arr1) // o/p[ 'red', 'green', 'purple', 'orange', 'yellow' ]

// Object
// Object Creation
let car = {
    make: "Mahindra",
    model: "Mahindra Scorpio N",
    year: 2022
};
console.log(car) //o/p { make: 'Mahindra', model: 'Mahindra Scorpio N', year: 2022 }

// Property Deletion
delete car.year
console.log(car)  // o/p { make: 'Mahindra', model: 'Mahindra Scorpio N' }

// Nested Objects

let Person = {
    'name':'ushasri',
    'age':21,
    'address':{
        'street':'Vani nagar',
        'City':'Tirupati',
        'Zipcode':517501
    }
}
console.log(Person) 
// o/p {
//     name: 'ushasri',
//     age: 21,
//     address: { street: 'Vani nagar', City: 'Tirupati', Zipcode: 517501 }
//   }
console.log(Person.address.City)

let greet=(name)=>{
    return `Hello ${name}`
}
console.log(greet("Ushasri"))