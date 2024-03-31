let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let lapCount = 0;
let interval;

// Function to update the display with the current time
function updateDisplay() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    document.getElementById("display").innerText = formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatTime(milliseconds);
}

// Function to start or stop the stopwatch
function startStop() {
    let startStopButton = document.getElementById("startStop");
    if (startStopButton.innerText === "Start") {
        interval = setInterval(updateDisplay, 10);
        startStopButton.innerText = "Stop";
    } else {
        clearInterval(interval);
        startStopButton.innerText = "Start";
    }
}

// Function to record lap time
function recordLap() {
    let lapList = document.getElementById("lapList");
    let lapTime = document.createElement("li");
    lapCount++;
    lapTime.innerText = "Lap " + lapCount + ": " + document.getElementById("display").innerText;
    lapList.appendChild(lapTime);
}

// Function to reset the stopwatch
function reset() {
    clearInterval(interval);
    document.getElementById("display").innerText = "00:00:00";
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    lapCount = 0;
    document.getElementById("startStop").innerText = "Start";
    document.getElementById("lapList").innerHTML = "";
}

// Function to format time values to two digits
function formatTime(time) {
    return (time < 10 ? "0" : "") + time;
}
