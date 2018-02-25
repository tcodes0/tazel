const toggleGuide = () => {
  let guide = document.querySelector('.guide')
  if (guide.style.display === "") {
    guide.style.display = 'block'
  } else {
    guide.style.display = ''
  }
}
const htmlHide = (query) => {
  let e = document.querySelector(query)
  e.setAttribute('hidden','')
}
// toggleGuide()
let resizers = []
const adjustHeight_QuickDescriptionOfme = () => {
  let h = (
    document.querySelector('footer').offsetTop
    -
    Number.parseInt(getComputedStyle(document.querySelector('header')).height.replace('px',''))
  )
  document.querySelector('.quick-description-of-me').style.height = `${h}px`
}
resizers.push(adjustHeight_QuickDescriptionOfme)
window.addEventListener('resize', () => resizers.forEach(resizer => resizer()))
window.addEventListener('load', () => resizers.forEach(resizer => resizer()))
const hideFooterNavOnHome = () => {
  if (document.title === "Thomazella") {
    document.querySelector('footer .navigation').setAttribute('hidden','')
  }
}
window.addEventListener('load', hideFooterNavOnHome)
