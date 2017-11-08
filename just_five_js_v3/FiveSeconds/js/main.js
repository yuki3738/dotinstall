(function() {
  'use strict';

  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var result = document.getElementById('result');
  var startTime;
  var diff;

  start.addEventListener('click', function() {
    startTime = Date.now();
  });

  stop.addEventListener('click', function() {
    var elapsedTime;
    elapsedTime = (Date.now() - startTime) / 1000;
    result.textContent = elapsedTime.toFixed(3);
    diff = elapsedTime - 5.0;
    if (Math.abs(diff) < 1.0) {
      result.className = 'perfect';
    }
  });
})();
