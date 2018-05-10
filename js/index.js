const ThisPageIsNot = name => document.title !== name
const ThisPageIs = name => document.title === name
const home = "Thomazella's homepage"
const articles = "Thomazella's articles"
const projects = "Thomazella's projects"
const about = "About Thomazella"
const $ = q => document.querySelector(q)
const $$ = q => document.querySelectorAll(q)
const f = $(".footer") || $(".footer-home")
const m = $(".main")
const transitionStandard = "1.15s ease-out"
const transitionSmooth = "2.15s ease-in-out"
const floatArticleEvent = new Event("floatarticle", { bubbles: true })
let resizers = []
let onLoaders = []
let floaters = []

// - - - - - - - - - All PAGES
// - - - - - - - - - - - - - - -
window.addEventListener("resize", () => resizers.forEach(resizer => resizer()))
document.addEventListener("readystatechange", () => {
  if (document.readyState == "interactive") {
    onLoaders.forEach(onLoader => {
      onLoader()
    })
  }
})

const toggleGuide = () => {
  let guide = $(".guide")
  if (guide.style.display === "" || guide.style.display === "none") {
    guide.style.display = "block"
    if (window.innerHeight > document.body.offsetHeight) {
      guide.style.height = `${window.innerHeight}px`
    } else {
      guide.style.height = `${document.body.offsetHeight}px`
    }
  } else {
    guide.style.display = "none"
  }
}
// onLoaders.push(toggleGuide)

const htmlHide = query => {
  let e = $(query)
  if (e.attributes.hidden) e.removeAttribute("hidden")
  else {
    e.setAttribute("hidden", "")
    e.style.display = "none"
  }
}

const whiteIcons = q => {
  let icons = q ? [...$$(`${q} svg image`)] : [...$$("svg image")]
  let xlink = "xlink:href"
  let src = "src"
  icons.forEach(icon => {
    if (icon.attributes[xlink].value.match(/-white/)) {
      return
    }
    icon.setAttribute(
      xlink,
      icon.attributes[xlink].value.replace(".svg", "-white.svg")
    )
    icon.setAttribute(
      src,
      icon.attributes[src].value.replace(".png", "-white.png")
    )
  })
}
// onLoaders.push(whiteIcons)

const blackIcons = q => {
  let icons = q ? [...$$(`${q} svg image`)] : [...$$("svg image")]
  let xlink = "xlink:href"
  let src = "src"
  icons.forEach(icon => {
    if (!icon.attributes[xlink].value.match(/-white/)) {
      return
    }
    icon.setAttribute(
      xlink,
      icon.attributes[xlink].value.replace("-white.svg", ".svg")
    )
    icon.setAttribute(
      src,
      icon.attributes[src].value.replace("-white.png", ".png")
    )
  })
}

const hide_HomeFooterNav = () => {
  if (ThisPageIsNot(home)) {
    return
  }
  $(".nav-footer").setAttribute("hidden", "")
}
onLoaders.push(hide_HomeFooterNav)

const light_Colors = () => {
  let color = "rgb(255,255,252)"
  $(".main").style.backgroundColor = color
  $("body").style.color = "rgb(19,19,35)"
}
// onLoaders.push(light_Colors)

const langSwitcher_AddClickHandler = () => {
  if (ThisPageIsNot(about) && ThisPageIsNot(home)) {
    return
  }

  $$(".language-switch button").forEach(b =>
    b.addEventListener("click", e => {
      // webkit sets e.target = img underneath, but we want the <button> 3 lvls up
      // gecko sets e.target to the <button>
      let t =
        e.target.nodeName === "image"
          ? e.target.parentNode.parentNode.parentNode
          : e.target

      if (t.classList.contains("active")) {
        return
      } else {
        t.classList.add("active")

        t.nextElementSibling
          ? t.nextElementSibling.classList.remove("active")
          : t.previousElementSibling.classList.remove("active")

        if (ThisPageIs(about)) {
          document.documentElement.attributes.lang.value === "pt"
            ? english_About()
            : window.location.reload(false)
        } else if (ThisPageIs(home)) {
          document.documentElement.attributes.lang.value === "pt"
            ? english_Home()
            : portuguese_Home()
        }
      }
    })
  )
}
onLoaders.push(langSwitcher_AddClickHandler)

const langSwitcher_Unhide = () => {
  if (ThisPageIsNot(home) && ThisPageIsNot(about)) {
    return
  }
  $(".language-switch").classList.remove("hide")
}
onLoaders = [langSwitcher_Unhide, ...onLoaders]

const runTask_ObjectOrList = (object, task) => {
  if (object.forEach) {
    object.forEach(obj => {
      runTask_ObjectOrList(obj, task)
    })
  } else {
    task(object)
  }
}

const cleanStyles = obj =>
  runTask_ObjectOrList(obj, o => o.removeAttribute("style"))

const changeOpacity = (obj, value) =>
  runTask_ObjectOrList(obj, o => (o.style.opacity = value))

const english_About = () => {
  const fadeIn = () => {
    window.addEventListener("scroll", () => cleanStyles(all), { once: true })
    changeOpacity(all, 1)
  }

  let all = []

  let h_h1 = $(".about-header h1")

  let iAmCalled = $(".what-does-tazel-mean span")

  let who_h3 = $(".who-i-am h3")
  let who_p = $$(".who-i-am p")

  let strong = $(".what-i-do strong")

  let dev_h3 = $(".dev-skills h3")
  let dev_li = $$(".dev-skills li")

  let des_h3 = $(".design-skills h3")
  let des_li = $$(".design-skills li")

  let oth_h3 = $(".other-skills h3")
  let oth_li = $(".other-skills li")

  let opn_h2 = $(".opinions h2")
  let opn_li = $$(".opinions li")

  let fom_h2 = $("fieldset h2")
  let fom_la = $$("fieldset label")
  let fom_in = $$("fieldset input")
  let fom_submit = $("#submit-button")

  let thanks = $(".thanks-for-reading em")

  const changeToEnglish = () => {
    $("html").setAttribute("lang", "en")
    $("#sender-name").setAttribute("placeholder", "Mr. Foo Bar")
    $("#sender-email").setAttribute("placeholder", "yourname@provider.com")

    h_h1.textContent = "Nice you came by"
    iAmCalled.textContent = "I'm"
    who_h3.textContent = "This is what I do"

    who_p[0].textContent = `I am a developer majored in design deeply interested in technology.
    I like to learn everything and I'll teach myself anything.
    One affinity is frontend: visual elements and building user interfaces, but I'm also very much into software logic.`

    who_p[1].textContent = `As a developer, I strive to undestand the internals giving functionality to a program.
    To me programming is a fun, creative tool drenched in sparking potential to build things.
    It's very challenging at times, but nothing beats beating the problems and realizing something useful for someone.`

    strong.textContent = `I make digital products for people like you.
    I love the creative side of the job and I put people first.`

    dev_h3.textContent = "Developer Skills"
    dev_li[0].querySelector("span").textContent =
      "Semantics, structure and accesibility are essential."
    dev_li[1].querySelector("span").textContent =
      "Communicate brand values offering a good experience on all platforms."
    dev_li[2].querySelector("span").textContent =
      "Functionality, interactivity and polish."
    // dev_li[3].querySelector('span').textContent = "I know fundamentals."
    dev_li[3].querySelector("span").textContent =
      "I know all but prefer Mac or Linux."
    dev_li[4].querySelector("span").textContent =
      "I write scripts to automate things. I plan to pick up a more powerful language like Python or Ruby."
    dev_li[5].querySelector("span").textContent = "I know fundamentals."
    dev_li[6].querySelector("span").textContent = "Currently practicing."
    dev_li[7].querySelector("span").textContent = "Currently practicing."

    dev_li[8].querySelector("b").textContent = "4 Years"
    dev_li[8].querySelector("span").textContent = "Programmin'."

    dev_li[9].querySelector("span").textContent = "Currently practicing."

    des_h3.textContent = "Designer Skills"
    des_li[0].querySelector("span").textContent =
      "10+ years using it. (I took classes when I was 13.)"
    des_li[1].querySelector("span").textContent = "5 years using."
    des_li[2].querySelector("span").textContent = "2 years using."
    des_li[3].querySelector("span").textContent =
      "How to use a process to create good solutions."

    des_li[4].querySelector("b").textContent = "Pragmatism"
    des_li[4].querySelector("span").textContent =
      "To tackle a complex reality responsibly."

    des_li[5].querySelector("b").textContent = "Integralism"
    des_li[5].querySelector("span").textContent =
      "To think the product as more than the sum of its parts."

    oth_h3.textContent = "And also"
    oth_li.innerHTML =
      `I know bussiness modeling and a thing or two about <b>entrepreneurship,</b> I studied it in college. I speak <b>English</b> since I was 16, having lived about a year in the US.
       Strangely enough I never taught anyone. I work well in <b>groups</b> and I run <b>presentations</b> just fine. I consider myself <b>confident and rational.</b>`

    opn_h2.textContent = "Here's what I think"

    opn_li[0].querySelector("h3").textContent = "Development"
    opn_li[0].querySelectorAll("p")[0].textContent =
      "Making and building is the essence of a developer. I'm careful with what I build because I understand someone will use it." +
      " The goal is that someone's experience and that is what I deliver."
    opn_li[0].querySelector("blockquote").textContent =
      "You may not test your software, but your user always will"
    opn_li[0].querySelectorAll("p")[1].textContent =
      "I learn the frameworks, practices and languages popular right now, fully aware they'll be replaced soon enough." +
      " I also invest on theory, methodology and on the more permanent knowledge. I'm motivated to make useful things and the process is so fun."

    opn_li[1].querySelector("p").textContent =
      "Design is taking an abstract idea and planning its realization. It's the special first step that makes for a solid beginning." +
      " Just like in development, design to me is for the people. That's why I like frontend, because it's the first layer of contact with the user and must be handled skillfully." +
      " UI, Web and Interaction are my main guns, but I also practice UX and Graphical. Actually they depend on one another and sometimes function together."

    opn_li[2].querySelector("h3").textContent = "People"
    opn_li[2].querySelector("p").textContent =
      "I believe it's important to work with stimulating people. In college I worked mostly in groups and had good and bad experiences." +
      " I even lead sometimes. In the end I like to make people feel good, be that the users or my work folks."

    opn_li[3].querySelector("h3").textContent = "Fun"
    opn_li[3].querySelector("p").textContent =
      "I have a lotta fun working. Some of my hobbies include manga, music and games. I've been playing games since ever and I follow the scene closely." +
      " Who knows I won't make my first game in the near future?"

    fom_h2.textContent = "Send me an e-mail!"
    fom_la[0].textContent = "Your name"
    fom_la[1].textContent = "Your e-mail"
    fom_submit.value = "Send"

    thanks.textContent = "Thanks for reading"
    fadeIn()
  }

  all.push(
    h_h1,
    iAmCalled,
    who_h3,
    who_p,
    strong,
    dev_h3,
    dev_li,
    des_h3,
    des_li,
    oth_h3,
    oth_li,
    opn_h2,
    opn_li,
    fom_h2,
    fom_la,
    fom_in,
    fom_submit,
    thanks
  )
  // add handler to only one element to avoid handling it many times
  all[0].addEventListener("transitionend", changeToEnglish, { once: true })

  runTask_ObjectOrList(all, a => {
    a.style.transition = `opacity ${transitionStandard}`
    a.style.opacity = 0
  })

  return all
}

const english_Home = () => {
  let pro = $("#professional-description h2")

  const changeToEnglish = () => {
    $("html").setAttribute("lang", "en")
    pro.innerHTML = `Hi there!<br> I work building websites and I love it. I care about the people
    using my work and I strive to make it better. This is my homepage, feel free to play with my stuff.`
    window.addEventListener("scroll", () => cleanStyles(pro), { once: true })
    pro.style.opacity = 1
  }

  pro.addEventListener("transitionend", changeToEnglish, { once: true })
  pro.style.transition = `opacity ${transitionStandard}`
  pro.style.opacity = 0
}

const footer_OnBottom = () => {
  if (f.offsetHeight + f.offsetTop < window.innerHeight) {
    f.style.position = "relative"
    f.style.bottom =
      -1 * (window.innerHeight - f.offsetHeight - f.offsetTop) + "px"
    // m.style.minHeight = window.innerHeight + 'px'
  }
}
onLoaders.push(footer_OnBottom)
// resizers.push(footer_OnBottom)

const findALinkParent = x =>
  x.nodeName === "A" ? x : findALinkParent(x.parentNode)

const previewArticles_AddClickHandler = () => {
  const handler = e => {
    e.preventDefault()
    if ($(".added-by-js")) {
      return
    } else {
      floatingArticle_Inserter(e)
      previewArticles_LinkDisabler()
    }
  }
  const hooker = query => {
    ;[...$$(query)]
      .filter(link => !link.classList.contains("other-site"))
      .forEach(link => {
        // console.log(link);
        link.addEventListener("click", handler)
      })
  }
  if (ThisPageIs(articles)) {
    hooker(".read-preview a")
  }
  if (ThisPageIs(projects)) {
    hooker(".project-preview a")
  }
}
onLoaders.push(previewArticles_AddClickHandler)

const previewArticles_LinkDisabler = () => {
  const hooker = query => {
    ;[...$$(query)]
      .filter(link => !link.classList.contains("other-site"))
      .forEach(link => {
        link.classList.add("disabled")
      })
  }
  if (ThisPageIs(articles)) {
    hooker(".read-preview a")
  }
  if (ThisPageIs(projects)) {
    hooker(".project-preview a")
  }
}

const floatingArticle_Inserter = e => {
  // if the hashChecker() called this, e will be a string
  let triggeredByClick = typeof e === "object"
  // get the link that was clicked or URL hash navigated to and figure what article to show
  let targetHash = triggeredByClick
    ? findALinkParent(e.target).attributes.href.value
    : e
  let el = $(targetHash)
  //see BUG below
  let tail = document.createElement("div")

  const headPrepender = e => {
    let head = document.createElement("div")
    head.classList.add("empty-transparency")
    head.style.height = el.dataset.top + "px"
    head.style.top = -1 * Number.parseInt(el.dataset.top) + "px"
    el.prepend(head)
    head.addEventListener("click", floatingArticle_Destroyer, { once: true })
    head.addEventListener("touchend", floatingArticle_Destroyer, { once: true })
  }
  const tailAppender = e => {
    el.appendChild(tail)
    tail.classList.add("empty-transparency")
    tail.style.top = el.offsetHeight + "px"
    tail.addEventListener("click", floatingArticle_Destroyer, { once: true })
    tail.addEventListener("touchend", floatingArticle_Destroyer, { once: true })
  }
  const unsetProgressCursor = () => (document.body.style.cursor = "auto")
  //setting this too early causes scroll that interferes with the floating transition
  const setURLHash = () =>
    window.location.hash !== targetHash
      ? (window.location.hash = targetHash)
      : undefined

  // set cursor for feedback something is gonna happen
  document.body.style.cursor = "progress"

  el.classList.add("added-by-js")
  // in case of a direct navigation to the article, no transition
  el.style.transition = triggeredByClick ? `transform ${transitionSmooth}` : ""
  // move article underneath viewport
  el.style.top = window.innerHeight + window.scrollY + "px"
  el.classList.remove("hide")
  // hide nonsensical link if js works
  el
    .querySelector('.container-backlinks a.back[href="#header"]')
    .classList.add("hide")

  // BUG: Safari needs this line outside 'load' handler below
  tail.style.top = el.offsetHeight + "px"

  //article specific functions listen to this
  el.dispatchEvent(floatArticleEvent)

  // the point where the article begins
  el.setAttribute("data-top", window.scrollY)
  // trigger to bring article up
  el.style.transform = `translateY(-${window.innerHeight}px)`
  // .main scrolls away with the article and the body's bg color looks like a glitch
  document.body.style.backgroundColor = getComputedStyle(m).backgroundColor

  if (document.readyState == "complete") {
    tailAppender()
  } else {
    //if done earlier it will have wrong height
    window.addEventListener("load", tailAppender, { once: true })
  }

  if (triggeredByClick) {
    // will run after transition and wrap it up
    el.addEventListener("transitionend", positionFixed_Apply, { once: true })
    el.addEventListener("transitionend", headPrepender, { once: true })
    el.addEventListener("transitionend", unsetProgressCursor, { once: true })
    el.addEventListener("transitionend", setURLHash, { once: true })
  } else {
    // no transiton, no problem
    positionFixed_Apply()
    headPrepender()
    unsetProgressCursor()
    setURLHash()
  }

  //events to close the floating article
  el
    .querySelector("a.close")
    .addEventListener("click", floatingArticle_Destroyer, { once: true })
  el
    .querySelector("a.close")
    .addEventListener("touchend", floatingArticle_Destroyer, { once: true })
  // window.addEventListener('wheel', scrollHandler, {passive: true})
  // window.addEventListener('touchstart', scrollHandler, {passive: true})
  window.addEventListener("scroll", scrollHandler, { passive: true })
  window.addEventListener("keydown", keyHandler)
  // IDEA: scroll bar is taking 15px on the right making the page move when article shows up
}

const positionFixed_Apply = e => {
  let mchildren = [...m.children].filter(child => {
    return (
      child.attributes.id.value !== "reads" &&
      child.attributes.id.value !== "projects"
    )
  })
  let el = $(".added-by-js")
  // rev to start from bottom, bc elements tend to collapse upwards
  mchildren.reverse()
  mchildren.forEach(child => {
    child.style.top = child.offsetTop - Number.parseInt(el.dataset.top) + "px"
    child.style.position = "fixed"
  })
}

const positionFixed_Remove = () => {
  ;[...m.children].forEach(child => child.removeAttribute("style"))
  resizers.forEach(resizer => resizer())
}

const floatingArticle_Destroyer = () => {
  // avoids a flick caused by smooth scrolling when article is destroyed
  const avoidScrollBehaviorSmooth = () => {
    let sb = getComputedStyle(document.body).scrollBehavior

    if (!sb) return

    if (sb !== "auto") {
      document.body.style.scrollBehavior = "auto"
    }
  }
  let el = $(".added-by-js")

  el.style.transition = `opacity ${transitionStandard}`
  changeOpacity(el, 0)

  el.addEventListener(
    "transitionend",
    e => {
      el.classList.remove("added-by-js")
      el.classList.add("hide")
      el.removeAttribute("style")
      $$(".empty-transparency").forEach(transp => el.removeChild(transp))
      previewArticles_LinkEnabler()
      avoidScrollBehaviorSmooth()
      positionFixed_Remove()
      // avoid flicks by cancelling some scrolling
      window.scroll(0, Number.parseInt(el.dataset.top))
      // cleanup js css
      document.body.removeAttribute("style")
    },
    { once: true }
  )

  window.removeEventListener("wheel", scrollHandler)
  window.removeEventListener("touchmove", scrollHandler)
  window.removeEventListener("keydown", keyHandler)
}

const scrollHandler = e => {
  if (e.deltaY < 0) {
    return
  }
  let el = $(".added-by-js")
  if (
    window.scrollY >=
    el.offsetHeight + Number.parseInt(el.dataset.top) - 120
  ) {
    floatingArticle_Destroyer()
  }
}

const keyHandler = e => {
  // console.log(`${e.code} - ${e.keyCode}`);
  if (
    e.keyCode !== 32 && //space
    // e.keyCode !== 33 && //pgup
    e.keyCode !== 34 && //pgdown
    // e.keyCode !== 38 && //uparrow
    e.keyCode !== 27 && //esc
    e.keyCode !== 40
  ) {
    //downarrow
    return
  } else {
    e.keyCode === 27 ? floatingArticle_Destroyer() : scrollHandler(e)
  }
}

const previewArticles_LinkEnabler = () => {
  const hooker = query => {
    ;[...$$(query)]
      .filter(link => !link.classList.contains("other-site"))
      .forEach(link => {
        link.classList.remove("disabled")
      })
  }
  if (ThisPageIs(articles)) {
    hooker(".read-preview a")
  }
  if (ThisPageIs(projects)) {
    hooker(".project-preview a")
  }
}

const backToTop_LinkReplacer = () => {
  if (ThisPageIsNot(articles) && ThisPageIsNot(projects)) {
    return
  }
  let xl = "xlink:href"
  let source = $('a.close[href="#header"]')
  let clone = $('.container-backlinks a.back[href="index.html"]').cloneNode(
    true
  )
  clone.querySelector("span").textContent = "Close this"
  clone.attributes.href.value = source.attributes.href.value
  clone.querySelector("svg > *").attributes[xl].value = source.querySelector(
    "svg > *"
  ).attributes[xl].value
  clone.querySelector("svg > *").attributes.src.value = source.querySelector(
    "svg > *"
  ).attributes.src.value
  clone.addEventListener("click", floatingArticle_Destroyer, { once: true })
  clone.addEventListener("touchstart", floatingArticle_Destroyer, {
    once: true,
  })
  $('.container-backlinks a.back[href="#header"]').classList.add("hide")
  $(".container-backlinks").prepend(clone)
}

const hideReadsAndProjects = () => {
  if (ThisPageIs(articles)) {
    $$(".read").forEach(r => r.classList.add("hide"))
  } else if (ThisPageIs(projects)) {
    $$(".project").forEach(p => p.classList.add("hide"))
  }
}

const hideAllReadsButLast = () => {
  let reads = [...$$(".read")]
  reads.pop()
  reads.forEach(r => r.classList.add("hide"))
}
// onLoaders.push(hideAllReadsButLast)
// IDEA: project separator glitches when main changes size. rework i

const hashChecker = () => {
  if (
    window.location.hash === "#header" ||
    window.location.hash === "#reads" ||
    window.location.hash === "#projects" ||
    !window.location.hash
  ) {
    return
  }

  // window.scrollTo(0,0)
  floatingArticle_Inserter(window.location.hash)
}
onLoaders = [hashChecker, ...onLoaders]

const projectsFloatEventHooker = () => {
  if (ThisPageIs(projects)) {
    document.body.addEventListener("floatarticle", e =>
      floaters.forEach(floater => floater(e))
    )
  }
}
onLoaders = [projectsFloatEventHooker, ...onLoaders]

const nununuIconColorSwapper = e => {
  if (e.target.attributes.id.value !== "nununu") {
    return
  }

  let targets = [...$$("#nununu a.close .img-svg")]
  targets.push(...$$("#nununu a.back .img-svg"))
  targets.forEach(t => (t.style.backgroundColor = "#ffbc0f"))
}
floaters.push(nununuIconColorSwapper)

const portuguese_Home = () => {
  let pro = $("#professional-description h2")

  const changeToPortuguese = () => {
    $("html").setAttribute("lang", "pt")
    pro.innerHTML = `Eu trabalho construindo sites e eu adoro.
    O que me motiva é a utilidade do meu trabalho para as pessoas e meu apetite por tecnologia.
    Pode olhar e brincar com as minhas coisas.`
    window.addEventListener("scroll", () => cleanStyles(pro), { once: true })
    pro.style.opacity = 1
  }

  pro.addEventListener("transitionend", changeToPortuguese, { once: true })
  pro.style.transition = `opacity ${transitionStandard}`
  pro.style.opacity = 0
}
