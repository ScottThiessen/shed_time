$(function() {
var totalFilledIn = 0;
var scalesFilledIn = 0;
var triadsFilledIn = 0;
var musicalFilledIn = 0;

//Counts number of total/section checkboxes
function countBoxes() {
  totalCount = $(':checkbox').length;
  scalesCount = $('#scales > :checkbox').length;
  triadsCount = $('#triads > :checkbox').length;
  musicalCount = $('#musical > :checkbox').length;
}

countBoxes();

//Calculates % of total boxes checked
$(':checkbox').click(function(e) {
  if(e.target.checked) {
    totalFilledIn ++;
  } else {
    totalFilledIn --;
  }
  var percentage = parseInt(((totalFilledIn / totalCount) * 100));
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
