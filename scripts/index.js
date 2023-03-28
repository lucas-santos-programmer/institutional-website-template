// Menu button type hamburguer
const hamburguerButton = document.querySelector('#hamburguer')

const slice = document.querySelectorAll(".slice")

const navMenu = document.querySelector("#nav-menu")

// event that handlers the click event of the hamburguer button
hamburguerButton.addEventListener("touchend", () => {
    slice.forEach((span, key) => {
        span.classList.toggle("active-slice"+key)
    })
    if(navMenu.classList.contains("active-menu")) {
        navMenu.classList.remove("active-menu")
        navMenu.classList.add("inactive-menu")
    }
    else if(navMenu.classList.contains("inactive-menu")){
        navMenu.classList.remove("inactive-menu")
        navMenu.classList.add("active-menu")
    }
})