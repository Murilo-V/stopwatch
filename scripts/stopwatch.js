const btnStartStop = document.querySelector('#stopwatch-start-stop');
const btnReset = document.querySelector('#stopwatch-reset');
const stopWatch = document.getElementById('stopwatch');

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

btnStartStop.onclick = () => {
    if (btnStartStop.innerHTML === 'start') {
        btnStartStop.innerHTML = 'stop';
        btnStartStop.style.backgroundColor = 'red';
        btnStartStop.style.color = '#fff';
        startTimer();
    } else {
        btnStartStop.innerHTML = 'start';
        btnStartStop.style.backgroundColor = '#0BD428';
        btnStartStop.style.color = '#014AF5';
        stopTimer();
    }
}

btnReset.onclick = () => {
    resetTimer();
}

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    stopWatch.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    stopWatch.innerHTML = '00:00:00';
    hr = 0;
    min = 0;
    sec = 0;
}