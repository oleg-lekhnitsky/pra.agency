import $ from 'jquery';
import '../styles/main.scss';
import './awakeness';
import './nav-mobile';

import './awake';
//import './parallax';
import './logos';

$('#slideshow > div:gt(0)').hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(0)
    .end()
    .appendTo('#slideshow');
}, 400);
