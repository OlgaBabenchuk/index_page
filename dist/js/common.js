$(document).ready(function() {
 
  /*   toggle sidebar menu   */

  $(".mob-menu-trigger").on("click", function() {
    $(".main-nav").css({'transform': 'translateY(0%)', 'transition': '0.3s'});
    $(".overlay").addClass("overlay--open");
  });

  $(".mob-menu-close").on("click", function(){
    $(".main-nav").css({'transform': 'translateY(-100%)', 'transition': '0.5s'});
    $(".overlay").removeClass("overlay--open");
  });


  /*   dropdown main naviation   */  

  $('.menu__item').hover(function(){
    $(this).children('.submenu').slideDown(300);
  }, function(){
    $(this).children('.submenu').slideUp(300);
    }
  );


  /*   select language   */

  $(".language__item").on("click", function(){
    $(".language__item--active").removeClass("language__item--active");
    $(this).addClass("language__item--active");
  });


  /*   aside info-accordion   */

  $('.accordion .accordion__body').hide();

  $('.accordion .accordion__title').on('click', function(){
    if ($(this).hasClass('close')) {
      $(this).addClass('open').removeClass('close');
      $(this).siblings('.accordion__title').removeClass('open').addClass('close');
      $(this).next().slideDown(300);
      $(this).next().siblings('.accordion__body').slideUp(300);
    } else {
      $(this).addClass('close').removeClass('open');
      $(this).next().slideUp(300);
    }
  });
});

