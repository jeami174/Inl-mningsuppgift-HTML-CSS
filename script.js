const btnMobile = document.querySelector('.btn-mobile')
const mainMenu = document.querySelector('#main-menu')

btnMobile.addEventListener('click', () => {
    const isExpanded = btnMobile.getAttribute('aria-expanded') === 'true'

    if(isExpanded) {
        btnMobile.setAttribute('aria-expanded', false)
    }
    else {
        mainMenu.classList.remove('hide')
        btnMobile.setAttribute('aria-expanded', true)
    }
})