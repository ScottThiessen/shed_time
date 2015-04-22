$(function() {
var pianoTotalFilledIn = 0;
var scalesFilledIn = 0;
var triadsFilledIn = 0;
var musicalFilledIn = 0;

//Counts number of total/section checkboxes
function countBoxes1() {
  pianoTotalCount = $(':checkbox').length;
  scalesCount = $('#scales > :checkbox').length;
  triadsCount = $('#triads > :checkbox').length;
  musicalCount = $('#musical > :checkbox').length;
}

countBoxes1();

//Calculates % of total boxes checked
$(':checkbox').click(function(e) {
  if(e.target.checked) {
    pianoTotalFilledIn ++;
  } else {
    pianoTotalFilledIn --;
  }
  var percentage = parseInt(((pianoTotalFilledIn / pianoTotalCount) * 100));
  console.log('Total' +  '%' + percentage);
  })

//Calculates % of 'scales' boxes checked
$('#scales > :checkbox').click(function(e) {
  if(e.target.checked) {
    scalesFilledIn ++;
  } else {
    scalesFilledIn --;
  }
  var percentage = parseInt(((scalesFilledIn / scalesCount) * 100));
console.log('%' + percentage);
  })

//Calculates % of 'triads' boxes checked
$('#triads > :checkbox').click(function(e) {
  if(e.target.checked) {
    triadsFilledIn ++;
  } else {
    triadsFilledIn --;
  }
  var percentage = parseInt(((triadsFilledIn / triadsCount) * 100));
  console.log('%' + percentage);
  })


//Calculates % 'music example' boxes checked
$('#musical > :checkbox').click(function(e) {
  if(e.target.checked) {
    musicalFilledIn ++;
  } else {
    musicalFilledIn --;
  }
  var percentage = parseInt(((musicalFilledIn / musicalCount) * 100));
  console.log('%' + percentage);
  })
});
