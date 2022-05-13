const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobileMenu');
const buttons = document.querySelectorAll("[data-carousel-button]")
const rocket = document.querySelector(".rocket")
const moon = document.querySelector(".moon")
const tree = document.querySelector(".tree")


hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
})


document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
})


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        console.log(offset)
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")
        console.log(slides)

        const activeSlide = slides.querySelector("[data-active]")
        console.log(activeSlide)
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        console.log([...slides.children].indexOf(activeSlide))
        console.log([...slides.children])
        console.log(newIndex)
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

rocket.addEventListener('mouseover', function () {
    this.classList.add('is-hover');
});

rocket.addEventListener('mouseleave', function () {
    this.classList.remove('is-hover');
});

moon.addEventListener('mouseover', function () {
    this.classList.add('is-hover');
});

moon.addEventListener('mouseleave', function () {
    this.classList.remove('is-hover');
});

tree.addEventListener('mouseover', function () {
    this.classList.add('is-hover');
});

tree.addEventListener('mouseleave', function () {
    this.classList.remove('is-hover');
});