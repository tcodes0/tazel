// - - - - - - - - - UTIL
// - - - - - - - - - - - - - - -
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
const ThisPageIsNot = name => document.title !== name
const ThisPageIs = name => document.title === name
const home = 'Thomazella'
const articles = 'Thomazella\'s articles'
const projects = 'Thomazella\'s projects'
const about = 'About Thomazella'
let resizers = []
let onLoaders = []
// - - - - - - - - - HOME
// - - - - - - - - - - - - - - -
const homeSetHeight_QuickDescriptionOfMe = () => {
  if (ThisPageIsNot(home)) {
    return
  }
  let h = (
    document.querySelector('footer').offsetTop
    -
    Number.parseInt(getComputedStyle(document.querySelector('header')).height.replace('px',''))
  )
  document.querySelector('.quick-description-of-me').style.height = `${h}px`
}
resizers.push(homeSetHeight_QuickDescriptionOfMe)
onLoaders.push(homeSetHeight_QuickDescriptionOfMe)
window.addEventListener('resize', () => resizers.forEach(resizer => resizer()))
window.addEventListener('load', () => onLoaders.forEach(onLoader => onLoader()))
const homeHide_FooterNav = () => {
  if (ThisPageIsNot(home)) {
    return
  }
  document.querySelector('footer .navigation').setAttribute('hidden','')
}
onLoaders.push(homeHide_FooterNav)
// - - - - - - - - - NOT HOME
// - - - - - - - - - - - - - - -
const navKompakt_HighlightCurrentPageLink = () => {
  if (ThisPageIsNot(home)) {
    let select
    switch (document.title) {
      case home:
        select = "home"
        break;
      case articles:
        select = "articles"
        break;
      case projects:
        select = "projects"
        break;
      case about:
        select = "about"
        break;
      default:
    }
    document.querySelector(`.navigation-kompakt .link.${select}`)
      .classList.add('is-link-to-current-page')
  }
}
onLoaders.push(navKompakt_HighlightCurrentPageLink)
const articles_placeholderText = () => {
  if (ThisPageIsNot(articles)) {
    return
  }
  let ars = [...document.querySelectorAll('article')]
  let bodyRGB = getComputedStyle(document.body).backgroundColor.match(/rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})/)
  ars.forEach((ar, i) => {
    if (i % 2 === 0) {
      ar.style.backgroundImage = `linear-gradient(rgba(${bodyRGB[1]}, ${bodyRGB[2]}, ${bodyRGB[3]}, 0.7), rgba(${bodyRGB[1]}, ${bodyRGB[2]}, ${bodyRGB[3]}, 0.97)), url("../css/img/coffee.svg")`
      ar.querySelector('.date-written').textContent = "december 2017"
      ar.querySelector('.title').textContent = "my how to wash a dog f"
      ar.querySelector('.intro-text').textContent = "To properly wash a dog there are several tricky spots you need to rinse, soap and rub properly. This article breaks it down to you and even pets you a little bit."
    } else {
      ar.style.backgroundImage = `linear-gradient(rgba(${bodyRGB[1]}, ${bodyRGB[2]}, ${bodyRGB[3]}, 0.7), rgba(${bodyRGB[1]}, ${bodyRGB[2]}, ${bodyRGB[3]}, 0.97)), url("../css/img/bg1.jpg")`
      ar.querySelector('.date-written').textContent = "january 2018"
      ar.querySelector('.title').textContent = "how to do a steak on ice"
      ar.querySelector('.intro-text').textContent = "I bet you thought impossible to cook good meat on ice, but turns out is it possible, not just possible, DELISH!"
    }
  })
}
onLoaders.push(articles_placeholderText)
const footer_SmartAbsolutePosition = () => {
  let h = document.querySelector('footer').offsetHeight
  let offset = document.querySelector('footer').offsetTop
  if (h + offset < window.innerHeight) {
    let f = document.querySelector('footer')
    f.style.position = "absolute"
    f.style.bottom = "0"
    if (ThisPageIs(articles)) {
      document.querySelector('.article:last-child').style.border = 'unset'
    }
    if (ThisPageIs(about)) {
    }
    if (ThisPageIs(projects)) {
    }
  }
}
onLoaders.push(footer_SmartAbsolutePosition)
resizers.push(footer_SmartAbsolutePosition)
// onLoaders.push(toggleGuide)
