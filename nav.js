const menuButton = document.querySelector("svg")
const sidebar = document.querySelector(".sidebar")
const closeButton = document.querySelector(".close-button")

let toggle = false

menuButton.addEventListener("click", () => {
  sidebar.style.display = "flex"
})

closeButton.addEventListener("click", () => {
  sidebar.style.display = "none";
})
