const btnPlay = document.querySelector('#play')
const btnStop = document.querySelector('#stop')
const btnIncreaseTime = document.querySelector('#increaseTime')
const btnDecreaseTime = document.querySelector('#decreaseTime')

const soundClick = new Audio('./sounds/mouseClick.mp3')
const stopSound = new Audio('./sounds/stop.mp3')

const timer = {
    minutes: document.querySelector('#minutes'),
    seconds: document.querySelector('#seconds')
}

let clock = document.querySelector('#timer')

let timerMinutes = 25

let interval
let startPlay = false

function clickPlusButton() {
    soundClick.play()
    timerMinutes += 5
    timer["minutes"].textContent = timerMinutes
}

function clickLessButton() {
    soundClick.play()
    if (timerMinutes > 5) {
        timerMinutes -= 5
        timer["minutes"].textContent = timerMinutes
    } else {
        alert("O tempo não deve ser menor ou igual a zero!")
    }       
}

function clickPlay() {

    if(startPlay === false) {
        soundClick.play()
        startPlay = true
        let duration = timerMinutes * 60
        interval = setInterval(() => {
            duration -= 1
            timer["minutes"].textContent = Math.floor(duration / 60)
            timer["seconds"].textContent = Math.floor(duration % 60)
            
            timer["minutes"].textContent = timer["minutes"].textContent < 10 ? '0' + timer["minutes"].textContent : timer["minutes"].textContent
            timer["seconds"].textContent = timer["seconds"].textContent < 10 ? '0' + timer["seconds"].textContent : timer["seconds"].textContent

            if(duration < 0) {
                clock.innerHTML = "O Tempo Acabou!"
                clock.style.fontSize = "6rem"
                clock.style.color = "#02799D"
                clearInterval(interval) 
            }
        }, 1000)
    } else {
        stopSound.play()
    } 
}

function clickStop() {
    soundClick.play()
    if (startPlay === true){
        startPlay = false
        clearInterval(interval)
        timer["minutes"].textContent = timerMinutes
        timer["seconds"].textContent = '00'
    } else {
        stopSound.play()
    }
    
}