export function Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeout,
    resetControls
}){
        function updateTimerDisplay(minutes, seconds){
        minutesDisplay.textContent = String(minutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')
    }

    function resetTimer(){
        updateTimerDisplay(minutes, 0)
        clearTimeout(timerTimeout)
    }

    function countdown(){
        timerTimeout = setTimeout(function() {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)

            updateTimerDisplay(minutes, 0)

            if (minutes  <= 0){
                resetControls()
                return
            }
            
            if (seconds <= 0){
                seconds = 5

                --minutes
            }
                updateTimerDisplay(minutes, String(seconds -1))

            
        
            countdown()
        }, 1000)
    }
    return { countdown,
             resetTimer }
}



