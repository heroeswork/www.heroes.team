/**
* @fileoverview Slick Carousel
* @link http://kenwheeler.github.io/slick/
*/
import 'slick-slider'

(function($) {
  'use strict';

  $(document).ready(function(){
    $('.carousel-centered').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      slidesToShow: 5,
      infinite: true,
      arrows: false,
      centerMode: true,
      centerPadding: '80px',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  });

}(jQuery));