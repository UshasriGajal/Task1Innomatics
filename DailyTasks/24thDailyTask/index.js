// Using forEach
let arr=[1,2,3,4,5]
arr.forEach((num)=>{
    console.log(num)
})

// Using map
let arr1=[2,4,6,8,10]
let doublearr=arr1.map((i)=>i*2)
console.log(doublearr)

// Using filter
let arr2=[10,9,8,7,6,5,4,3,2,1]
let filterarr=arr2.filter((i)=>i%2==0)
console.log(filterarr)

// Using reduce
let arr3=[1,2,3,4,5,6,7,8,9,10]
let reducearr=arr3.reduce((sum,num)=>{
    return sum+num
})
console.log(reducearr)

// Using find
let student = [
    {
        name:"student1",
        marks:56
    },
    {
        name:"student2",
        marks:27
    }
    
 ]
 let student2 = student.find((iter)=>{
    return iter.marks>35
 })
 console.log(student2.name)


// using findindex
let person = [
    {
        name:"person1",
        age:21
    },
    {
        name:"person2",
        age:50
    },
    {
        name:"person3",
        age:17
    }
    
 ]
 let ages = person.findIndex((iter)=>{
    return iter.age<18
 })
 console.log(ages)