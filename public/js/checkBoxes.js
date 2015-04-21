$(function() {
var totalCheckBox = 4;
var filledIn = 0;
var withCheck = true;

function countBoxes() {
  count = $('input').length;
}

countBoxes();
$(':checkbox').click(function(e) {
  if(e.target.checked) {
    filledIn ++;
  } else {
    filledIn --;
  }
  var percentage = parseInt(((filledIn / count) * 100),10);
  });
});
