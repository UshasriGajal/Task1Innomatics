function add(a,b){
    let sum=a+b
    return sum
}

console.log(add(10,20))
let addition=(a,b)=>{
    return a+b
}
console.log(addition(10,20))

let closure = (a,b)=>{ //closure example
    return ()=>{
        return a+b
    }
}

const sumof=()=>{
    let cache={}
    return (...nums)=>{
        // nums=nums.sort((a,b)=>a-b)
        let str=nums.toString()
        if(cache[str]){
            console.log('output cache')
            return cache[str]
        }
        let result =nums.reduce((a,b)=>{
            return a+b
        })
        cache[str]=result
        console.log('output calculated')
        return result
    }
}
let value=sumof()
console.log(value(1,21))
console.log(value(3,2))
console.log(value(12,1))
console.log(value(1,21))
