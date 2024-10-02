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

/*Denna kod kommer från W3 Schools Länk: https://www.w3schools.com/howto/howto_js_accordion.asp */
var acc = document.getElementsByClassName("faq");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}