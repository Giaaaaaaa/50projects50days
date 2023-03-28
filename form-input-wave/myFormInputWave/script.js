const labels = document.querySelectorAll("label")

labels.forEach((label) =>{
    label.innerHTML = label.innerHTML
    .split('')
    .map((letter,index) => {
        console.log(letter + ' '+ index);
        return `<span style="transition-delay:${index*0.1}s">${letter}</span>`
    }).join('')
    // .map((letter,index) =>{
    //     `<span style="transition-delay:${index*0.5}s">${letter}</span>`
    // })
    // .join('')
})