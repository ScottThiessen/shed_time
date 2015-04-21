'use strict';

$(document).ready(function() {
  var clock = $('.clock').FlipClock({
    autoStart: false,
    countdown: true,
    clockFace: 'minuteCounter'
  });

  clock.setTime(600);
  $('.clock').click(function() {
    clock.start();
  })
});
