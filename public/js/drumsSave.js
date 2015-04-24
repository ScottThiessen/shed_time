'use strict';

$(function() {

  //------session storage---------\\
  function save(){
    var checkbox2 = document.getElementById('drums1-1');
    localStorage.setItem('drums1-1', checkbox2.checked)
    var checkbox = document.getElementById('drums1-2');
    localStorage.setItem('drums1-2', checkbox.checked);
    var checkbox3 = document.getElementById('drums1-3');
    localStorage.setItem('drums1-3', checkbox3.checked);
  }

  function load(){
    var checked = JSON.parse(localStorage.getItem('drums1-2'));
    document.getElementById("drums1-2").checked = checked;
    var checked2 = JSON.parse(localStorage.getItem('drums1-1'));
    document.getElementById("drums1-1").checked = checked2;
    var checked3 = JSON.parse(localStorage.getItem('drums1-3'));
    document.getElementById("drums1-3").checked = checked3;
  }

  load();

  $('#drums1').click(function() {
    save();
  });
  //^^^^^^end session storage^^^^^^\\
});
