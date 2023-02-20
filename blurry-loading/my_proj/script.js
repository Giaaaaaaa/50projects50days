const loading = document.querySelector('.loading')
const bg = document.querySelector('.bg')
let num = 0

let timer = setInterval(callback, 30)

function callback() {
    loading.innerText = `${num}%`
    loading.style.opacity = `${100 - num}%`
    bg.style.filter = `blur(${(100 - num) / 10}px)`
    // loading.style.opacity = scale(num, 0, 100, 1, 0)
    // bg.style.filter = `blur(${scale(num, 0, 100, 30, 0)}px)`
    num++
    if (num === 96) {
        clearInterval(timer)
        loading.style.opacity = `0%`
    }
}

// const scale = (num, in_min, in_max, out_min, out_max) => {
//     return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
// }