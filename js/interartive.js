  $(document).ready(function () {

    var x = $('#close');
    var cover = $('#cover');
    x.on('click', function () {
      cover.hide();
    });
    var prev = 0;
    var $window = $(window);
    var navbar = $('.navbar');



    $window.on('scroll', function () {
      var scrollTop = $window.scrollTop();
      navbar.toggleClass('hidden', scrollTop > prev);
      prev = scrollTop;
    });



    //======SOME GOOD IDEA

    var portfolio = $('#portfolio');

    portfolio.on('click', function () {


      page.load("portfolio.txt", function (responseTxt, statusTxt, xhr) {
        if (statusTxt == "success")
        //==============OWL CAROUSEL
          $('.owl-carousel').owlCarousel({
          rtl: true,
          loop: true,
          autoplay: true,
          autoplayTimeout: 5000,
          responsive: {
            0: {
              items: 1,
              nav: true
            },
            480: {
              items: 2,
              nav: true
            },
            // breakpoint from 768 up
            768: {
              items: 3,
              nav: true
            }

          }
        });
      });
    });








  });