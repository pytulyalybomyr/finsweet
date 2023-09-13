const box = document.querySelectorAll(".portfolio-card");

document.querySelector(".nav-port").addEventListener("click", event => {
    if (event.target.tagName !== "LI") return false;

    const Filter = event.target.dataset['f'];
    console.log(Filter)

    box.forEach(elem => {
        
        elem.classList.remove("hide")
        // elem.firstChild.classList.remove("hide")
        if (!elem.classList.contains(Filter) && Filter != 'all') {
            elem.classList.add("hide")
            // elem.firstChild.classList.add("hide")
        }
    });
})
