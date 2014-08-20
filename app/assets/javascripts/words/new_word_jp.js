$(function (){
  if($('#japaneseTemp').length > 0 ){
    $("body").on({
      'mouseenter':function(){
        var english = $(this).children('.english');
        var japanese = $(this).children('.japanese');
        $(this).css('cursor', 'pointer').css('background', '#a3d57c');
        japanese.stop().slideUp();
        english.stop().slideDown();
      },
      'mouseleave':function(){
        var english = $(this).children('.english');
        var japanese = $(this).children('.japanese');
        $(this).css('cursor', 'pointer').css('background', '');
        japanese.stop().slideDown();
        english.stop().slideUp();
      }
    }, 'li.word');
  };
});
