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
  });
  //end countdown clock

  fullpage.initialize('#fullpage', {
    anchors: ['firstpage', 'secondPage', 'thirdPage', 'lastPage'],
    menu: '#menu',
    controlArrows: true,
    css3:true
  });
});
