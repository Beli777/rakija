var WM = (function($) {
  'use strict';

  var scrollClick = function() {
      var button = $('.slider__scroll');
      button.on('click', function(){
        var offset = 20;
        $('html, body').animate({
            scrollTop: $(".scroll").offset().top + offset
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
    $('.about-us-second').slick();
  }
  var changeLogo = function(){
    if($('body').hasClass('product-page')){
        $('.navigation').find('div:nth-child(2)').find('img').attr("src","img/black-logo.png");
        $('.navigation').find('div:last-child').find('img').attr("src","img/black-cart.png");
      }
  }

  var modal = function(){
      // Get the modal
      var modal = document.getElementById('myModal');

      // Get the button that opens the modal
      var btn = document.getElementById("myBtn");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on the button, open the modal
      btn.onclick = function() {
          modal.style.display = "block";
      }

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
          modal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }
  }
  var subscribe = function(){
    // Get the modal
    var modal = document.getElementById('myModalSecond');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtnSecond");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closeSecond")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  }
  var ready = function() {
    scrollClick();
    slider();
    changeLogo();
    modal();
    subscribe();
  };

  // Only expose the ready function to the world
  return {
      ready: ready
  };
})(jQuery);

jQuery(WM.ready);
