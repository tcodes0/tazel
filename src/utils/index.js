export const $ = q => document.querySelector(q);
export const $$ = q => document.querySelectorAll(q);
export const hideSelector = selector =>
  $$(selector).forEach(s => s.classList.add("hide"));
