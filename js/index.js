// let arts = [...document.querySelectorAll('article')]
// arts.forEach(art => art.innerText === '' ? art.classList.toString() : undefined)
// let lis = [... document.querySelectorAll('.link-container')]
// lis.forEach(li => li.style.border = '1px solid white')
const toggleGuide = () => {
  let guide = document.querySelector('.guide')
  if (guide.style.display === "") {
    guide.style.display = 'block'
  } else {
    guide.style.display = ''
  }
}
