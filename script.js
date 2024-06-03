let startTime, updatedTime, difference, timerInterval;
let running = false;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function resetTimer() {
    clearInterval(timerInterval);
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
    running = false;
    difference = 0;
}

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        timerInterval = setInterval(updateDisplay, 1000 / 60);
        startStopBtn.textContent = 'Stop';
        running = true;
    } else {
        clearInterval(timerInterval);
        startStopBtn.textContent = 'Start';
        running = false;
    }
}

function updateDisplay() {
    updatedTime = new Date().getTime();
    difference = (updatedTime - startTime);

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    display.textContent = 
        (hours < 10 ? "0" + hours : hours) + ":" + 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);
}

startStopBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
