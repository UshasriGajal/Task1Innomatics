
let button1=document.getElementById('button1')
// body.backgroundColor='white'
// var color='white'
button1.addEventListener('click',()=>{
    if(document.body.style.backgroundColor == 'white'){
        document.body.style.backgroundColor = 'black'
    }
    else{
        document.body.style.backgroundColor = 'white'
    }
})
