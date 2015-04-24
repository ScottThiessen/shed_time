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
    var totalPercentage = parseInt(((pianoTotalFilledIn / pianoTotalCount) * 100));
    console.log('Total' +  '%' + totalPercentage);

    $('.p-total').text('Total Page: ' + totalPercentage + '% complete');
  })

  //Calculates % of 'scales' boxes checked
  $('#scales > :checkbox').click(function(e) {
    if(e.target.checked) {
      scalesFilledIn ++;
    } else {
      scalesFilledIn --;
    }
    var scalesPercentage = parseInt(((scalesFilledIn / scalesCount) * 100));
    console.log('%' + scalesPercentage);

    $('#pp1').text('This Section: ' + scalesPercentage + '% complete');
  })

  //Calculates % of 'triads' boxes checked
  $('#triads > :checkbox').click(function(e) {
    if(e.target.checked) {
      triadsFilledIn ++;
    } else {
      triadsFilledIn --;
    }
    var triadsPercentage = parseInt(((triadsFilledIn / triadsCount) * 100));
    console.log('%' + triadsPercentage);

    $('#pp2').text('This Section: ' + triadsPercentage + '% complete');
  })


  //Calculates % 'music example' boxes checked
  $('#musical > :checkbox').click(function(e) {
    if(e.target.checked) {
      musicalFilledIn ++;
    } else {
      musicalFilledIn --;
    }
    var musicPercentage = parseInt(((musicalFilledIn / musicalCount) * 100));
    console.log('%' + musicPercentage);

    $('#pp3').text('This Section: ' + musicPercentage + '% complete');
  })

});
