const PEOPLE = {
  "Cali Goodie": {
    desc: "Cali really enjoys theater, she has loved acting since she was little. She loved to be in the spotlight and where all her friends were. From the time she turned 10 she has been acting in as many plays as she could, but overall this one is her favorite one. She gets to be over-dramatic (her specialty) and make people laugh. Nothing could be better!",
    image: "assets/no-image-found.png",
    role: "Katie"
  },
  "Garrett Brown": {
    desc: "No Description Yet!",
    image: "assets/no-image-found.png",
    role: "Billy, Charlie"
  },

  "Alexis Warmington": {
    desc: "No Description Yet!",
    image: "assets/no-image-found.png",
    role: "Eve"
  },
  "Oliver Warmington": {
    desc: "No Description Yet!",
    image: "assets/no-image-found.png",
    role: "Teddy, Tony"
  },
  "Ingrid James": {
    desc: "Ingrid is excited to be back on stage! She made her debut as Dorothy in The Wizard of Oz and loves twirling, dancing, and trying out new roles. When she’s not performing, you can find her perfecting her dance moves or dreaming up her next big adventure. Ingrid can’t wait to share the magic of theatre with everyone!",
    image: "assets/Ingrid-James.jpeg",
    role: "Tina, Abbey"
  },
  "Sophie Vandermeulen": {
    desc: "Sophie has always enjoyed acting! Even though she hates reading and memorizing things (stupid ADHD), she has a very bright and positive attitude towards her acting! She thinks that a Minecraft YouTuber (GoodTimesWithScar) says it best, “With the power of Dyslexia, I can do it!”",
    image: "assets/Sophie-Vandermeulen.jpeg",
    role: "Betty, Elijah"
  },
  "Rocio Dean": {
    desc: "Rocio Dean has always loved theater. She has been in 5 shows (this will be her 6th). She is so grateful for all the support her family and friends have given her.",
    image: "assets/Rocio-Dean.png",
    role: "Carol, Mandy"
  },
  "Declan Weis": {
    desc: "No Description Yet!",
    image: "assets/no-image-found.png",
    role: "Manager"
  },

  "Salem Scherer": {
    desc: "No Description Yet!",
    image: "assets/no-image-found.png",
    role: "Stage Manager, Ug"
  },

  "Penelope Glassman": {
    desc: "No Description Yet!",
    image: "assets/no-image-found.png",
    role: "Rah, Jessica"
  },

  "Michael Epounde": {
    desc: "No Description Yet!",
    image: "assets/no-image-found.png",
    role: "Stuffed Animal"
  },
  "Joanna Mercado": {
    desc: `Eat\n
Phone\n
Sleep\n
Act\n
Dance\n
Repeat\n
She's been doing that since 2022
`,
    image: "assets/Joanna-Mercado.jpeg",
    role: "Shelly"
  },
  "Jackson Vandermeulen": {
    desc: "No Description Yet!",
    image: "assets/no-image-found.png",
    role: "Abraham Lincoln, Chesterfield"
  },
  "Drik Banerjee": {
    desc: "Drik Banerjee is a coder, violin player, and—very recently—an actor!",
    image: "assets/Drik-Banerjee.jpeg",
    role: "Adam"
  },
  "Sofia Tijerina": {
    desc: "No Description Yet!",
    image: "assets/no-image-found.png",
    role: "Friend"
  },
  "Rose Bielakowski": {
    desc: "Rose is fairly new to theatre but is enjoying her experience... so far. This is her first performance, and she is very excited!",
    image: "assets/Rose-Bielakowski.jpg",
    role: "Alarmist Girl",
  },
  "Maxwell Lindsey": {
    desc: "Maxwell may be scatterbrained, overenthusiastic, and a little bit of a diva… He loved every second of the journey and he hopes you love every second of this production!!",
    image: "assets/Maxwell-Lindsey.JPG",
    role: "Director, Tyler"
  },
  "Megatron Aziz": {
    desc: "Megatron has been in iSchool's drama club for four years now, and despite having no experience before it, has found a place within the crew and (to Megatron's surprise) the cast. Megatron has found joy in the process of being a part of these productions, and cherishes everyone met along the way.",
    image: "assets/Zainab-Aziz.jpeg",
    role: "Evil Advisor (Administrator), Julie",
  },
  "Caroline Lindell": {
    desc: "No Description Yet!",
    image: "assets/no-image-found.png",
    role: "Guy"
  },
  "Connor Lindsey": {
    desc: "Connor Lindsey is the lighting director and designer for the play, he will be changing the lights during the play behind the scenes. Don't trust Remy.",
    image: "assets/Connor-Lindsey.png",
    role: "Lights",
  },
  "Jaden Macias": {
    desc: "No Description Yet!",
    image: "assets/no-image-found.png",
    role: "crew"
  },

  "Aalimah Hayes": {
    desc: "No Description Yet!",
    image: "assets/no-image-found.png",
    role: "crew"
  },

  "Grace Hameso": {
    desc: "No Description Yet!",
    image: "assets/no-image-found.png",
    role: "crew"
  },

  "Geniveve Dykes": {
    desc: "No Description Yet!",
    image: "assets/no-image-found.png",
    role: "crew"
  },

  "Madlaine Gonzalez": {
    desc: "No Description Yet!",
    image: "assets/no-image-found.png",
    role: "crew"
  },
  "Remy Tobias": {
    desc: "Remy has very little knowledge on how anything in theater works but he likes to go along for the ride. Unfortunately, he wasn't able to help much this year due to schedule conflicts, but on Connor's life he WILL be so much help next year trust me on this.",
    image: "assets/Remy-Tobias.jpg",
    role: "Run",
  },
  "Isabelle Porter": {
    desc: "Isabelle is a Freshman at iSchool, and about 1/4 of a theater kid. She has loved supporting the cast and crew this year as well as helping out with costumes, and when she's not at theatre club or in college, she can be found in livestock barns across the state of Texas! She would like to thank Mrs. Lindell for being an amazing director and Caroline Lindell for roping her into this and for all the memories they have created along the way!",
    image: "assets/Isabelle-Porter.png",
    role: "Misc.",
  },
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