document.addEventListener('DOMContentLoaded',()=>{
    let gridItem=document.getElementById('gridItems')
    console.log('done')
    fetch('https://jsonplaceholder.typicode.com/users').
    then((response)=>response.json()).
    then((data)=>populateData(data))
    function populateData(fechedData){
        // vaJSON.parse(fechedData)
        
        fechedData.forEach(element => {
            console.log(element)
        let div=document.createElement('div')
        let id=document.createElement('p')
        id.setAttribute('class','ptag')
        id.append(`User ${element.id} `)
        let name=document.createElement('p')
        name.append(`Name:${element.name}`)
        let user=document.createElement('p')
        user.append(`Email:${element.email}`)
        
        let website=document.createElement('p')
        user.append(`website:${element.website}`)
        let phone=document.createElement('p')
        phone.append(`Phone:${element.phone}`)
        div.setAttribute('class','divele')
        div.append(id,name,user,phone,website)
        
        
        div.append(element.name)
        gridItem.appendChild(div)
            
        });
    }
})