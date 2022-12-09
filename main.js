const menuBtn = document.getElementById('checkbox-menu')
const navBar = document.getElementById('navigation')
const spans = document.querySelectorAll('.prog')
const inputWhats = document.getElementById('whats')

menuBtn.addEventListener('click', () => {
    if (menuBtn.checked == true) {
        navBar.classList.toggle('active')
        document.body.style.overflowY = 'hidden'
    } else {
        navBar.classList.toggle('active')
        document.body.style.overflowY = 'auto'
    }
})

inputWhats.addEventListener('focus', () =>{
    if($("#whats").is(":focus"))
        inputWhats.setAttribute('placeholder','Ex: (38) 99911-0296')
    else
        inputWhats.removeAttribute('placeholder')

})

$(document).on('scroll', function () {
    if ($(this).scrollTop() >= $('#about').position().top) {
        spans.forEach((item) => {
            item.classList.remove('hideProgBar')
        })
    } else {
        spans.forEach((item) => {
            item.classList.add('hideProgBar')
            
        })

    }

})
