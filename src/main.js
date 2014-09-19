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

  return hours + ":" + minutes + " " + ":" + seconds + ":" + milliseconds;
}

var start1 = document.getElementById("start1");
var end1 = document.getElementById("end1");
var diff1 = document.getElementById("diff1");


start1.innerHTML = getCurrentTime();

setTimeout(function () {
 end1.innerHTML = getCurrentTime();
 console.log('Start', start1);
}, 60000);