const menuBtn = document.getElementById('checkbox-menu')
const navBar = document.getElementById('navigation')
const spans = document.querySelectorAll('.prog')
const items = document.getElementById('list-item-header')
const chkTheme = document.getElementById('chk');
const htmlTag = document.getElementById('ht5')
const GetTheme = JSON.parse(localStorage.getItem('PageTheme'))
const tagDev = document.getElementById('dev-symb')

const imgLamp = document.getElementById('lamp')
const imgLike = document.getElementById('like')
const imgUser = document.getElementById('user')
const imgDesign = document.getElementById('design')
/*REDES SOCIAIS */
const imgGit = document.getElementById('git-img')
const imgInsta = document.getElementById('insta-img')
const imgLink = document.getElementById('linke-img')
const imgWhats = document.getElementById('whats-img')

const imgPhone = document.getElementById('phone')
const imgDegraus = document.getElementById('degraus')

console.log(GetTheme)

if (GetTheme == 'LIGHT') {
    htmlTag.classList.toggle('light-mode')
    console.log('deveria estar selecionado')
    imgLamp.src = 'assets/img/lamp-light.png'
    imgLike.src = 'assets/img/like-light.png'
    imgUser.src = 'assets/img/user-light.png'
    imgDesign.src = 'assets/img/design-light.png'
    tagDev.src = 'assets/img/tag-light.png'

    imgInsta.src = 'assets/img/insta-light.png'
    imgGit.src = 'assets/img/github-light.png'
    imgLink.src = 'assets/img/linkedin-light.png'
    imgWhats.src = 'assets/img/whats-light.png'

    imgPhone.src = 'assets/img/phone-light.png'
    imgDegraus.src = 'assets/img/degraus-light.png'
    

} else {
    console.log('deveria estar normal')
    imgLamp.src = 'assets/img/lamp.png'
    imgLike.src = 'assets/img/like.png'
    imgUser.src = 'assets/img/user.png'
    imgDesign.src = 'assets/img/design.png'
    tagDev.src = 'assets/img/tag.png'

    imgInsta.src = 'assets/img/insta.png'
    imgGit.src = 'assets/img/github.png'
    imgLink.src = 'assets/img/linkedin.png'
    imgWhats.src = 'assets/img/whats.png'

    imgPhone.src = 'assets/img/phone.png'
    imgDegraus.src = 'assets/img/degraus.png'
    chkTheme.checked = 'checked'

}



chkTheme.addEventListener('change', () => {
    htmlTag.classList.toggle('light-mode')

    var theme

    if (htmlTag.classList.contains('light-mode')) {
        console.log('Light Mode')
        theme = 'LIGHT'
        imgLamp.src = 'assets/img/lamp-light.png'
        imgLike.src = 'assets/img/like-light.png'
        imgUser.src = 'assets/img/user-light.png'
        imgDesign.src = 'assets/img/design-light.png'
        tagDev.src = 'assets/img/tag-light.png'

        imgInsta.src = 'assets/img/insta-light.png'
        imgGit.src = 'assets/img/github-light.png'
        imgLink.src = 'assets/img/linkedin-light.png'
        imgWhats.src = 'assets/img/whats-light.png'

        imgPhone.src = 'assets/img/phone-light.png'
        imgDegraus.src = 'assets/img/degraus-light.png'
    } else {
        console.log('Dark Mode')
        theme = 'DARK'
        imgLamp.src = 'assets/img/lamp.png'
        imgLike.src = 'assets/img/like.png'
        imgUser.src = 'assets/img/user.png'
        imgDesign.src = 'assets/img/design.png'
        tagDev.src = 'assets/img/tag.png'

        imgInsta.src = 'assets/img/insta.png'
        imgGit.src = 'assets/img/github.png'
        imgLink.src = 'assets/img/linkedin.png'
        imgWhats.src = 'assets/img/whats.png'

        imgPhone.src = 'assets/img/phone.png'
        imgDegraus.src = 'assets/img/degraus.png'
    }

    //save to localStorage

    localStorage.setItem('PageTheme', JSON.stringify(theme))

});

menuBtn.addEventListener('click', () => {
    if (menuBtn.checked == true) {
        navBar.classList.toggle('active')
        document.body.style.overflowY = 'hidden'
        items.setAttribute('style','flex-direction: column;')
    } else {
        navBar.classList.toggle('active')
        document.body.style.overflowY = 'auto'
        items.setAttribute('style','flex-direction: row;')
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
