const ThisPageIsNot = name => document.title !== name
const ThisPageIs = name => document.title === name
const home = 'Thomazella'
const articles = 'Thomazella\'s articles'
const projects = 'Thomazella\'s projects'
const about = 'About Thomazella'
const $ = q => document.querySelector(q)
const f = document.querySelector('footer')
const m = document.querySelector('main')
let resizers = []
let onLoaders = []

// - - - - - - - - - All PAGES
// - - - - - - - - - - - - - - -
window.addEventListener('resize', () => resizers.forEach(resizer => resizer()))
window.addEventListener('load', () => onLoaders.forEach(onLoader => onLoader()))

const toggleGuide = () => {
  let guide = document.querySelector('.guide')
  if (guide.style.display === "") {
    guide.style.display = 'block'
    if (window.innerHeight > document.body.offsetHeight) {
      guide.style.height = `${window.innerHeight}px`
    } else {
      guide.style.height = `${document.body.offsetHeight}px`
    }
  } else {
    guide.style.display = 'none'
  }
}

const htmlHide = (query) => {
  let e = document.querySelector(query)
  e.setAttribute('hidden','')
}

const whiteIcons = () => {
  let icons = [...document.querySelectorAll('svg image')]
  let xlink = 'xlink:href'
  let src = 'src'
  icons.forEach(icon => {
    icon.setAttribute(xlink, icon.attributes[xlink].value.replace('.svg','-white.svg'))
    icon.setAttribute(src, icon.attributes[src].value.replace('.png','-white.png'))
  })
}
onLoaders.push(whiteIcons)

const blackIcons = () => {
  let icons = [...document.querySelectorAll('svg image')]
  let xlink = 'xlink:href'
  let src = 'src'
  icons.forEach(icon => {
    icon.setAttribute(xlink, icon.attributes[xlink].value.replace('-white.svg','.svg'))
    icon.setAttribute(src, icon.attributes[src].value.replace('-white.png','.png'))
  })
}

// - - - - - - - - - HOME
// - - - - - - - - - - - - - - -
