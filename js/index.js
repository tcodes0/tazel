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
// onLoaders.push(toggleGuide)

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
// onLoaders.push(articles_PlaceholderText)

const light_Colors = () => {
  let color = 'rgb(255,255,252)'
  $('.main').style.backgroundColor = color
  $('body').style.color = 'rgb(19,19,35)'
}
// onLoaders.push(light_Colors)

const langSwitcher_ClickHandler = () => {
  if (ThisPageIsNot(about) && ThisPageIsNot(home)) {
    return
  }
  $$('.language-switch button').forEach(b => b.addEventListener('click', e => {
    let t
    if (e.target.nodeName === "image") {
      // webkit sets e.target = img underneath, but we want the <button> 3 lvls up
        t = e.target.parentNode.parentNode.parentNode
    } else {
      // gecko sets e.target to the <button>
      t = e.target
    }
    if (t.classList.contains('active')) {
      return
    } else {
      t.classList.add('active')
      if (t.nextElementSibling) {
        t.nextElementSibling.classList.remove('active')
      } else {
        t.previousElementSibling.classList.remove('active')
      }
      if (ThisPageIs(about)) {
        document.documentElement.attributes.lang.value === "pt" ? english_About() : window.location.reload(false)
      } else if (ThisPageIs(home)) {
        document.documentElement.attributes.lang.value === "pt" ? english_Home() : window.location.reload(false)
      }
    }
  }))
}
onLoaders.push(langSwitcher_ClickHandler)

const langSwitcher_Enabler = () => {
  if (ThisPageIsNot(home) && ThisPageIsNot(about)) {
    return
  }
  $('.language-switch').classList.remove('hide')
}
onLoaders.push(langSwitcher_Enabler)

const notSureIfList_RunTask = (object, task) => {
  if (object.forEach) {
    object.forEach(obj => {
      notSureIfList_RunTask(obj, task)
    })
  } else {
    task(object)
  }
}

const cleanStyles = obj => notSureIfList_RunTask(obj, o => o.removeAttribute('style'))
const changeOpacity = (obj, value) => notSureIfList_RunTask(obj, o => o.style.opacity = value)

const english_About = () => {
  const fadeIn = () => {
    window.addEventListener('scroll', clean, {once: true})
    changeOpacity(all, 1)
  }
  const clean = () => cleanStyles(all)

  let all = []

  let h_h1 = $('.about-header h1')

  let iAmCalled = $('.what-does-tazel-mean span')

  let who_h3 = $('.who-i-am h3')
  let who_p = $$('.who-i-am p')

  let strong = $('.what-i-do strong')

  let dev_h3 = $('.dev-skills h3')
  let dev_li = $$('.dev-skills li')

  let des_h3 = $('.design-skills h3')
  let des_li = $$('.design-skills li')

  let oth_h3 = $('.other-skills h3')
  let oth_li = $('.other-skills li')

  let opn_h2 = $('.opinions h2')
  let opn_li = $$('.opinions li')

  let fom_h2 = $('fieldset h2')
  let fom_la = $$('fieldset label')
  let fom_in = $$('fieldset input')
  let fom_submit = $('#submit-button')

  let thanks = $('.thanks-for-reading em')

  const changeToEnglish = () => {
    $('html').setAttribute('lang','en')
    h_h1.textContent = "It's nice you came by"
    iAmCalled.textContent = "I'm"
    who_h3.textContent = "Since we're here, this is what I do"
    who_p[0].textContent = "I am a developer and a designer knee-deep into technology." +
      " I like to learn everything and I'll teach myself anything." +
      " Actually, nowadays what can't you learn on Youtube, hmm?"
    who_p[1].textContent = "Truth is, I like too many things, specially in software." +
      " I like layouts, typography, and visual elements... Well, I did major in Design, so that much is expected." +
      " As a developer I like to understand how it works, investigate, test, play with and find my way of doing it."
    // who_p[2].textContent = "das"
    strong.textContent = "I make digital products for people like you. I specialize in frontend. I love this job and I'm quite creative. To me people come first."
    dev_h3.textContent = "Developer Skills"
    dev_li[0].querySelector('span').textContent = "Semantics, structure and accesibility are essential."
    dev_li[1].querySelector('span').textContent = "Communicate brand values offering a good experience on all platforms."
    dev_li[2].querySelector('span').textContent = "Functionality, interactivity and polish."
    // dev_li[3].querySelector('span').textContent = "I know fundamentals."
    dev_li[4].querySelector('span').textContent = "I know all but prefer Mac or Linux."
    dev_li[5].querySelector('span').textContent = "I write scripts to automate things. I plan to pick up a more powerful language like Python or Ruby."
    dev_li[6].querySelector('span').textContent = "I know fundamentals."
    dev_li[7].querySelector('span').textContent = "Currently practicing."
    dev_li[8].querySelector('span').textContent = "Currently practicing."

    dev_li[9].querySelector('b').textContent = "4 Years"
    dev_li[9].querySelector('span').textContent = "Programmin\'."

    des_h3.textContent = "Designer Skills"
    des_li[0].querySelector('span').textContent = "10+ years using it. (I took classes when I was 13.)"
    des_li[1].querySelector('span').textContent = "5 years using."
    des_li[2].querySelector('span').textContent = "2 years using."

    oth_h3.textContent = "And also"
    oth_li.innerHTML = "I know bussiness modeling and a thing or two about <b>entrepreneurship,</b> I studied it in college. I speak <b>English</b> since I was 16, having lived about a year in the US." +
      " Strangely enough I never taught anyone. I work well in <b>groups</b> and I run <b>presentations</b> just fine. I consider myself <b>confident and rational.</b>"

    opn_h2.textContent = "Here's what I think"

    opn_li[0].querySelector('h3').textContent = "Development"
    opn_li[0].querySelectorAll('p')[0].textContent = "Making and building is the essence of a developer. I'm careful with what I build because I understand someone will use it." +
      " The goal is that someone's experience and that is what I deliver."
    opn_li[0].querySelector('blockquote').textContent = "You may not test your software, but your user always will"
    opn_li[0].querySelectorAll('p')[1].textContent = "I learn the frameworks, practices and languages popular right now, fully aware they'll be replaced soon enough." +
      " I also invest on theory, methodology and on the more permanent knowledge. I'm motivated to make useful things and the process is so fun."

    opn_li[1].querySelector('p').textContent = "Design is taking an abstract idea and planning its realization. It's the special first step that makes for a solid beginning." +
      " Just like in development, design to me is for the people. That's why I like frontend, because it's the first layer of contact with the user and must be handled skillfully." +
      " UI, Web and Interaction are my main guns, but I also practice UX and Graphical. Actually they depend on one another and sometimes function together."

    opn_li[2].querySelector('h3').textContent = "People"
    opn_li[2].querySelector('p').textContent = "I believe it's important to work with stimulating people. In college I worked mostly in groups and had good and bad experiences." +
      " I even lead sometimes. In the end I like to make people feel good, be that the users or my work folks."

    opn_li[3].querySelector('h3').textContent = "Fun"
    opn_li[3].querySelector('p').textContent = "I have a lotta fun working. Some of my hobbies include manga, music and games. I've been playing games since ever and I follow the scene closely." +
      " Who knows I won't make my first game in the near future?"

    fom_h2.textContent = "Send me an e-mail!"
    fom_la[0].textContent = "Your name"
    fom_la[1].textContent = "Your e-mail"
    fom_submit.value = "Send"

    thanks.textContent = "Thanks for reading"
    fadeIn()
  }

  all.push(h_h1, iAmCalled, who_h3, who_p, strong, dev_h3,dev_li, des_h3,
    des_li, oth_h3, oth_li, opn_h2, opn_li, fom_h2,
    fom_la, fom_in, fom_submit, thanks)
  all[0].addEventListener('transitionend', changeToEnglish, {once: true})

  notSureIfList_RunTask(all, a => {
    a.style.transition = "opacity 1.15s ease-out"
    a.style.opacity = 0
  })

  return all
}

const english_Home = () => {
  const changeToEnglish = () => {
    $('html').setAttribute('lang','en')
    pro.innerHTML = "Hi there!<br> I work building websites and enjoy it a lot. I think constantly about the people" +
    " using my work and how to make it better. You can see and play with my stuff or just read it."
    fadeIn()
  }
  const fadeIn = () => {
    window.addEventListener('scroll', clean, {once: true})
    pro.style.opacity = 1
  }
  const clean = () => cleanStyles(pro)

  let pro = $('#professional-description h2')
  pro.addEventListener('transitionend', changeToEnglish, {once: true})
  pro.style.transition = "opacity 1.15s ease-out"
  pro.style.opacity = 0
}
