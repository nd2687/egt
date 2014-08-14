$(function (){
  $("li.word").hover(function (){
    var japanese = $(this).children('.japanese');
    var english = $(this).children('.english');
    japanese.fadeOut("");
    english.fadeIn("");
  },
    function (){
      var japanese = $(this).children('.japanese');
      var english = $(this).children('.english');
      japanese.fadeIn("");
      english.fadeOut("");
    }
  );
})
