/*
click next:
1. prev button activated
2. next btn inactivated when click more than 3 times
3. circle color change
4. line progress

*/


const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const steps = document.querySelectorAll(".step");
const progressLine = document.querySelector(".progress-line");
let activeIndex = 0;
let flag = 0;
// let lineWidth = `${lineIncrease}%`;
// 方法一：我的方法
// function goOn(index) {
//     const lineWidth = `${((activeIndex) / (steps.length - 1)) * 100
//         }%`;
//     progressLine.style.width = lineWidth;
//     if (activeIndex < steps.length - 1) {
//         steps[index
//         ].classList.add("active");
//     } else {
//         steps[index
//         ].classList.add("active");
//         next.classList.remove("active");
//         index = steps.length - 1
//     }
// }

// function goBack(index) {
//     steps[index + 1
//     ].classList.remove("active");
//     const lineWidth = `${(activeIndex / (steps.length - 1)) * 100
//         }%`;
//     progressLine.style.width = lineWidth;
// }

// next.addEventListener("click", () => {
//     prev.classList.add("active");
//     flag = 1;
//     // activeIndex++;
//     // goOn(activeIndex)
//     if (activeIndex < steps.length - 1) {
//         // activeIndex++ 要放到if里面，不然每次click发生，都会加一，超过steps的长度。
//         activeIndex++;
//         goOn(activeIndex);
//         // console.log(activeIndex);
//     } else if (activeIndex >= steps.length - 1) {
//         goOn(activeIndex);
//         // next.classList.remove("active");
//     };
// });

// prev.addEventListener("click", () => {
//     next.classList.add("active");
//     if (flag) {
//         activeIndex--;
//         goBack(activeIndex);
//         if (activeIndex === 0) {
//             prev.classList.remove("active");
//             flag = 0;
//         };
//     };
// });

// 方法二：原作者方法
function update() {
    //控制圆圈
    steps.forEach((step, index) => {
        if (index <= activeIndex) {
            step.classList.add('active')
        } else {
            step.classList.remove('active')
        }
    })
    // 控制按钮
    if (activeIndex === 0) {
        prev.classList.remove("active")
    } else if (activeIndex === steps.length - 1) {
        next.classList.remove("active")
    } else {
        prev.classList.add("active")
        next.classList.add("active")
    }
    // 控制长度
    const lineWidth = `${((activeIndex) / (steps.length - 1)) * 100}%`;
    progressLine.style.width = lineWidth;
}
next.addEventListener("click", () => {
    activeIndex++
    if (activeIndex >= steps.length - 1) {
        activeIndex = steps.length - 1
    }
    update()
})
prev.addEventListener("click", () => {
    activeIndex--
    if (activeIndex <= 0) {
        activeIndex = 0
    }
    update()
})