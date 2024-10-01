const btnMobile = document.querySelector('.btn-mobile')
const mainMenu = document.querySelector('#main-menu')

const darkmodeSwitch = document.querySelector('#darkmode-switch')
const hasSetDarkmode = localStorage.getItem('darkmode')

btnMobile.addEventListener('click', () => {
    const isExpanded = btnMobile.getAttribute('aria-expanded') === 'true'

    if(isExpanded) {
        btnMobile.setAttribute('aria-expanded', false)
        mainMenu.addEventListener('animationend', () => {
            mainMenu.classList.add('hide')
        }, { once: true })
    }
    else {
        mainMenu.classList.remove('hide')
        btnMobile.setAttribute('aria-expanded', true)
    }
})

if(hasSetDarkmode == null) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      enableDarkMode()
    } else {
      disableDarkMode()
    }
  } else if(hasSetDarkmode === 'on') {
    enableDarkMode()
  } else if(hasSetDarkmode === 'off') {
    disableDarkMode()
  }
  
  darkmodeSwitch.addEventListener('change', () => {
    if(darkmodeSwitch.checked) {
      enableDarkMode()
      localStorage.setItem('darkmode', 'on')
    } else {
      disableDarkMode()
      localStorage.setItem('darkmode', 'off')
    }
  })
  
  function enableDarkMode() {
    darkmodeSwitch.checked = true
    document.documentElement.classList.add('dark')
  }
  function disableDarkMode() {
    darkmodeSwitch.checked = false
    document.documentElement.classList.remove('dark')
  }