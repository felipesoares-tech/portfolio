const menuBtn = document.querySelector('.menu-btn')
const navBar = document.getElementById('navigation')
let menuOpen = false
menuBtn.addEventListener('click',()=>{
    if(!menuOpen){
        menuBtn.classList.add('open')
        menuOpen = true
        navBar.classList.toggle('active')
    }else{
        menuBtn.classList.remove('open')
        menuOpen = false
        navBar.classList.toggle('active')
    }
})
