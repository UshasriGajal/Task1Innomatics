// // let table=document.getElementById('tbody')
// // let tr=document.createElement('tr')
// // let td1=document.createElement('td')
// // let td2=document.createElement('td')
// // let td3=document.createElement('td')
// // let td4=document.createElement('td')

// // td1.textContent='usha'
// // td2.textContent='21'
// // td3.textContent='ushasrigajal'
// // td4.textContent='female'
// // tr.append(td1,td2,td3,td4)
// // console.log(tr)
// // table.appendChild(tr)
// // // table.append(tbody)
// // console.log(table)

// let object = [
//     {
//         'name':'usha',
//         'a'

//     }
// ]

// for(let i=0;i<=4;i++){
//     let trow=document.createElement('tr')
//     for(let j=0;j<=4;j++){
//         let tcol=document.createElement('td')
//         tcol.textContent='usha'
//         trow.appendChild(tcol)
//     }
//     table.appendChild(trow)
// }
// console.log('outside event')
window.addEventListener('load',()=>{           //load event it is on entire browser it comes after the all crp work is done
    console.log('page window')                  //load only works on window it wont work in document      
})


let array1 = [
    {
        name:'usha',
        age:21,
        email:'usha@gmail.com',
        gender:'female'
    },
    {
        name:'vishnu',
        age:21,
        email:'vishnu@gmail.com',
        gender:'female'
    },
    {
        name:'charan',
        age:22,
        email:'charan@gmail.com',
        gender:'female'
    },
    {
        name:'hemanth',
        age:28,
        email:'hemanth@gmail.com',
        gender:'female'
    },
    {
        name:'vamsi',
        age:22,
        email:'vamsi@gmail.com',
        gender:'female'
    }
]
document.addEventListener('DOMContentLoaded',()=>{  //it is on document 'DOMContentLoaded' only works on document
    console.log('inside event')                     // 'DOMContentLoaded' wont work of window
    let tbody = document.querySelector('#Table1 tbody')

    fetch('https://jsonplaceholder.typicode.com/users').
    then((response)=>response.json()).
    then((data)=>populateData(data))
    function populateData(fechedData){
        fechedData.forEach(data => {
            let trow=document.createElement('tr')
            trow.innerHTML = `
            <tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.email}</td>
                <td>${data.phone}</td>
    
            </tr>
            `
            tbody.appendChild(trow)
        });
    }

})
console.log('outside event')
