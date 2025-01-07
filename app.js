// VARIABLES
const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const btnReset = document.getElementById('reset');
let timer = document.getElementById('stopwatch');
let hours, minutes, seconds, miliseconds;
hours = minutes = seconds = miliseconds = 0;

btnStart.onclick = startTimer;
btnReset.onclick = resetTimer;
btnStop.onclick = stopTimer;
let power = false;

// FUNCTIONS
function getTimeString(hour, minutes, seconds, miliseconds) {
    let firstPart = [String(hour).padStart(2, '0'), String(minutes).padStart(2, '0'), String(seconds).padStart(2, '0')].join(":");
    let secondPart = String(miliseconds).slice(0,2).padStart(2, '0');
    return ([firstPart, secondPart].join('.'));
}

function startTimer() {
    btnStop.classList.remove('active');
    btnStart.classList.add('active');
    power = true;
}

function stopTimer() {
    btnStart.classList.remove('active');
    btnStop.classList.add('active');
    power = false;
}

function resetTimer() {
    hours = minutes = seconds = miliseconds = 0;
    timer.textContent = getTimeString(hours, minutes, seconds, miliseconds);
    btnStart.classList.remove('active');
    btnStop.classList.add('active');
    power = false;
}

function timerFunc() {
    if (power === true) {
        miliseconds += 10
        if (miliseconds === 1000) {
            miliseconds = 0;
            seconds += 1;
        }
        
        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
        }
        if (minutes === 60) {
            minutes = 0;
            hours += 1;
        }
    
        timer.textContent = getTimeString(hours, minutes, seconds, miliseconds);
    }
}


// TICK THE CLOCK
setInterval(timerFunc, 10);
