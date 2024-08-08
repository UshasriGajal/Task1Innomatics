document.getElementById('loginForm').addEventListener('submit',(e)=>{
    e.preventDefault()
    let userName=document.getElementById('Username').value 
    let Password=document.getElementById('Password').value
    console.log(userName,Password)
    let cardContainer=document.getElementById('cardContainer')
    let card=document.createElement('div')
    let user=document.createElement('p')
    let Pass=document.createElement('p')
    user.textContent=userName
    Pass.textContent=Password
    card.append(user,Pass)
    
    cardContainer.appendChild(card)
    cardContainer.setAttribute('class','cardContainer')
    document.body.append(cardContainer)
    document.getElementById('loginForm').reset()

})