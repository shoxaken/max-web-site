// const  userCard = document.querySelector("[data-user-template]")
// const  userCardContainer = document.querySelector("[data-user-cards-container]")
// const search = document.querySelector("[data-search]")

// let users = []

// search.addEventListener('input', (e)=>{
//     const value = e.target.value
//     users.forEach(user =>{
//         const isVisible = user.name.includes(value)  || user.email.includes(value)
//         user.element.classList.toggle('hide', !isVisible)
//     })
// })


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => {
//     user = data.map(user => {
//         const card = userCard.content.cloneNode(true).children[0]
//         const header = card.querySelector("[data-header]")
//         const body = card.querySelector("[data-body]")
//         header.textContent = user.name
//         body.textContent = user.email
//         userCardContainer.append(card)
//         return{name: user.name, email:user.email, element:card}
//     })
// })


const btn = document.querySelector('.fa-bars')
const mobileNav = document.querySelector('.mobile-nav')
const closeBtn = document.querySelector('.fa-xmark')

btn.onclick = function(){
    mobileNav.classList.remove('none')
}

closeBtn.onclick = ()=> mobileNav.classList.add('none')


const search = () => {
    const searchbox = document.getElementById('search-item').value.toUpperCase();
    const storeitems = document.getElementById('product-list')
    const product = document.querySelectorAll('.card')
    const pname = document.getElementsByTagName('b') 

    for(var i=0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('b') [0]; 

        if(match) {
           let textvalue =  match.textContent || match.innerHTML 

           if(textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.displey = "";
           } else {
            product[i].style.displey = 'none';
           }
        }
    }
}