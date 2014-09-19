function getMilliseconds() {
  return new Date().getTime();
}

function millisecondsToTime(duration) {
  var milliseconds = parseInt((duration % 1000))
      , seconds = parseInt((duration / 1000) % 60)
      , minutes = parseInt((duration / (1000 * 60)) % 60)
      , hours = parseInt((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return '00' + ":" + '00' + ":" + seconds + "." + milliseconds;
}

function getTimeDifference(startTime, endTime) {
  var timeDifference = endTime - startTime;
  return timeDifference;
}

function printCurrentTime(domElement, currentTime) {
  var output = millisecondsToTime(currentTime);
  domElement.innerHTML = output;
}

var elStart1 = document.getElementById("start1");
var elEnd1 = document.getElementById("end1");
var elDiff1 = document.getElementById("diff1");
var diff1;
var secondTimeout;

var output2 = document.getElementById("output2");

var start1Time = getMilliseconds();
console.log('Converted:', millisecondsToTime(start1Time));
printCurrentTime(elStart1, start1Time);


var totalDuration = 5000;

setTimeout(function () {
  var end1Time = getMilliseconds();
  printCurrentTime(elEnd1, end1Time);
  diff1 = getTimeDifference(start1Time, end1Time);
  printCurrentTime(elDiff1, diff1);
}, totalDuration);


var counter = 1;
var interval = 100;
var totalDurationNeeded = 0;
var lastWalkThrough = 0;

function recursion(timeoutInMilliSeconds) {
  var startTime = getMilliseconds();
  secondTimeout = setTimeout(function () {
    var innerDiv = document.createElement('div');
    output2.appendChild(innerDiv);

    var currentTime = getMilliseconds();
    var difference = currentTime - lastWalkThrough - 100;

    innerDiv.innerHTML = counter + '.' + ' - ' + millisecondsToTime(currentTime) + '        Difference:' + millisecondsToTime(difference);

    lastWalkThrough = currentTime;
    counter += 1;
    var endTime = getMilliseconds();

    var actualDuration = getTimeDifference(startTime, endTime);

    totalDurationNeeded += actualDuration;

    if (totalDurationNeeded >= totalDuration){
      return;
    }

    var intendedDuration = timeoutInMilliSeconds;
    var deviation = getTimeDifference(intendedDuration, actualDuration);
    var correctedTimeoutInMilliSeconds = interval - deviation;
    console.log('actual duration', actualDuration, 'next duration', correctedTimeoutInMilliSeconds);
    recursion(correctedTimeoutInMilliSeconds);
  }, timeoutInMilliSeconds);
}

recursion(interval);

