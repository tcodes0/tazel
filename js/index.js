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
// onLoaders.push(navKompakt_HighlightCurrentPageLink)
const Articles_PlaceholderText = () => {
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
onLoaders.push(Articles_PlaceholderText)
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
// onLoaders.push(footer_SmartAbsolutePosition)
// resizers.push(footer_SmartAbsolutePosition)
const requestData_FromJSON = (path) => {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest()
    req.open('GET', path)
    req.onreadystatechange = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        req.status === 200 ? resolve(JSON.parse(req.responseText)) : reject(req)
      }
    }
    req.send()
  })
}
requestData_FromJSON('js/articles.json')
  .catch(err => console.error(`${err.status} - ${err.statusText} - ${err.responseURL}`))
  .then(data => data ? console.log(data) : undefined)
const floatingArticle_Inserter = () => {
  if (ThisPageIsNot(articles)) {
    return
  }
  const html = `
  <article class="floating-article">
    <div class="background-container">
      <span class="date-written">March 2010</span>
      <svg version="1.1" id="button-close" x="0px" y="0px" viewBox="0 0 74 89.8" xml:space="preserve">
        <g id="X">
          <path id="componentA" d="M1.5,78.8l33-35.5c0.3-0.3,0.5-0.6,0.7-0.9L61.7,1.9c1.7-2.2,4.5,0.9,6.6,2.6l0,0c2.2,1.7,6,4.3,4.2,6.5L40.1,46c-0.6,0.6-1.1,1.3-1.6,2l-26.2,40c-1.7,2.2-4.7-1-6.8-2.7h0C3.3,83.5-0.3,81,1.5,78.8z"/>
          <path id="componentB" d="M72.5,78.8l-33-35.5c-0.3-0.3-0.5-0.6-0.7-0.9L12.3,1.9c-1.7-2.2-4.5,0.9-6.6,2.6l0,0c-2.2,1.7-6,4.3-4.2,6.5L33.9,46c0.6,0.6,1.1,1.3,1.6,2l26.2,40c1.7,2.2,4.7-1,6.8-2.7l0,0C70.7,83.5,74.3,81,72.5,78.8z"/>
        </g>
      </svg>
      <div class="title-container"><h3 class="title">The flying sourceror lives! All hail goddammit now hail yuupppppyy</h3></div>
      <img class="full-width" src="css/img/bg1.jpg" alt="">
      <p class="paragraph intro-text">All their equipment and instruments are alive. I watched the storm, so beautiful yet terrific. Almost before we knew it, we had left the ground. It was going to be a lonely trip back.</p>
      <p class="paragraph intro-text">All their equipment and instruments are alive. I watched the storm, so beautiful yet terrific. Almost before we knew it, we had left the ground. It was going to be a lonely trip back.</p>
      <img class="half-width " src="css/img/bg1.jpg" alt="">
      <p class="paragraph intro-text">All their equipment and instruments are alive. I watched the storm, so beautiful yet terrific. Almost before we knew it, we had left the ground. It was going to be a lonely trip back.</p>
      <p class="paragraph intro-text">All their equipment and instruments are alive. I watched the storm, so beautiful yet terrific. Almost before we knew it, we had left the ground. It was going to be a lonely trip back.</p>
    </div>
  </article>`
  let main = document.querySelector('main')
  let el = document.createElement('section')
  let tail = document.createElement('div')
  const transitionRemover = e => {
    if (e.propertyName !== "top") {
      return
    }
    el.style.transition = ''
    el.removeEventListener('transitionend', transitionRemover)
  }
  const headPrepender =  e => {
    if (e.propertyName !== "top") {
      return
    }
    let head = document.createElement('div')
    head.classList.add('empty-transparency')
    head.style.height = el.dataset.top + 'px'
    head.style.top = -1 * Number.parseInt(el.dataset.top) + 'px'
    el.prepend(head)
    el.removeEventListener('transitionend', headPrepender)
    head.addEventListener('click', floatingArticle_Destroyer)
    head.addEventListener('touchend', floatingArticle_Destroyer)
  }
  el.classList.add('article-container')
  el.classList.add('added-by-js')
  el.style.position = 'absolute'
  el.style.transition = 'all 1.1s ease-in-out'
  el.style.top = window.innerHeight + window.scrollY + "px"
  el.innerHTML = html
  tail.classList.add('empty-transparency')
  main.appendChild(el)
  tail.style.top = el.offsetHeight + 'px'
  el.appendChild(tail)
  el.setAttribute("data-top", window.scrollY)
  el.style.top = window.scrollY + "px"
  el.addEventListener('transitionend', positionFixed_Apply)
  el.addEventListener('transitionend', transitionRemover)
  el.addEventListener('transitionend', headPrepender)
  window.addEventListener('wheel', scrollHandler)
  window.addEventListener('touchmove', scrollHandler)
  window.addEventListener('keydown', keyHandler)
  tail.addEventListener('click', floatingArticle_Destroyer)
  tail.addEventListener('touchend', floatingArticle_Destroyer)
}
// onLoaders.push(floatingArticle_Inserter)
const previewArticles_LinkHooker = () => {
  if (ThisPageIsNot(articles)) {
    return
  }
  document.querySelectorAll('.link.intro-container, .link.title-container')
    .forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault()
        if (document.querySelector('.floating-article')) {
          return
        } else {
          floatingArticle_Inserter()
          previewArticles_LinkDisabler()
        }
      })
    })
}
onLoaders.push(previewArticles_LinkHooker)
const previewArticles_LinkDisabler = () => {
  document.querySelectorAll('.link.intro-container, .link.title-container')
    .forEach(link => {
      link.classList.add('disabled')
      link.removeAttribute('href')
    })
}
const previewArticles_LinkEnabler = () => {
  document.querySelectorAll('.link.intro-container, .link.title-container')
    .forEach(link => {
      link.classList.remove('disabled')
      link.setAttribute('href','')
    })
}
const $ = q => document.querySelector(q)
const f = document.querySelector('footer')
const m = document.querySelector('main')
const floatingArticle_Destroyer = () =>{
  let el = $('.added-by-js')
  el ? undefined : console.error("is there a floatingArticle to remove?")
  $('main').removeChild(el)
  window.removeEventListener('wheel', scrollHandler)
  window.removeEventListener('touchmove', scrollHandler)
  window.removeEventListener('keydown', keyHandler)
  previewArticles_LinkEnabler()
  positionFixed_Remove()
  // this call makes it seem smoother cancelling some scrolling
  window.scroll(0, Number.parseInt(el.dataset.top))
}
const scrollHandler = e => {
  if (e.deltaY < 0) {
    return
  }
  let el = $('.added-by-js')
  if (window.scrollY >= el.offsetHeight + Number.parseInt(el.dataset.top) - 120) {
    floatingArticle_Destroyer()
  }
}
const keyHandler = e => {
  if (
    e.keyCode !== 33 &&
    e.keyCode !== 34 &&
    e.keyCode !== 38 &&
    e.keyCode !== 27 &&
    e.keyCode !== 40) {
      return
    } else {
      e.keyCode === 27 ? floatingArticle_Destroyer() : scrollHandler()
    }
}
const positionFixed_Apply = e => {
  if (e.propertyName !== "top") {
    return
  }
  let mchildren = [...$('main').childNodes].filter(child => child.nodeName !== "#text")
  let el = $('.added-by-js')
  el ? undefined : console.error("is there a floatingArticle to get dataset.top from?");
  // pop out the last element, el, so it stays scrollable
  mchildren.pop()
  // start from bottom, bc elements tend to collapse upwards
  mchildren.reverse()
  mchildren.forEach(child => {
    child.style.top = child.offsetTop - Number.parseInt(el.dataset.top) + 'px'
    child.style.position = 'fixed'
  })
}
const positionFixed_Remove = () => {
  let mchildren = [...$('main').childNodes].filter(child => child.nodeName !== "#text")
  mchildren.forEach(child => child.removeAttribute('style'))
}
// onLoaders.push(toggleGuide)
