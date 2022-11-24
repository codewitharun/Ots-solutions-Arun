let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("#span");
let resetBtn = document.getElementById("reset");

let minute = 00;
let second = 00;
let count = 00;

startBtn.addEventListener("click", Start);
resetBtn.addEventListener("click", Reset);
function Start() {
  timer = true;
  console.log("Started");
  startBtn.removeEventListener("click", Start);
  startBtn.addEventListener("click", Stop);
  document.getElementById("span").innerHTML = "Stop";
  stopWatch();
}

function Stop() {
  timer = false;
  console.log("Stopped");
  startBtn.removeEventListener("click", Stop);
  startBtn.addEventListener("click", Start);
  document.getElementById("span").innerHTML = "Start";
}
function Reset() {
  timer = false;
  document.getElementById("span").innerHTML = "Start";
  startBtn.removeEventListener("click", Stop);
  startBtn.addEventListener("click", Start);
  //   hour = 0;
  minute = 0;
  second = 0;
  count = 0;

  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
  console.log("Reset call");
}

function stopWatch() {
  if (timer) {
    count++;

    if (count == 100) {
      second++;
      count = 0;
    }

    if (second == 60) {
      minute++;

      second = 0;
    }

    if (minute == 60) {
      Reset();
    }

    let minString = minute;
    let secString = second;
    let countString = count;

    if (minute < 10) {
      minString = "0" + minString;
    }

    if (second < 10) {
      secString = "0" + secString;
    }

    if (count < 10) {
      countString = "0" + countString;
    }

    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;
    setTimeout(stopWatch, 10);
  }
}
