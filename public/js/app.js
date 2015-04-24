'use strict';

$(function(){

  //------session storage---------\\
  function save(){
    var checkbox = document.getElementById('drums2-2');
    localStorage.setItem('drums2-2', checkbox.checked);
  }

  function load(){
    var checked = JSON.parse(localStorage.getItem('drums2-2'));
    // document.getElementById("drums2-2").checked = checked;
  }

  load();

  $('#drums2').click(function() {
    save();
  })
  //^^^^^^end session storage^^^^^^\\

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
