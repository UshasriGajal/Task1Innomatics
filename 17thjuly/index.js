// this is not pure function because it is doing multiple functions
function mathCal(){ // arguments
    let a = 10
    let b = 20

    let sum = a+b  //bday party
    let mul = a*b  //bachelor party
    let sub = a-b  //breakup party
    let mod = a%b  //farewel party

    console.log(sum)
    console.log(mul)
    console.log(sub)
    console.log(mod)

}
 
mathCal() //declaration/function call/function invokation
function mathCal(a,b){ // a and b are arguments

}
mathCal(10,20) // 10 and 20 are parameters


// pure function because it is doing only one function
function sum(a,b){
    console.log(a+b)
}

function mul(a,b){
    console.log(a-b)
}

function sub(a,b){
    console.log(a*b)
}
 function mod(a,b){
    console.log(a%b)
 }
sum(10,20)
mul(10,20)
sub(10,20)
mod(10,20)

function findSubstrWithSpace(input){
    // let str1=""
    let start=0
    var end=0
    var arr=[]
    for(let i=0;i<=input.length;i++){
        var ele=10
        
        if(input.charAt(i)==" "){
            
            
            end=i
            arr.push(input.substring(start,end))
            start=i+1
            // console.log(substr)
            // console.log(start,end)
        }
        // console.log(i)
        if(i==input.length-1){
            end=i
            arr.push(input.substring(start,end+1))
            // console.log(start)
            // console.log(substr)
        }
        
    }
    console.log(arr)
    // console.log(input.substring(0,input.indexOf(' ')))
}
findSubstrWithSpace('usha sri gajal')

let str='usha sri gajal'
for(let i=0;i<=str.length;i++){

}
// let str='usha sri'
// for(let i=0;i<str)

// closures
