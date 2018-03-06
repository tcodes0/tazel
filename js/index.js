const ThisPageIsNot = name => document.title !== name
const ThisPageIs = name => document.title === name
const home = 'Thomazella\'s homepage'
const articles = 'Thomazella\'s articles'
const projects = 'Thomazella\'s projects'
const about = 'About Thomazella'
const $ = q => document.querySelector(q)
const $$ = q => document.querySelectorAll(q)
const f = document.querySelector('.footer')
const m = document.querySelector('.main')
let resizers = []
let onLoaders = []

// - - - - - - - - - All PAGES
// - - - - - - - - - - - - - - -
window.addEventListener('resize', () => resizers.forEach(resizer => resizer()))
window.addEventListener('load', () => onLoaders.forEach(onLoader => onLoader()))

const toggleGuide = () => {
  let guide = $('.guide')
  if (guide.style.display === '' || guide.style.display === 'none' ) {
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
  let e = $(query)
  e.setAttribute('hidden','')
}

const whiteIcons = () => {
  let icons = [...$$('svg image')]
  let xlink = 'xlink:href'
  let src = 'src'
  icons.forEach(icon => {
    if (icon.attributes[xlink].value.match(/-white/)) {
      return
    }
    icon.setAttribute(xlink, icon.attributes[xlink].value.replace('.svg','-white.svg'))
    icon.setAttribute(src, icon.attributes[src].value.replace('.png','-white.png'))
  })
}
// onLoaders.push(whiteIcons)

const blackIcons = () => {
  let icons = [...$$('svg image')]
  let xlink = 'xlink:href'
  let src = 'src'
  icons.forEach(icon => {
    if (! icon.attributes[xlink].value.match(/-white/)) {
      return
    }
    icon.setAttribute(xlink, icon.attributes[xlink].value.replace('-white.svg','.svg'))
    icon.setAttribute(src, icon.attributes[src].value.replace('-white.png','.png'))
  })
}

const homeHide_FooterNav = () => {
  if (ThisPageIsNot(home)) {
    return
  }
  $('.nav-footer').setAttribute('hidden','')
}
onLoaders.push(homeHide_FooterNav)

const articles_PlaceholderText = () => {
  if (ThisPageIsNot(articles)) {
    return
  }
  let rps = [...document.querySelectorAll('.read-preview')]
  let bodyRGB = getComputedStyle(document.body).backgroundColor.match(/rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})/)
  rps.forEach((rp, i) => {
    if (i % 2 === 0) {
      rp.style.backgroundImage = `linear-gradient(rgba(${bodyRGB[1]}, ${bodyRGB[2]}, ${bodyRGB[3]}, 0.7), rgba(${bodyRGB[1]}, ${bodyRGB[2]}, ${bodyRGB[3]}, 0.97)), url("../css/img/coffee.svg")`
      // rp.querySelector('.date-written').textContent = "december 2017"
      // rp.querySelector('.title').textContent = "my how to wash a dog f"
      // rp.querySelector('.intro-text').textContent = "To properly wash a dog there are several tricky spots you need to rinse, soap and rub properly. This article breaks it down to you and even pets you a little bit."
    } else {
      rp.style.backgroundImage = `linear-gradient(rgba(${bodyRGB[1]}, ${bodyRGB[2]}, ${bodyRGB[3]}, 0.7), rgba(${bodyRGB[1]}, ${bodyRGB[2]}, ${bodyRGB[3]}, 0.97)), url("../css/img/bg1.jpg")`
      // rp.querySelector('.date-written').textContent = "january 2018"
      // rp.querySelector('.title').textContent = "how to do a steak on ice"
      // rp.querySelector('.intro-text').textContent = "I bet you thought impossible to cook good meat on ice, but turns out is it possible, not just possible, DELISH!"
    }
  })
}
// onLoaders.push(articles_PlaceholderText)

// - - - - - - - - - HOME
// - - - - - - - - - - - - - - -
