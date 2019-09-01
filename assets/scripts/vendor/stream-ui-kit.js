/*!
 * Stream v1.0 (https://htmlstream.com)
 * Copyright Htmlstream
 * Licensed under MIT
 */

(function($) {
  'use strict';

  // Activate Tooltips & Popovers
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    // Dismiss Popovers on next click
    $('.popover-dismiss').popover({
      trigger: 'focus'
    })
  });

  // Bootstrap Fixed Header
  $(function() {
    // Check to see if there is a bakcground class on loading
    if ($('.js-navbar-scroll').offset().top > 300) {
      $('.js-navbar-scroll').addClass('navbar-bg-onscroll');
    }

    // Check to add a background class on scrolling
    $(window).on('scroll', function() {
      var navbarOffset = $('.js-navbar-scroll').offset().top > 300;
      if(navbarOffset) {
        $('.js-navbar-scroll').addClass('navbar-bg-onscroll');
      }
      else {
        $('.js-navbar-scroll').removeClass('navbar-bg-onscroll');
        $('.js-navbar-scroll').addClass('navbar-bg-onscroll--fade');
      }
    });
  });
}(jQuery));