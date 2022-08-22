import $ from 'jquery';


$('#slideshow > div:gt(0)').hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(0)
    .end()
    .appendTo('#slideshow');
}, 400);




$('#slideshow2 > div:gt(0)').hide();

setInterval(function() {
  $('#slideshow2 > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(0)
    .end()
    .appendTo('#slideshow2');
}, 1000);