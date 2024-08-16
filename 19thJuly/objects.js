let stud1={
 // key :   pair
    Name:'ushasri',
    age: 21,
    phone:8979909809,
    gender:"Female",
    address:{
        pincode:79898
    },
    arr:["a","e","i","o","u"],
    "Email Id":"usha@gmail.com" // to give space while writing keys we need to write them in the double quotes

}
console.log(stud1.Name)
console.log(stud1["Email Id"])
console.log(stud1.arr[3])

console.log(Object.keys(stud1).length)
let arr1=["a","e","i","o","u"]
console.log(arr1[1])
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i])
}

// CRUD Create,Read,Update,Delete
var arr2=[2,4,6,8]
arr2.push(10,11)
// arr2.unshift(0)
console.log(arr2)
arr2.splice(0,arr2.length)
// arr2.pop()
// arr2.shift()
console.log(arr2)
// arr2.splice(3,0,2)
// console.log(arr2)
var Name="usha Sri"
console.log(Name.split("").join())
// console.log(Name.join(" "))





