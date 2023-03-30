const jokeBtn = document.querySelector(".btn")
const jokeEl = document.querySelector(".joke")


// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.co', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//       console.log(data);
//     })
//     .catch(err=>{
//         jokeEl.innerHTML = 'no more jokes'
//         console.warn(err);
//     })
// }


async function generateJoke(){
    const config = {
        headers: {
            Accept:'application/json',
        },
    }
    const res = await fetch("https://icanhazdadjoke.com",config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke
}
generateJoke()
jokeBtn.addEventListener("click", generateJoke)
