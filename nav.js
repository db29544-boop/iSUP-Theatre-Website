const menuButton = document.querySelector("svg")
const sidebar = document.querySelector(".sidebar")
const closeButton = document.querySelector(".close-button")
const body = document.querySelector("body")

let toggle = false

menuButton.addEventListener("click", () => {
  sidebar.style.display = "flex"
  body.style.overflow = "hidden"
})

closeButton.addEventListener("click", () => {
  sidebar.style.display = "none";
  body.style.overflow = "visible"
})
