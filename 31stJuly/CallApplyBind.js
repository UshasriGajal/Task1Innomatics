// let person = {
//     greet(a,b,c){
//         console.log(`hi ${this.name},${a}-${b}-${c}`)
//     }
// }
// let usha={
//     name:'usha'
// }
// let vishnu={
//     name:'vishnu'
// }
// person.greet.call(usha,1,2,3)
// person.greet.call(vishnu,[1,2,3])
// let charan={
//     name:'charan'
// }
// let charanFun =  person.greet.bind(charan)
// charanFun(1,2,3)


let OldData ={
    name:'ushasri',
    age:21,
    phnNum:[123342562,543532345],
    gender:true,
    address:{
        pincode:517501,
        city:'tirupati',
        landmark:['area','place']
    },
    occupation:'software'
}

let NewData ={
    name:'ushasriGajal',
    age:22,
    phnNum:[123342562,543532345,346455434],
    gender:true,
    address:{
        pincode:597501,
        landmark:[area={ 
            chittor:"Tirupati",
            kadapa:"pulivendula",
            },'place','city'],
    },
    email:'ushasrigajal@gmail.com'
}

function updateData(){
    for(var key in OldData,NewData){
        if(typeof(OldData[key])=='object'){
            if(Array.isArray(OldData[key])){
                OldData[key] = [...new Set([...OldData[key],...NewData[key]])]
            }
            else{
                OldData[key] = {...OldData[key],...NewData[key]}
            }
            
        }
        else if(OldData[key] != NewData[key]){
            OldData[key] = NewData[key]
        }
        
    }
    console.log(OldData)
}
updateData(OldData,NewData)


// let Obj={}
// function updateData(){
//     for(var key in OldData,NewData){
//         if(Object.keys(OldData[key])!=Object.keys(NewData[key])){
//             Obj[key] = NewData[key]
//             console.log(Object.keys(NewData))
//         }
//         if(OldData[key] != NewData[key]){
//             Obj[key] = NewData[key]
//         }
//         else{
//             Obj[key] = OldData[key]
//         }
//         // console.log(Object.keys(OldData))
//     }
//     console.log(Obj)
// }
// updateData(OldData,NewData)
// console.log(Object.keys(OldData))

// function updateData(OldData,NewData){
//     Object.keys(OldData,NewData).forEach((item)=>{
//         // if(OldData[index]!=NewData[index])
//         console.log(NewData[index])
//     })
// }
// updateData(OldData,NewData)



// print maxsum of subarry of size K
// var k=4

// const array=[4,90,20,45,87,3,2,56]

// function sumOfSub(array,k){
//     var arr=[]
// var max=0
// var sum=0
//     for(let i=0;i<k;i++){
//         sum+=array[i]
//         //  
//         //   console.log(arr)
//     }
//     max=sum
//     // var sum=arr.reduce((sum,num)=>sum=sum+num)
//     for(var i=0;i<array.length;i++){
//         max=max-array[i]+array[k]
//         console.log(sum,array[i],array[k])
//         if(max>sum){
//             sum=max
            
//         }
//         k++
//     } 
//     console.log(sum)
//     return sum
          

//     // return sum
// }
// sumOfSub(array,4)
// // console.log(arr)