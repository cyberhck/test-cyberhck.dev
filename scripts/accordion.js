const clickHandler = (event) => {
    const element = event.target.parentElement.parentElement.parentElement.querySelector("div.answer")
    document.querySelectorAll("div.answer").forEach(x => {
        if (x === element) {
            return;
        }
        x.classList.add("d-none")
    })
    element.classList.toggle("d-none")
}

window.addEventListener("load", () => {
    document.querySelectorAll("div.question").forEach((answer) => {
        answer.addEventListener("click", clickHandler)
    })
})
