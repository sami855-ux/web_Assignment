//https://github.com/sami855-ux/web_Assignment.git

const sections = document.querySelectorAll(".sectionname")
const sumbit = document.querySelector(".sumbit")
const fname = document.querySelector(".fname")
const Lname = document.querySelector(".Lname")
const textarea = document.querySelector(".textarea")
const body = document.body
const darkLight = document.querySelector(".dark")
const header = document.querySelector("header")
const aText = document.querySelectorAll("header ul li a")
const home = document.querySelector(".home")
const wrapText = document.querySelector(".wrap-text")
const about = document.querySelector(".about")
const hobbies = document.querySelector(".hobbies")
const item = document.querySelectorAll(".item")
const gallery = document.querySelector(".gallery")
const contact = document.querySelector(".contact")

const revealSection = function (enteries, observer) {
  const [entry] = enteries

  if (!entry.isIntersecting) return
  entry.target.classList.remove("section-hidden")
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
})
sections.forEach((section) => {
  sectionObserver.observe(section)
})

//Dark - light  Theme
darkLight.addEventListener("click", function (e) {
  e.preventDefault()
  header.classList.toggle("balck")
  home.classList.toggle("balck")
  wrapText.classList.toggle("balck")
  about.classList.toggle("balck")
  hobbies.classList.toggle("balck")
  gallery.classList.toggle("balck")
  contact.classList.toggle("balck")
  item.forEach((it) => {
    it.classList.toggle("balck")
  })

  aText.forEach((tex) => {
    tex.classList.toggle("text")
  })
})
