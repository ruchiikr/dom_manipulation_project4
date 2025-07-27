// Variables for buttons
const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// Variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zeros
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for set intervals & timer status
let timerInterval = null;
let timerStatus = "stopped";

// Stop Watch Function
function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  leadingSeconds = seconds < 10 ? "0" + seconds : seconds;
  leadingMinutes = minutes < 10 ? "0" + minutes : minutes;
  leadingHours = hours < 10 ? "0" + hours : hours;

  document.getElementById('timer').innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// Start/Stop button toggle
startStopBtn.addEventListener('click', function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    startStopBtn.innerHTML = "⏸"; // Pause icon
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    startStopBtn.innerHTML = "▶"; // Play icon
    timerStatus = "stopped";
  }
});

// Reset button
resetBtn.addEventListener('click', function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;

  document.getElementById('timer').innerHTML = "00:00:00";
  startStopBtn.innerHTML = "▶"; // Reset to play icon
  timerStatus = "stopped";
});
