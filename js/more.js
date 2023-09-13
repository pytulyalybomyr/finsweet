const more = document.querySelector(".more-button")
const container = document.querySelector(".more")

more.addEventListener("click", function() {
    more.style.display = "none"
    container.style.display = "flex"
})