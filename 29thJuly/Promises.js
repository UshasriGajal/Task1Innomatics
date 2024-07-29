setTimeout(()=>{
    console.log('wake up') //it consoles after one sec
},1000)
// setInterval(()=>{
//     console.log('wake up for every second')  // it consoles for every sec
// },1000)

function abc(){
    var sum=0
    for(var i=0;i<n;i++){
        if(i%2==0){
            sum+=i
        }
    }
    return sum**(1/2)
}
var n=10
console.log(abc(n))
function even(){
    var x
    for(var i=0;i<n;i++){
        if(i%2==0){
            x=i
        }
    }
    return 
}
function findEvenNos(limit,cb1,cb2){
    var evenNumArr=[]
    for(var i=0;i<=limit*2;i++){
        if(i%2==0){
            evenNumArr.push(i)
        }
    }
    cb1(evenNumArr,cb2)
}
const sumOfEven= (evenNoResult,cb)=>{
    let result=evenNoResult.reduce((sum,num)=>sum=sum+num,0)
    cb(result)
}
const squareRoot = (sum)=>{
    let squareEle=sum**(1/2)
    console.log(Math.floor(squareEle))
}
findEvenNos(4,sumOfEven,squareRoot)


function myPromise(student){
    return new Promise((resolve,reject)=>{
        if(student.marks>35){
            resolve(`${student.name} is passed`)
        }
        else{
            reject(`${student.name} is falied`)
        }
    })
}

myPromise({name:'hemanth',marks:30}).then((result)=>{
    console.log('success=>',result)
}).catch((err)=>{
    console.log('failed=>',err)
})
                           

myPromise({name:'sneha',marks:70}).then((result)=>{
    console.log('success=>',result)
}).catch((err)=>{
    console.log('failed',err)
})

// let promise1 = () =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             resolve('Promise1')
//         },4000)
//     })
// }

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve('Promise1')
    },4000)
})


let promise2 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        reject('Promise2')
    },2000)
})

let promise3 =new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve('Promise3')
    },1000)
})

Promise.all([promise1,promise2,promise3]).then((result)=>{
    console.log('all success=>',result)
}).catch((err)=>{
    console.log('all err=>',err)
})

Promise.allSettled([promise1,promise2,promise3]).then((result)=>{
    console.log('allSettled success=>',result)
}).catch((err)=>{
    console.log('allSettled err=>',err)
})

Promise.race([promise1,promise2,promise3]).then((result)=>{
    console.log(' race success=>',result)
}).catch((err)=>{
    console.log(' race err=>',err)
})