const menuIcon = document.getElementById('menu-icon')
const nav = document.getElementById('header-nav')

const toggleMenu = () => {
  if (nav.classList.contains('hidden')) {
    nav.classList.remove('hidden')
  } else {
    nav.classList.add('hidden')
  }
}

menuIcon.addEventListener('click', toggleMenu)