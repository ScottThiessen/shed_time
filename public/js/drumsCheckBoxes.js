$(function() {
var drumsTotalFilledIn = 0;
var rudimentsFilledIn = 0;
var stylesFilledIn = 0;
var groovesFilledIn = 0;

function countBoxes2() {
  drumsTotalCount = $(':checkbox').length;
  rudimentsCount = $('#rudiments > :checkbox').length;
  stylesCount = $('#styles > :checkbox').length;
  groovesCount = $('#grooves > :checkbox').length;
}

countBoxes2();

$(':checkbox').click(function(e) {
  if(e.target.checked) {
    drumsTotalFilledIn ++;
  } else {
    drumsTotalFilledIn --;
  }
  var percentage = parseInt(((drumsTotalFilledIn / drumsTotalCount) * 100));
  console.log('Total' +  '%' + percentage);
  })

$('#rudiments > :checkbox').click(function(e) {
  if(e.target.checked) {
    rudimentsFilledIn ++;
  } else {
    rudimentsFilledIn --;
  }
  var percentage = parseInt(((rudimentsFilledIn / rudimentsCount) * 100));
console.log('%' + percentage);
  })

$('#styles > :checkbox').click(function(e) {
  if(e.target.checked) {
    stylesFilledIn ++;
  } else {
    stylesFilledIn --;
  }
  var percentage = parseInt(((stylesFilledIn / stylesCount) * 100));
  console.log('%' + percentage);
  })


$('#grooves > :checkbox').click(function(e) {
  if(e.target.checked) {
    groovesFilledIn ++;
  } else {
    groovesFilledIn --;
  }
  var percentage = parseInt(((groovesFilledIn / groovesCount) * 100));
  console.log('%' + percentage);
  })
});




