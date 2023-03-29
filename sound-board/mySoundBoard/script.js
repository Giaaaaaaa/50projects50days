const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const buttons = document.getElementById("buttons")
    const btn = document.createElement("button")
    btn.classList.add("btn")
    buttons.appendChild(btn)
    btn.innerHTML = sound

    btn.addEventListener("click", () => {
        stopSounds()
        document.getElementById(sound).play()
    })
})

document.addEventListener("keydown", (e) => {
    const keys = ['a', 'b', 'g', 't', 'v', 'w']
    const key = e.key;
    const idx = keys.indexOf(key)
    stopSounds()
    document.getElementById(sounds[idx]).play()
})

function stopSounds(){
    const audios = document.querySelectorAll("audio")
    audios.forEach((audio) => {
        audio.pause()
        // 让这个audio再次播放时从头开始播放
        audio.currentTime = 0
    })
}