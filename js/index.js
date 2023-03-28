import resetControls from "./controls"
import Timer from "./timer.js"


const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonPause = document.querySelector('.pause')
const buttonSoundOn = document.querySelector('.soundon')
const buttonSoundOff = document.querySelector('.soundoff')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeout

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeout,
    resetControls,
})

buttonPlay.addEventListener('click', function () {
    buttonPlay.classList.add("hide")
    buttonPause.classList.remove("hide")
    buttonSet.classList.add("hide")
    buttonStop.classList.remove("hide")

    timer.countdown()
})

buttonPause.addEventListener('click', function(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    clearTimeout(timerTimeout)

})

buttonStop.addEventListener('click', function(){
    resetControls()
    timer.resetTimer()
})

buttonSoundOff.addEventListener('click', function(){
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
})
buttonSoundOn.addEventListener('click', function(){
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})

buttonSet.addEventListener('click', function(){
    minutes = prompt('Quantos minutos?') 
    if (!minutes){
        resetTimer()
        return
    }
    updateTimerDisplay(minutes, 0)
})

