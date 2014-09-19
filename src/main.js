function getMilliSeconds() {
  return new Date().getTime();
}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000))
      , seconds = parseInt((duration / 1000) % 60)
      , minutes = parseInt((duration / (1000 * 60)) % 60)
      , hours = parseInt((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

function getTimeDifference(startTime, endTime) {
  var timeDifference = endTime - startTime;
  return timeDifference;
}

function printCurrentTime(domElement, currentTime) {
  var output = msToTime(currentTime);
  domElement.innerHTML = output;
}

var elStart1 = document.getElementById("start1");
var elEnd1 = document.getElementById("end1");
var elDiff1 = document.getElementById("diff1");
var diff1;
var secondTimeout;

var output2 = document.getElementById("output2");

var start1Time = getMilliSeconds();
console.log('Converted:', msToTime(start1Time));
printCurrentTime(elStart1, start1Time);

setTimeout(function () {
  var end1Time = getMilliSeconds();
  printCurrentTime(elEnd1, end1Time);
  diff1 = getTimeDifference(start1Time, end1Time);
  printCurrentTime(elDiff1, diff1);
  clearInterval(secondTimeout);
}, 4000);

function recursion(){
  secondTimeout = setTimeout(function(){
    var innerDiv = document.createElement('div');
    output2.appendChild(innerDiv);
    innerDiv.innerHTML = counter + '.' + ' - ' + msToTime(getMilliSeconds());
    counter += 1;
    recursion();
  },100);
}

var counter = 1;

recursion();






