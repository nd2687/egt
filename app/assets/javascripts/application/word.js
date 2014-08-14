$(function (){
  $("li.word").hover(function (){
    var japanese = $(this).children('.japanese');
    var english = $(this).children('.english');
    $(this).css('cursor', 'pointer').css('background', '#a3d57c');
    japanese.stop().slideUp();
    english.stop().slideDown();
  },
    function (){
      var japanese = $(this).children('.japanese');
      var english = $(this).children('.english');
      $(this).css('cursor', 'pointer').css('background', '');
      japanese.stop().slideDown();
      english.stop().slideUp();
    }
  );
})
