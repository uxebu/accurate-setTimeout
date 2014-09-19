function getCurrentTime() {
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

  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds
  }
}

function printCurrentTime(domElement, currentTime) {
  domElement.innerHTML = currentTime.hours + ":" + currentTime.minutes + " " + ":" + currentTime.seconds + ":" + currentTime.milliseconds;
}


var elStart1 = document.getElementById("start1");
var elEnd1 = document.getElementById("end1");
var diff1 = document.getElementById("diff1");


var start1Time = getCurrentTime();
printCurrentTime(elStart1, start1Time);

setTimeout(function () {
  var end1Time = getCurrentTime();
  printCurrentTime(elEnd1, end1Time);
}, 10000);