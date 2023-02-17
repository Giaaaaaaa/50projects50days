const input = document.querySelector(".input")
const btn = document.querySelector(".btn")
const search = document.querySelector(".search")
btn.addEventListener("click", ()=>{
    search.classList.toggle("active")
    // The HTMLElement.focus() method sets focus on the specified element
    input.focus()
})