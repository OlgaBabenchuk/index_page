//$(document).ready(function() {
 
  /*   toggle sidebar menu   */

  // $(".mob-menu-trigger").on("click", function() {
  //   $(".main-nav").css({'transform': 'translateY(0%)', 'transition': '0.3s'});
  //   $(".overlay").addClass("overlay--open");
  // });

  // $(".mob-menu-close").on("click", function(){
  //   $(".main-nav").css({'transform': 'translateY(-100%)', 'transition': '0.5s'});
  //   $(".overlay").removeClass("overlay--open");
  // });


  /*   dropdown main naviation   */  

  // $('.menu__item').hover(function(){
  //   $(this).siblings('.submenu').slideDown(300);
  // }, function(){
  //   $(this).siblings('.submenu').slideUp(300);
  //   }
  // );


  /*   select language   */

  // $(".language__item").on("click", function(){
  //   $(".language__item--active").removeClass("language__item--active");
  //   $(this).addClass("language__item--active");
  // });


  /*   aside info-accordion   */

  // $('.accordion .accordion__body').hide();

  // $('.accordion .accordion__title').on('click', function(){
  //   if ($(this).hasClass('close')) {
  //     $(this).addClass('open').removeClass('close');
  //     $(this).siblings('.accordion__title').removeClass('open').addClass('close');
  //     $(this).next().slideDown(300);
  //     $(this).next().siblings('.accordion__body').slideUp(300);
  //   } else {
  //     $(this).addClass('close').removeClass('open');
  //     $(this).next().slideUp(300);
  //   }
  // });

//});


window.onload = function() {

  /*   dropdown main naviation   */

  var submenu = document.getElementsByClassName('submenu')[0],
      menu = document.getElementsByClassName('menu__item'),
      dropdownItem = document.getElementsByClassName('menu__item')[menu.length - 1],
      body = document.getElementsByTagName('body')[0];

  submenu.classList.add('submenu--ready');

  function openSubmenu(e) {
    submenu.classList.add('submenu--open');
    e.stopPropagation();
  }

  function closeSubmenu() {
    submenu.classList.remove('submenu--open');
  }

  dropdownItem.addEventListener('click', openSubmenu);
  body.addEventListener('click', closeSubmenu);


  /*   toggle sidebar menu   */

  var burgerMenu = document.getElementsByClassName('mob-menu-trigger')[0],
      crossMenu = document.getElementsByClassName('mob-menu-close')[0],
      overlay = document.getElementsByClassName('overlay')[0],
      mobNavigation = document.getElementsByClassName('main-nav')[0];
  
  function openMenu(){
    overlay.classList.toggle('overlay--open');
    mobNavigation.classList.toggle('main-nav--mob-open');
  }  

  function closeMenu(){
    overlay.classList.toggle('overlay--open');
    mobNavigation.classList.toggle('main-nav--mob-open');
  }

  burgerMenu.addEventListener("click", openMenu);
  crossMenu.addEventListener("click", closeMenu);


  /*   select language   */

  var selectLang = Array.from(document.getElementsByClassName('language__item'));  

  selectLang.forEach(function (element, index){
    element.addEventListener("click", function(){
      if (!(selectLang[index].classList.contains('language__item--active'))) {
        document.getElementsByClassName('language__item--active')[0].classList.remove('language__item--active');
        selectLang[index].classList.add('language__item--active');
      }
    });
  });


  /*   aside info-accordion   */

  var accBody = Array.from(document.getElementsByClassName('accordion__body'));
  var accTitle = Array.from(document.getElementsByClassName('accordion__title'));

  accTitle.forEach(function (element, index){
    element.addEventListener("click", function(){

      if (accTitle[index].classList.contains('close')) {
        if (document.getElementsByClassName('open').length) {
          document.getElementsByClassName('open')[0].classList.add('close');
          document.getElementsByClassName('open')[0].classList.remove('open');
          document.getElementsByClassName('accordion__body--show')[0].classList.remove('accordion__body--show');
        }
      
        accTitle[index].classList.add('open');
        accTitle[index].classList.remove('close');
        accTitle[index].nextElementSibling.classList.add('accordion__body--show');
      } else {
        accTitle[index].classList.add('close');
        accTitle[index].classList.remove('open');
        accTitle[index].nextElementSibling.classList.remove('accordion__body--show');
      }
    });
  });

};