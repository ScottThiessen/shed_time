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
    var totalPercentage = parseInt(((drumsTotalFilledIn / drumsTotalCount) * 100));
    console.log('Total' +  '%' + totalPercentage);

    $('.total').text('Total Page: ' + totalPercentage + '% complete');
  });



  $('#rudiments > :checkbox').click(function(e) {
    if(e.target.checked) {
      rudimentsFilledIn ++;
    } else {
      rudimentsFilledIn --;
    }
    var rudimentsPercentage = parseInt(((rudimentsFilledIn / rudimentsCount) * 100));
    console.log('%' + rudimentsPercentage);

    $('#progress1').text('This Section: ' + rudimentsPercentage + '% complete');
  });



  $('#styles > :checkbox').click(function(e) {
    if(e.target.checked) {
      stylesFilledIn ++;
    } else {
      stylesFilledIn --;
    }
    var stylesPercentage = parseInt(((stylesFilledIn / stylesCount) * 100));
    console.log('%' + stylesPercentage);

    $('#progress2').text('This Section: ' + stylesPercentage + '% complete');
  });




  $('#grooves > :checkbox').click(function(e) {
    if(e.target.checked) {
      groovesFilledIn ++;
    } else {
      groovesFilledIn --;
    }
    var groovesPercentage = parseInt(((groovesFilledIn / groovesCount) * 100));
    console.log('%' + groovesPercentage);

    $('#progress3').text('This Section: ' + groovesPercentage + '% complete');
  });

});





