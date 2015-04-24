'use strict';

$(function() {

  //------session storage---------\\
  function save(){
    var checkbox2 = document.getElementById('drums1-1');
    localStorage.setItem('drums1-1', checkbox2.checked)
    var checkbox = document.getElementById('drums2-2');
    localStorage.setItem('drums2-2', checkbox.checked);
  }

  function load(){
    var checked = JSON.parse(localStorage.getItem('drums2-2'));
    document.getElementById("drums2-2").checked = checked;
    var checked2 = JSON.parse(localStorage.getItem('drums1-1'));
    document.getElementById("drums1-1").checked = checked2;
  }

  load();

  $('#drums1').click(function() {
    save();
  });
  //^^^^^^end session storage^^^^^^\\
});
