$(function() {
  $('#new_word').hover(
    function (){
      $(this).css('cursor', 'pointer').css('color', '#5ac86b');
    },
    function (){
      $(this).css('color', '');
    }
  );
  var nav = $('.nav');
  //表示位置
  var navTop = nav.offset().top+170;
  //ナビゲーションの高さ（シャドウの分だけ足してます）
  var navHeight = nav.height();
  var showFlag = false;
  nav.css('top', -navHeight+'px');
  //ナビゲーションの位置まできたら表示
  //$(window).scroll(function () {
  //  var winTop = $(this).scrollTop();
  //  if (winTop >= navTop) {
  //    if (showFlag == false) {
  //      showFlag = true;
  //      nav
  //  .addClass('fixed')
  //  .stop().animate({'top' : '0px'}, 200);
  //    }
  //  } else if (winTop <= navTop) {
  //    if (showFlag) {
  //      showFlag = false;
  //      nav.stop().animate({'top' : -navHeight+'px'}, 200, function(){
  //        nav.removeClass('fixed');
  //      });
  //    }
  //  }
  //});

  $('div.nav').hover( function (){
    $('div.nav form').stop().fadeIn('slow');
    $('div.nav button').stop().fadeIn('slow');
    $('div.sortTag').stop().fadeIn('slow');
    $('div.count').stop().fadeIn('slow');
    $(this).css('background', '#5ac86b');
    if (showFlag == false) {
        showFlag = true;
        nav
    .addClass('fixed')
    .stop().animate({'top' : '0px'}, 200)
    }
  },
  function (){
    $('div.nav form').stop().fadeOut('slow');
    $('div.nav button').stop().fadeOut('slow');
    $('div.sortTag').stop().fadeOut('slow');
    $('div.count').stop().fadeOut('slow');
    $(this).css('background', '#dff4e9');
    showFlag = false;
    nav.stop().animate({'top' : -navHeight+'px'}, 500, function(){
      nav.removeClass('fixed');
    });
  });
});
