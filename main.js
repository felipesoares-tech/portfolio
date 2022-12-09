const menuBtn = document.getElementById('checkbox-menu')
const navBar = document.getElementById('navigation')
const spans = document.querySelectorAll('.prog')

menuBtn.addEventListener('click', () => {
    if (menuBtn.checked == true) {
        navBar.classList.toggle('active')
        document.body.style.overflowY = 'hidden'
    } else {
        navBar.classList.toggle('active')
        document.body.style.overflowY = 'auto'
    }
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
