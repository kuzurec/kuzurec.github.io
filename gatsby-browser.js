import './src/global.css'

export const onInitialClientRender = () => {
  window.addEventListener('scroll', e => {
    const nav = document.getElementById('header-nav')
    const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset

    if (top > 0) {
      nav.classList.add('header-nav-hover')
      document.getElementById('go-up').style.display = 'block'
    } else {
      nav.classList.remove('header-nav-hover')
      document.getElementById('go-up').style.display = 'none'
    }
  })
}
