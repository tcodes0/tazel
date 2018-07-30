const ThisPageIsNot = name => document.title !== name;
const ThisPageIs = name => document.title === name;
const articles = "Thomazella's articles";
const projects = "Thomazella's projects";
export const $ = q => document.querySelector(q);
export const $$ = q => document.querySelectorAll(q);
const transitionStandard = "1.15s ease-out";
const transitionSmooth = "2.15s ease-in-out";
const floatArticleEvent = new Event("floatarticle", { bubbles: true });
const resizers = [];
let onLoaders = [];
const floaters = [];

const runTask = (thing, fn) => {
  if (thing.forEach) thing.forEach(obj => runTask(obj, fn));
  fn(thing);
};

const cleanStyles = obj => runTask(obj, o => o.removeAttribute("style"));

const changeOpacity = (obj, value) =>
  runTask(obj, o => (o.style.opacity = value));

const findALinkParent = x =>
  x.nodeName === "A" ? x : findALinkParent(x.parentNode);

// const previewArticlesAddClickHandler = () => {
//   const handler = e => {
//     e.preventDefault();
//     if ($(".added-by-js")) {
//     } else {
//       floatingArticle_Inserter(e);
//       previewArticlesLinkDisabler();
//     }
//   };
//   const hooker = query => {
//     [...$$(query)]
//       .filter(link => !link.classList.contains("other-site"))
//       .forEach(link => {
//         // console.log(link);
//         link.addEventListener("click", handler);
//       });
//   };
//   if (ThisPageIs(articles)) {
//     hooker(".read-preview a");
//   }
//   if (ThisPageIs(projects)) {
//     hooker(".project-preview a");
//   }
// };

export const addFloatingHandlerToLink = selector => {
  const handler = e => {
    if (!$(".added-by-js")) {
      e.preventDefault();
      floatingArticle_Inserter(e);
      previewArticlesLinkDisabler();
    }
  };

  [...$$(selector)]
    .filter(link => !link.classList.contains("other-site"))
    .forEach(link => link.addEventListener("click", handler));
  // hooker(".read-preview a");
  // hooker(".project-preview a");
};

const previewArticlesLinkDisabler = () => {
  const hooker = query => {
    [...$$(query)]
      .filter(link => !link.classList.contains("other-site"))
      .forEach(link => {
        link.classList.add("disabled");
      });
  };
  if (ThisPageIs(articles)) {
    hooker(".read-preview a");
  }
  if (ThisPageIs(projects)) {
    hooker(".project-preview a");
  }
};

const floatingArticle_Inserter = e => {
  // if the hashChecker() called this, e will be a string
  const triggeredByClick = typeof e === "object";
  // get the link that was clicked or URL hash navigated to and figure what article to show
  const targetHash = triggeredByClick
    ? findALinkParent(e.target).attributes.href.value
    : e;
  const el = $(targetHash);
  // see BUG below
  const tail = document.createElement("div");
  const m = document.querySelector("#root");

  const headPrepender = e => {
    const head = document.createElement("div");
    head.classList.add("empty-transparency");
    head.style.height = `${el.dataset.top}px`;
    head.style.top = `${-1 * Number.parseInt(el.dataset.top)}px`;
    el.prepend(head);
    head.addEventListener("click", floatingArticle_Destroyer, { once: true });
    head.addEventListener("touchend", floatingArticle_Destroyer, {
      once: true
    });
  };
  const tailAppender = e => {
    el.appendChild(tail);
    tail.classList.add("empty-transparency");
    tail.style.top = `${el.offsetHeight}px`;
    tail.addEventListener("click", floatingArticle_Destroyer, { once: true });
    tail.addEventListener("touchend", floatingArticle_Destroyer, {
      once: true
    });
  };
  const unsetProgressCursor = () => {
    document.body.style.cursor = "auto";
  };
  // setting this too early causes scroll that interferes with the floating transition
  const setURLHash = () =>
    window.location.hash !== targetHash
      ? (window.location.hash = targetHash)
      : undefined;

  // set cursor for feedback something is gonna happen
  document.body.style.cursor = "progress";

  el.classList.add("added-by-js");
  // in case of a direct navigation to the article, no transition
  el.style.transition = triggeredByClick ? `transform ${transitionSmooth}` : "";
  // move article underneath viewport
  el.style.top = `${window.innerHeight + window.scrollY}px`;
  el.classList.remove("hide");
  // hide nonsensical link if js works
  el.querySelector('.container-backlinks a.back[href="#header"]').classList.add(
    "hide"
  );

  // BUG: Safari needs this line outside 'load' handler below
  tail.style.top = `${el.offsetHeight}px`;

  // article specific functions listen to this
  el.dispatchEvent(floatArticleEvent);

  // the point where the article begins
  el.setAttribute("data-top", window.scrollY);
  // trigger to bring article up
  el.style.transform = `translateY(-${window.innerHeight}px)`;
  // .main scrolls away with the article and the body's bg color looks like a glitch
  document.body.style.backgroundColor = getComputedStyle(m).backgroundColor;

  if (document.readyState == "complete") {
    tailAppender();
  } else {
    // if done earlier it will have wrong height
    window.addEventListener("load", tailAppender, { once: true });
  }

  if (triggeredByClick) {
    // will run after transition and wrap it up
    el.addEventListener("transitionend", positionFixed_Apply, { once: true });
    el.addEventListener("transitionend", headPrepender, { once: true });
    el.addEventListener("transitionend", unsetProgressCursor, { once: true });
    el.addEventListener("transitionend", setURLHash, { once: true });
  } else {
    // no transiton, no problem
    positionFixed_Apply();
    headPrepender();
    unsetProgressCursor();
    setURLHash();
  }

  // events to close the floating article
  el.querySelector("a.close").addEventListener(
    "click",
    floatingArticle_Destroyer,
    { once: true }
  );
  el.querySelector("a.close").addEventListener(
    "touchend",
    floatingArticle_Destroyer,
    { once: true }
  );
  // window.addEventListener('wheel', scrollHandler, {passive: true})
  // window.addEventListener('touchstart', scrollHandler, {passive: true})
  window.addEventListener("scroll", scrollHandler, { passive: true });
  window.addEventListener("keydown", keyHandler);
  // IDEA: scroll bar is taking 15px on the right making the page move when article shows up
};

const positionFixed_Apply = e => {
  const mchildren = [...m.children].filter(
    child =>
      child.attributes.id.value !== "reads" &&
      child.attributes.id.value !== "projects"
  );
  const el = $(".added-by-js");
  // rev to start from bottom, bc elements tend to collapse upwards
  mchildren.reverse();
  mchildren.forEach(child => {
    child.style.top = `${child.offsetTop - Number.parseInt(el.dataset.top)}px`;
    child.style.position = "fixed";
  });
};

const positionFixed_Remove = () => {
  [...m.children].forEach(child => child.removeAttribute("style"));
  resizers.forEach(resizer => resizer());
};

const floatingArticle_Destroyer = () => {
  // avoids a flick caused by smooth scrolling when article is destroyed
  const avoidScrollBehaviorSmooth = () => {
    const sb = getComputedStyle(document.body).scrollBehavior;

    if (!sb) return;

    if (sb !== "auto") {
      document.body.style.scrollBehavior = "auto";
    }
  };
  const el = $(".added-by-js");

  el.style.transition = `opacity ${transitionStandard}`;
  changeOpacity(el, 0);

  el.addEventListener(
    "transitionend",
    e => {
      el.classList.remove("added-by-js");
      el.classList.add("hide");
      el.removeAttribute("style");
      $$(".empty-transparency").forEach(transp => el.removeChild(transp));
      previewArticlesLinkEnabler();
      avoidScrollBehaviorSmooth();
      positionFixed_Remove();
      // avoid flicks by cancelling some scrolling
      window.scroll(0, Number.parseInt(el.dataset.top));
      // cleanup js css
      document.body.removeAttribute("style");
    },
    { once: true }
  );

  window.removeEventListener("wheel", scrollHandler);
  window.removeEventListener("touchmove", scrollHandler);
  window.removeEventListener("keydown", keyHandler);
};

const scrollHandler = e => {
  if (e.deltaY < 0) {
    return;
  }
  const el = $(".added-by-js");
  if (
    window.scrollY >=
    el.offsetHeight + Number.parseInt(el.dataset.top) - 120
  ) {
    floatingArticle_Destroyer();
  }
};

const keyHandler = e => {
  // console.log(`${e.code} - ${e.keyCode}`);
  if (
    e.keyCode !== 32 && // space
    // e.keyCode !== 33 && //pgup
    e.keyCode !== 34 && // pgdown
    // e.keyCode !== 38 && //uparrow
    e.keyCode !== 27 && // esc
    e.keyCode !== 40
  ) {
    // downarrow
    return;
  }
  e.keyCode === 27 ? floatingArticle_Destroyer() : scrollHandler(e);
};

const previewArticlesLinkEnabler = () => {
  const hooker = query => {
    [...$$(query)]
      .filter(link => !link.classList.contains("other-site"))
      .forEach(link => {
        link.classList.remove("disabled");
      });
  };
  if (ThisPageIs(articles)) {
    hooker(".read-preview a");
  }
  if (ThisPageIs(projects)) {
    hooker(".project-preview a");
  }
};

const backToTop_LinkReplacer = () => {
  if (ThisPageIsNot(articles) && ThisPageIsNot(projects)) {
    return;
  }
  const xl = "xlink:href";
  const source = $('a.close[href="#header"]');
  const clone = $('.container-backlinks a.back[href="index.html"]').cloneNode(
    true
  );
  clone.querySelector("span").textContent = "Close this";
  clone.attributes.href.value = source.attributes.href.value;
  clone.querySelector("svg > *").attributes[xl].value = source.querySelector(
    "svg > *"
  ).attributes[xl].value;
  clone.querySelector("svg > *").attributes.src.value = source.querySelector(
    "svg > *"
  ).attributes.src.value;
  clone.addEventListener("click", floatingArticle_Destroyer, { once: true });
  clone.addEventListener("touchstart", floatingArticle_Destroyer, {
    once: true
  });
  $('.container-backlinks a.back[href="#header"]').classList.add("hide");
  $(".container-backlinks").prepend(clone);
};

export const hideSelector = selector =>
  $$(selector).forEach(s => s.classList.add("hide"));

const projectsFloatEventHooker = () => {
  if (ThisPageIs(projects)) {
    document.body.addEventListener("floatarticle", e =>
      floaters.forEach(floater => floater(e))
    );
  }
};
onLoaders = [projectsFloatEventHooker, ...onLoaders];

export default onLoaders;
