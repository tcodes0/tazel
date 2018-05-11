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

const english_aboutStrings = [
  "en",
  "Nice you came by",
  "I'm",
  "This is what I do",
  `I am a developer majored in design deeply interested in technology.
    I like to learn everything and I'll teach myself anything.
    An affinity is front-end: visual elements and building user interfaces, but I'm curious enough to look into back-end, or anything involving code, really.
    Ideation and people are what gives coding meaning, and for that, I'm glad to be a designer too.`,
  `As a developer, I strive to understand the internals giving functionality to a program.
    I enjoy taking my time to understand concepts and challenge myself to learn new languages for fun.
    To me programming is a fun, creative tool drenched in potential to create things.
    It's fulfilling to create something useful, but making the ideas in your head come to life (or to code?) is just incredible.`,
  `I make digital products for anyone in the world to use.
    It’s essential to me seeing good work making people happy.`,
  "Developer Skills",
  "Semantics, structure and accessibility are essential.",
  "Good UI looks great and is backwards compatible with older devices.",
  "My main language, I use it to deliver functionality, interactivity and polish. Knowing JS is more important than frameworks!",
  "4 Years",
  "Programmin'.",
  "A great framework I look forward to using often.",
  "I know how to use Linux and learning its principles made me a better developer. My preferred system is MacOS.",
  "I write scripts in Bash to automate things. Moving towards using Ruby more.",
  "Some experience with",
  "C++, Node.js and Ruby",
  "Designer Skills",
  "5 years using, essential to prototype and plan the UI.",
  "2 years using, they are the support team for photography and moving pictures.",
  "I think solutions by understanding the people they are for.",
  "I think 99 possibilities, sketch 40 then code 1.",
  "And also",
  `I know business modeling and a thing or two about <b>entrepreneurship,</b> I studied it in college. I speak <b>English</b> since I was 16, having lived about a year in the US.
       Strangely enough I never taught anyone. I work well in <b>groups</b> and I run <b>presentations</b> just fine. I consider myself <b>confident and rational.</b>`,
  "Here's what I think",
  "Development",
  `Making and building is the essence of a developer. I'm careful with what I build because I understand someone will use it.
       The goal is that someone's experience and that is what I deliver.`,
  "You may not test your software, but your user always will.",
  `I learn the frameworks, practices and languages popular right now, fully aware they'll be replaced soon enough.
       I also invest on theory, methodology and on the more permanent knowledge. I'm motivated to make useful things and the process is so fun.`,
  `Design is taking an abstract idea and planning its realization. It's the special first step that makes for a solid beginning.
       Just like in development, design to me is for the people. That's why I like front-end, because it's the first layer of contact with the user and must be handled skillfully.
       UI, Web and Interaction are my main guns, but I also practice UX and Graphical. Actually they depend on one another and sometimes function together.`,
  "People",
  `I believe it's important to work with stimulating people. In college I worked mostly in groups and had good and bad experiences.
       I even lead sometimes. In the end I like to make people feel good, be that the users or my work folks.`,
  "Fun",
  `I have a lotta fun working. Some of my hobbies include manga, music and games. I've been playing games since ever and I follow the scene closely.
       Who knows I won't make my first game in the near future?`,
  "Send me an email!",
  "Your name",
  "Your email",
  "Send",
  "Mr. Foo Bar",
  "yourname@provider.com",
  "Thanks for the visit",
]

const portuguese_aboutStrings = [
  "pt",
  "Bom te ver por aqui",
  "Eu sou",
  "Então, sobre o que eu faço",
  `Eu sou um desenvolvedor com formação em design e me interesso por quase tudo dentro de tecnologia.
  Eu gosto muito de aprender qualquer coisa e aprendo tudo sozinho.
  Tenho afinidade com front-end: elementos visuais e construir interfaces, mas também me interesso muito pela lógica do software.`,
  `Como desenvolvedor, gosto de parte do mecanismo interno que dirige as funções do programa.
  Penso em programação como uma ferramenta divertida, criativa e com um potencial imenso.
  Muitas vezes é desafiador, porém é muito estimulante ser capaz de superar problemas e construir algo útil para as pessoas.`,
  `Eu construo produtos digitais para pessoas como você.
  Adoro o lado criativo do meu trabalho e
  coloco o usuário em primeiro lugar.`,
  `Habilidades de Desenvolvedor`,
  `Semântica, estrutura e acessibilidade são cada vez mais importantes.`,
  `Comunicar a identidade visual e oferecer uma boa experiência independente de navegador.`,
  `Funcionalidade, interação e refinamento.`,
  "4 anos",
  "Programando.",
  "Excelente framework que eu pretendo usar sempre.",
  `Sei usar qualquer um. Prefiro Mac ou Linux.`,
  "Escrevo shell scripts para automatizar as coisas. Tenho planos de trocar por uma linguagem mais poderosa como Python ou Ruby.",
  "Experiência casual com",
  "C++, Node.js e Ruby",
  "Habilidades de Designer",
  "5 anos usando.",
  "2 anos usando.",
  "Eu penso em soluções entendendo as pessoas envolvidas.",
  "Eu penso 99 possibilidades, desenho 40 e programo 1.",
  "E também",
  `Tenho noções de modelagem de negócios e <b>empreendedorismo</b>, eu estudei na faculdade.
  Falo <b>inglês</b> desde os 16 anos, morei nos EUA 1 ano de intercâmbio.
  Estranhamente nunca dei aula.
  Trabalho bem em <b>grupo</b> e conduzo <b>apresentações</b> bem.
  Me considero uma pessoa <b>confiante e racional</b>.
  Trabalho na área porque eu <b>gosto</b>, e quero <b>crescer</b> como pessoa e profissional.`,
  "Eu acho o seguinte",
  "Desenvolvimento",
  "Fazer, construir é a essência de ser um desenvolvedor. Eu sou cuidadoso com meu software porque eu entendo que aquilo vai ser usado por alguém. A experiência da pessoa é o objetivo final e é isso que eu entrego.",
  "Você pode não testar seu software, mas seu usuário sempre vai.",
  "Eu procuro aprender os frameworks, práticas e linguagens do momento, com plena consciência que eles vão e vem. Também invisto na teoria, metodologia e nas coisas que ficam. Me motiva fazer coisas úteis pras pessoas e me diverte o processo de fazer.",
  `Design é o processo de tirar uma idéia do abstrato e esquematizar a realização dela. É a etapa especial que é a base de um bom produto. Assim como no desenvolvimento, o design para mim é centrado nas pessoas. Por isso eu tenho afinidade com front-end, por ser algo em contato direto
  com o usuário que precisa ser bem construído. UI, Web e Interação são minhas principais ferramentas, mas eu também pratico UX e Gráfico. Na verdade, eles são interdependentes e se confundem. Meu pensamento tende pro diferente, pro inusitado, pro inesperado,
  pro engraçado.`,
  "Pessoas",
  "Eu acredito que é importante trabalhar com pessoas estimulantes. Passando pela faculdade eu trabalhei exclusivamente em grupos e tive experiências boas e ruins. Eu até liderei algumas vezes. No fim, eu gosto de fazer as pessoas sentirem bem, sejam os usuários ou colegas.",
  "Diversão",
  "Eu me divirto bastante trabalhando. Alguns hobbies são mangás, música e jogos. Jogos estiveram comigo desde sempre e eu me mantenho informado. Quem sabe eu não faço meu primeiro jogo no futuro?",
  "Me manda um email!",
  "Seu nome",
  "Seu email",
  "Enviar",
  "Sr. Foogêncio Bar",
  "seunome@provedor.com",
  "Obrigado pela visita.",
]

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
            ? changeLanguage(english_aboutStrings)
            : changeLanguage(portuguese_aboutStrings)
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

const changeLanguage = Strings => {
  let all = []
  let iterator = Strings.values()
  const getNext = () => iterator.next().value

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

  let form_h2 = $("fieldset h2")
  let form_la = $$("fieldset label")
  let form_in = $$("fieldset input")
  let form_submit = $("#submit-button")

  let thanks = $(".thanks-for-reading em")

  const changeToEnglish = () => {
    $("html").setAttribute("lang", getNext())

    h_h1.textContent = getNext()
    iAmCalled.textContent = getNext()

    who_h3.textContent = getNext()
    who_p[0].textContent = getNext()
    who_p[1].textContent = getNext()

    strong.textContent = getNext()

    dev_h3.textContent = getNext()
    dev_li[0].querySelector("span").textContent = getNext()
    dev_li[1].querySelector("span").textContent = getNext()
    dev_li[2].querySelector("span").textContent = getNext()

    dev_li[3].querySelector("b").textContent = getNext()
    dev_li[3].querySelector("span").textContent = getNext()

    dev_li[4].querySelector("span").textContent = getNext()
    dev_li[5].querySelector("span").textContent = getNext()
    dev_li[6].querySelector("span").textContent = getNext()

    dev_li[7].querySelector("b").textContent = getNext()
    dev_li[7].querySelector("span").textContent = getNext()

    des_h3.textContent = getNext()
    des_li[0].querySelector("span").textContent = getNext()
    des_li[1].querySelector("span").textContent = getNext()
    des_li[2].querySelector("span").textContent = getNext()
    des_li[3].querySelector("span").textContent = getNext()

    oth_h3.textContent = getNext()
    oth_li.innerHTML = getNext()

    opn_h2.textContent = getNext()
    opn_li[0].querySelector("h3").textContent = getNext()
    opn_li[0].querySelectorAll("p")[0].textContent = getNext()
    opn_li[0].querySelector("blockquote").textContent = getNext()
    opn_li[0].querySelectorAll("p")[1].textContent = getNext()
    opn_li[1].querySelector("p").textContent = getNext()
    opn_li[2].querySelector("h3").textContent = getNext()
    opn_li[2].querySelector("p").textContent = getNext()
    opn_li[3].querySelector("h3").textContent = getNext()
    opn_li[3].querySelector("p").textContent = getNext()

    form_h2.textContent = getNext()
    form_la[0].textContent = getNext()
    form_la[1].textContent = getNext()
    form_submit.value = getNext()
    $("#sender-name").setAttribute("placeholder", getNext())
    $("#sender-email").setAttribute("placeholder", getNext())

    thanks.textContent = getNext()

    window.addEventListener("scroll", () => cleanStyles(all), { once: true })
    changeOpacity(all, 1)
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
    form_h2,
    form_la,
    form_in,
    form_submit,
    thanks
  )

  // add handler to only one element to avoid handling it many times
  all[0].addEventListener("transitionend", changeToEnglish, { once: true })

  runTask_ObjectOrList(all, a => {
    a.style.transition = `opacity ${transitionStandard}`
    a.style.opacity = 0
  })
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
    pro.innerHTML = `Olá!<br>Eu trabalho construindo sites e eu adoro.
    O que me motiva é a utilidade do meu trabalho para as pessoas e meu apetite por tecnologia.
    Pode olhar e brincar com as minhas coisas.`
    window.addEventListener("scroll", () => cleanStyles(pro), { once: true })
    pro.style.opacity = 1
  }

  pro.addEventListener("transitionend", changeToPortuguese, { once: true })
  pro.style.transition = `opacity ${transitionStandard}`
  pro.style.opacity = 0
}
