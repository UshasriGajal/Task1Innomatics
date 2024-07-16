// sum of 1st 10 numbers
let n=100
let sum=0
for(let i=91;i<=n;i++){
    sum+=i
}
console.log(sum)


// even numbers btw 1 to 30
for(let i=1;i<=30;i++){
    if(i%2==0){
        console.log(i)
    }
    
}


console.log("z".charCodeAt())
console.log(String.fromCharCode(65))


for(let i=97;i<=122;i++){
    if(String.fromCharCode(i) === "a" || String.fromCharCode(i) === "e" || String.fromCharCode(i) === "i" || String.fromCharCode(i) === "o" || String.fromCharCode(i) === "u"){
        console.log(String.fromCharCode(i))
    }

}

var string='madam'
var arr=""
for(var i = string.length-1;i >= 0;i--){
    arr += (string[i])  /* arr+=input.charAt */
    if(i===0){
        if(arr === string){
            console.log("palindrome")
        }
        else{
            console.log("not a palindrome")
        }
    }
}
console.log(arr)

let string="The quick brown fox jumps er the lazy dog"
let str1=''
// string=string.sort()
string=string.toLowerCase()

// string=string.split(" ").join("").split("").sort()

for(var i=0;i<string.length;i++){
    if(str1.indexOf(string.charAt(i))===-1){
        str1=str1+string.charAt(i)
    }
    // console.log(string.charAt(i))
    
    // console.log(string.indexOf(string[i]))
}
console.log(str1)
var letter=0
for(var i=0;i<str1.length;i++){
    // let ele=
    if(str1[i].charCodeAt() >=97 && str1[i].charCodeAt() <=122){
        letter++
    }
    // console.log(ele)
}
if(letter == 26){
    console.log("pangram")
}
else{
    console.log("not pangram")
}
console.log(letter)
// console.log(str1.join(""))

