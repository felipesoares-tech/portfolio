const menuBtn = document.getElementById('checkbox-menu')
const navBar = document.getElementById('navigation')

menuBtn.addEventListener('click',()=>{
    if(menuBtn.checked == true){
        navBar.classList.toggle('active')
        document.body.style.overflowY = 'hidden'
    }else{
        navBar.classList.toggle('active')
        document.body.style.overflowY = 'auto'
    }
})
