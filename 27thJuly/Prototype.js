//objects is a proto type function (prototype is use to create an object with 'new' kwyword)
let person = {}  // for every object the default is __proto__
console.log(person.__proto__) //every json adds the property proto without adding it  o/p-[Object: null prototype] {}
console.log(Object.prototype) //[Object: null prototype] {}
console.log(person.__proto__==Object.prototype) //true
//.__proto__ is used to find the prototype of a object

function fun(){} //initially functions prototype will be empty

function persons(names){// contructor function
    this.names = names //it points to current context 
    //whenever we use this peoperty the prototype becomes empty
}
let usha = new persons('usha')
console.log(usha)
console.log(persons.__proto__)// it gives the 
console.log(persons.__proto__==Object.prototype)// false beacause persons.__proto__is {}
// new keyword helps to create a new instance]

// Prototype chain
function Animal(name,eats){
    this.eats = eats
    this.name = name
}
let Dog = new Animal('dog',true)
let cat = new Animal('cat',false)

Animal.prototype.walk = function (){ //we cannot write arrow function while writing prototype chain
    console.log(`${this.name} ${this.eats?`will eats`:`will not eats`} and also walks`)
}
Dog.walk()
cat.walk()

function ABC(){}
let abc = new ABC()
console.log(abc.__proto__)

let personObj = {
    greet(){
        console.log(`Hi ${this.name}`)
    }
}

let personZero = {}
console.log(personZero.__proto__)
let personOne = Object.create(personObj)
console.log(personOne)


function Animal(){}

function Dogs(name){
    this.name=name
}
Dogs.prototype = Object.create(Animal.prototype)

let dog = new Dogs('pinky')
console.log(dog.speak)
Animal.prototype.speak=true
console.log(dog.speak)
console.log(dog.name)
