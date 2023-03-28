const labels = document.querySelectorAll(".form-control label")

labels.forEach(label=>{
    label.innerHTML = label.innerHTML
    .split('')
    .map((letter,index)=>{
        return `<span style="transition-delay:${index*0.1}s">${letter}</span>`
    })
    .join('')
})