'use strict';

$(function() {
  //------start countdown clock----------\\
  var clock = $('.clock').FlipClock({
    autoStart: false,
    countdown: true,
    clockFace: 'minuteCounter'
  });

  clock.setTime(300);

  $('.clock').click(function() {
    clock.start();
  });

  $('.clock').dblclick(function() {
    clock.stop();
  })
  //^^^^^^^^^end countdown clock^^^^^^^^^^\\

  //----------page scrolling---------\\
  fullpage.initialize('#fullpage', {
    anchors: ['firstpage', 'secondPage', 'thirdPage', 'lastPage'],
    menu: '#menu',
    controlArrows: true,
    css3:true
  });
  //^^^^^^end page scrolling^^^^^^\\


});
