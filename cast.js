const PEOPLE = {
  "Person 1": {
    desc: "sdfnskjenrv;",
    image: "assets/drama-club-900x600.png",
    role: "Adam"
  },
  "Person 2": {
    desc: "sdfnskjenrv;",
    image: "assets/drama-club-900x600.png",
    role: "Sigma"
  },
  "Person 3": {
    desc: "sdfnskjenrv;",
    image: "assets/drama-club-900x600.png",
    role: "Sigma"
  },
  "Person 4": {
    desc: "sdfnskjenrv;",
    image: "assets/drama-club-900x600.png",
    role: "Sigma"
  },
  "Person 5": {
    desc: "sdfnskjenrv;",
    image: "assets/drama-club-900x600.png",
    role: "Sigma"
  },
  "Person 6": {
    desc: "sdfnskjenrv;",
    image: "assets/drama-club-900x600.png",
    role: "Sigma"
  },
  "Person 7": {
    desc: "sdfnskjenrv;",
    image: "assets/drama-club-900x600.png",
    role: "Sigma"
  }
}

const grid = document.querySelector(".cast-grid")
const keys = Object.keys(PEOPLE)
const mobileContainer = document.querySelector(".mobile-container")

window.addEventListener("DOMContentLoaded", () => {
  for (let index = 0; index < keys.length; index++) {
    const person = keys[index];

    const cardContainer = document.createElement("div")
    cardContainer.classList.add("card-container")

    const image = document.createElement('img')
    image.classList.add("card-image")
    image.src = PEOPLE[person].image

    const cardText = document.createElement("div")
    cardText.textContent = `${person} - ${PEOPLE[person].role}`
    cardText.classList.add("card-text")
    cardText.classList.add("black-text")

    cardContainer.appendChild(image)
    cardContainer.appendChild(cardText)

    const mobileChild = document.createElement("div")
    mobileChild.textContent = `${person} - ${PEOPLE[person].role}`
    mobileChild.classList.add("mobile-child")
    mobileChild.classList.add("text")

    const detailsContainer = document.createElement("div")

    const mobileImage = document.createElement("img")
    mobileImage.classList.add("mobile-image")
    mobileImage.src = PEOPLE[person].image

    const name = document.createElement("h2")
    name.classList.add("mobile-name")
    name.classList.add("black-text")
    name.textContent = person
    const desc = document.createElement("p")
    desc.classList.add("mobile-desc")
    desc.classList.add("black-text")
    desc.textContent = PEOPLE[person].desc

    detailsContainer.appendChild(mobileImage)
    detailsContainer.appendChild(name)
    detailsContainer.appendChild(desc)
    detailsContainer.classList.add("details-container")
    detailsContainer.classList.add(person.replace(" ", "-"))

    detailsContainer.style.display = "none"



    grid.appendChild(cardContainer)
    mobileContainer.appendChild(mobileChild)
    mobileContainer.appendChild(detailsContainer)
  }

  const cards = document.querySelectorAll(".card-container")

  cards.forEach((card, i) => {
    card.addEventListener("click", () => {
      const text = card.querySelector(".card-text")
      const person = PEOPLE[text.textContent.split("-")[0].trim()]
      const overlay = document.querySelector(".modal-overlay")
      const modal = document.querySelector(".person-modal")
      const nameText = document.querySelector(".name-modal-text")
      const desc = document.querySelector(".desc-modal")
      const image = document.querySelector(".image-modal")

      modal.style.display = "block"
      overlay.style.display = "block"

      nameText.textContent = text.textContent.split("-")[0].trim()

      desc.textContent = person.desc

      image.src = person.image
    })
  })

  let toggleDict = {}

  const mobileCast = document.querySelectorAll(".mobile-child")

  mobileCast.forEach((child) => {
    const key = child.textContent
    const className = child.textContent
      .split("-")[0]
      .trim()
      .replace(" ", "-")

    child.addEventListener("click", () => {

      toggleDict[key] = !toggleDict[key]

      const personDetails = document.querySelector(`.${className}`)

      if (toggleDict[key]) {
        personDetails.style.display = "flex"
      } else {
        personDetails.style.display = "none"
      }

    })
  })

  const modalCloseButton = document.querySelector(".close-button-modal")

  modalCloseButton.addEventListener("click", () => {
    const modal = document.querySelector(".person-modal")
    const overlay = document.querySelector(".modal-overlay")

    modal.style.display = "none"
    overlay.style.display = "none"
  })
})