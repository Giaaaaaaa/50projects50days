const boxes = document.querySelectorAll('.box')

// 回调函数不加括号
window.addEventListener('scroll', scrollAnimate)
window.addEventListener('resize',scrollAnimate)
// 在这里调用回调函数，加括号
scrollAnimate()


// 定义回调函数
function scrollAnimate() {
    // innerHeight 只读属性，获取视口高度，对应的还有 window.innerWidth
    const triggerTop = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        // getBoundingClientRect()返回一组只读属性，相对于视图窗口的左上角来计算。left, top, right, bottom, x, y, width, height
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerTop) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}


// console.log('linked');