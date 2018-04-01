var WM = (function($) {
  'use strict';

  var scrollClick = function() {
      var button = $('.slider__scroll');
      button.on('click', function(){
        var offset = 20;
        $('html, body').animate({
            scrollTop: $(".products").offset().top + offset
        }, 500);
      });
      window.wasScrolled = false;
      $(window).bind('scroll',function(){
          if (!window.wasScrolled){ $('html, body').animate({scrollTop:document.getElementById('products').getBoundingClientRect().top},500)}
          window.wasScrolled = true;
      })
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var $win = $(window);
        var winH = $win.height() - 60;   // Get the window height.

        if (scroll >= winH) {
            $(".navigation").addClass("darkNavigation");
        } else {
            $(".navigation").removeClass("darkNavigation");
        }
    });
  };
  var slider = function(){
    $('.products').slick();
  }
  var ready = function() {
    scrollClick();
    slider();
  };

  // Only expose the ready function to the world
  return {
      ready: ready
  };
})(jQuery);

jQuery(WM.ready);
