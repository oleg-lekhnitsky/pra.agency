import $ from 'jquery';

const ready = function() {
  $('.close-icon').click(function(e) {
    e.preventDefault();
    $('.mobile-nav-sidebar').removeClass('visible');
  });

  $('.burger-icon').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.mobile-nav-sidebar').addClass('visible');
  });

  $(window).on('click', function(e) {
    $('.mobile-nav-sidebar').removeClass('visible');
  });

  $('.mobile-nav-sidebar').click(function(e) {
    e.stopPropagation();
  });
};

$(document).ready(ready);
