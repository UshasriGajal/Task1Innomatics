let student = [
    {
        name:'UshaSri',
        age:21,
        gender:'female',
        email:'usha@gmail.com',
        address:{
            pincode: 593844,
            landmark:'jntu'
        },
        supplies:['OS',"FLAT",'BEEE']
    },
    {
        name:'vishnu',
        age:21,
        gender:'male',
        email:'vishnu@gmail.com',
        address:{
            pincode: 563453,
            landmark:'jntu'
        },
        supplies:['EM',"CN",'BEEE']

    },
    {
        name:'charan',
        age:22,
        gender:'male',
        email:'charan@gmail.com',
        address:{
            pincode: 765433,
            landmark:"KPHB"
        },
        supplies:['EG',"FLAT",'Os']

    },
    {
        name:'Prudhvi',
        age:25,
        gender:'male',
        email:'prudhvi@gmail.com',
        address:{
            pincode: 345345,
            landmark:'ESI'
        },
        supplies:['OS',"FLAT",'BEEE']

    },
    {
        name:'hemanth',
        age:27,
        gender:'male',
        email:'hemanth@gmail.com',
        address:{
            pincode: 593434,
            landmark:"KPHB"
        },
        supplies:['OS','chemistry','BEEE']
    },
    
]

// console.log(student[0].)

// student.forEach((item,index)=>console.log(item,index))
// student.forEach((itrtr,index)=>{
    // console.log(`At index${index} we have ${itrtr}`)
   
// })
// At index0 we have [object Object]
// At index1 we have [object Object]
// At index2 we have [object Object]
// At index3 we have [object Object]
// At index4 we have [object Object]
// student.forEach((itrtr,index)=>{
//     if(itrtr.name=='UshaSri'){
//         itrtr.supplies.push('DBMS')
//     }
//     if(index==1){
//         itrtr.supplies.unshift('Html')
//     }
//     if(index == 2){
//         itrtr.supplies.splice(1,'ds')
//     }
//     if(index == 3){
//         itrtr.supplies.splice(1,1,'physics')
//     }
//     if(index == 4){
//         itrtr.supplies.shift()
//         itrtr.supplies.pop()
//     }

//     // if(index)
    
// })


// let newStd=student.map((itrtr)=>{
//     let updateit=JSON.parse(JSON.stringify(itrtr)) //Deep copy is taking place here
//     if(updateit.name=='UshaSri'){
//         updateit.supplies.push('DBMS')
//     }
//     if(index==1){
//         updateit.supplies.unshift('Html')
//     }
//     if(index == 2){
//         updateit.supplies.splice(1,'ds')
//     }
//     if(index == 3){
//         updateit.supplies.splice(1,1,'physics')
//     }
//     if(index == 4){
//         updateit.supplies.shift()
//         updateit.supplies.pop()
//     }
//     return updateit
//     // if(index)
    
// })
// console.log('old',student)
// console.log('new',newStd)
// let arr=[1,2,3,4]
// let arr1=arr.map((i)=>{
//     i=i*2
//     return i
// })


    
// console.log(arr)
// console.log(student[0])
let array1 = new Array(30).fill(1).map((iter,index)=>index+1)

let array = new Array(30).fill(1).map((iter,index)=>{
    return index+1
})
let summ = array.reduce((acc,iter)=>iter%2===0? acc=acc+iter:acc,0)
let summ1 = array.reduce((acc,iter)=>{
    if(iter%2===0)
        return acc=acc+iter
    return acc},0)
// console.log(array)
console.log(summ1)
