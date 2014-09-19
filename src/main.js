var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var milliseconds = currentTime.getMilliseconds();

if (minutes < 10) {
  minutes = "0" + minutes;
}
if (seconds < 10) {
  seconds = "0" + seconds;
}

document.write("<b>" + hours + ":" + minutes + " " + ":" + seconds + ":" + milliseconds + "</b>")