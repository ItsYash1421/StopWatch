let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;
let lapCounter = 0;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 1000);
    isRunning = true;
    document.getElementById("startStopBtn").innerText = "Stop";
}

function stop() {
    clearInterval(timerInterval);
    isRunning = false;
    document.getElementById("startStopBtn").innerText = "Start";
}

function pause() {
    if (isRunning) {
        stop();
    }
}

function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    isRunning = false;
    document.getElementById("startStopBtn").innerText = "Start";
    document.getElementById("laps").innerHTML = "";
    lapCounter = 0;
}

function lap() {
    if (isRunning) {
        lapCounter++;
        const lapTime = timeToString(elapsedTime);
        const lapElement = document.createElement("div");
        lapElement.className = "lap";
        lapElement.innerText = `Lap ${lapCounter}: ${lapTime}`;
        document.getElementById("laps").appendChild(lapElement);
    }
}

document.getElementById("startStopBtn").addEventListener("click", function() {
    if (isRunning) {
        stop();
    } else {
        start();
    }
});

document.getElementById("pauseBtn").addEventListener("click", pause);
document.getElementById("resetBtn").addEventListener("click", reset);
document.getElementById("lapBtn").addEventListener("click", lap);
