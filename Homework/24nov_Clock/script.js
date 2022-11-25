function getTime() {
  const date = new Date();

  let hours = date.getHours();

  let toggle = true;

  console.log(hours);

  if (hours >= 12 && hours < 24) {
    toggle = false;
  }

  if (!toggle) {
    document.getElementById("count").innerHTML = "pm";
  }

  if (hours == 0) {
    hours = 12;
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  let seconds = date.getSeconds();

  let minute = date.getMinutes();

  document.getElementById("hr").innerHTML = hours;

  document.getElementById("min").innerHTML = minute;

  document.getElementById("sec").innerHTML = seconds;

  setTimeout(getTime, 1000);
}
console.log("hdsfhjhdfsjkdshfjkdhsjk");
getTime();
