const labels = document.querySelectorAll(".form-control label")

labels.forEach((label) => {
    label.innerHTML = label.innerHTML
        .split('')
        .map((letter, index) => {
            return `<span style="transition-delay:${index * 0.1}s">${letter}</span>`
        }).join('')
})

const inputs = document.querySelectorAll("input")
inputs.forEach((input) => {
    input.addEventListener("change", () => {
        if (input.value !== "") {
            console.log(input.nextElementSibling);
            input.nextElementSibling.classList.add("stay-up")
        } else {
            input.nextElementSibling.classList.remove("stay-up")
        }
    })
})