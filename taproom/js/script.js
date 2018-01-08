$(document).ready(function() {  
  $(function() {
    $('.locateUs iframe').css('height',$('#map').height());

    $('.pop').on('click', function() {
      $('.imagepreview').attr('src', $(this).find('img').attr('src'));
      $('#imagemodal').modal('show');   
    });   
});

  $('#menuCarousel').carousel({
      interval: 10000
  });
  if ($(window).width() > 768) {
    $('.photosWrap').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        autoplay:false,
      });
    $('.menuWrap').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        autoplay:false,
      });
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        $('.navbar').addClass('affix');
        $('.reviewWrap').css('margin-top', $('.navbar').outerHeight()+33);
      }

      if ($(window).scrollTop() < 300) {
        $('.navbar').removeClass('affix');
        $('.reviewWrap').css('margin-top', '0px');
      }
    });
    }
    else {
      $('.menuWrap').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        autoplay:false,
      });
      $('.photosWrap').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        autoplay:false,
      });
    $(window).scroll(function () {

      if ($(window).scrollTop() > 145) {
        $('.navbar').addClass('affix');
        $('.reviewWrap').css('margin-top', $('.navbar').outerHeight()+33);
      }

      if ($(window).scrollTop() < 145) {
        $('.navbar').removeClass('affix');
        $('.reviewWrap').css('margin-top', '0px');
      }
    });
    }
  $(window).resize(function() {
    $('.menuWrap').slick('unslick');
    if ($(window).width() > 768) {
      $('.menuWrap').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        autoplay:false,
      });
      $('.photosWrap').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        autoplay:false,
      });
      $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
          $('.navbar').addClass('affix');
          $('.reviewWrap').css('margin-top', $('.navbar').outerHeight()+33);
        }

        if ($(window).scrollTop() < 300) {
          $('.navbar').removeClass('affix');
          $('.reviewWrap').css('margin-top', '0px');
        }
      });
    }
    else {
      $('.menuWrap').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        autoplay:false,
      });
      $('.photosWrap').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        autoplay:false,
      });
      $(window).scroll(function () { 

        if ($(window).scrollTop() > 145) {
          $('.navbar').addClass('affix');
          $('.reviewWrap').css('margin-top', $('.navbar').outerHeight()+33);
        }

        if ($(window).scrollTop() < 145) {
          $('.navbar').removeClass('affix');
          $('.reviewWrap').css('margin-top', '0px');
        }
      });
    }
  });
});

