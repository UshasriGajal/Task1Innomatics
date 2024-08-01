// Select Element by ID
let divEle = document.getElementById('idElement')
divEle.style.backgroundColor = "purple"
divEle.style.color = 'yellow'
divEle.style.fontSize = '10px'


// Select Elements by Class Name
let classDiv = document.getElementsByClassName('classEle')
// console.log(classDiv)
for (let i = 0; i < classDiv.length; i++) {
    // console.log(classDiv[i])
    classDiv[i].style.color = 'blue'; // or any color you prefer
}

// Select Elements by Tag Name
let tag=document.getElementsByTagName('h2')
console.log(tag)
for(let j=0;j<tag.length;j++){
    console.log(tag[j])
    tag[j].style.border = '2px solid red'
    // tag[j].style.borderStyle= 'solid'
    // tag[j].style.borderColor = 'red'
}

// Select Element by Query Selector
let query=document.querySelector('h3')
// console.log(query)
query.style.fontStyle = 'italic'

// Select Elements by Query Selector All
let queryAll=document.querySelectorAll('span')
queryAll.forEach(function(i){
    i.style.marginLeft ='100px'
    i.style.border = '2px solid black'
})

// Change style of Selected Elements
let ele=document.getElementById('uniqueId')
ele.style.height='100px'
ele.style.fontStyle='italic'
ele.style.backgroundColor = 'pink'
// ele.style.width='200px'