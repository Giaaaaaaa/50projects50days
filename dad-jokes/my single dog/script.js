const btn = document.querySelector(".btn")
const img = document.querySelector("img")

// function generatePic(){
//在这个project里面不需要config
//     const config = {
//         headers: {
//             Accept: "application/json"
//         }
//     }

//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then(res=>res.json())
//     .then(data=>img.src = data.message)
// }

generatePic()

btn.addEventListener("click", generatePic)

//async await

async function generatePic() {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/rando")
        if (!res.ok) throw new Error(res.statusText)
        const data = await res.json()
        img.src = data.message
    } catch (err) {
        console.warn(err);
    }
}
