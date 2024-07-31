// Creating Promises
function asyncTask(name, delay, shouldReject){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(shouldReject){
                resolve(`Task ${name} is completed`)
            }
            else{
                reject(`Task ${name} is failed`)
            }
        },delay)
        
    })
}

asyncTask('usha',2000,true).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})
asyncTask('ushasri',1000,false).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})

// Using Promises
asyncTask('Task1',1000,false).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})
asyncTask('Task2',2000,false).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})
asyncTask('Task2',3000,true).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})

// Promise.all
let promise1 = asyncTask("Task1", 1000, false)
let promise2 = asyncTask("Task2", 3000, false)
let promise3 = asyncTask("Task3", 2000, true)
Promise.all([promise1,promise2,promise3]).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})

// Promise.allSettled
Promise.allSettled([promise1,promise2,promise3]).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})