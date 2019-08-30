/**
* @fileoverview jQuery Parallax
* @link https://github.com/IanLunn/jQuery-Parallax
*/

import "jquery-parallax";

(function($) {
  'use strict';

  $(document).ready(function(){
    if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
      $('.js-parallax').parallax("50%", .2);
    }
  })

}(jQuery));