'use strict';

$(function() {

  //------session storage---------\\
  function save(){
    var checkbox = document.getElementById('piano1-1');
    localStorage.setItem('piano1-1', checkbox.checked);
  }

  function load(){
    var checked = JSON.parse(localStorage.getItem('piano1-1'));
    document.getElementById("piano1-1").checked = checked;
  }

  load();

  $('#piano1').click(function() {
    save();
  })
  //^^^^^^end session storage^^^^^^\\
});
