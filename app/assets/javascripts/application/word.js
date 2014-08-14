$(function (){
  $("li.word").hover(function (){
    var japanese = $(this).children('.japanese');
    var english = $(this).children('.english');
    japanese.stop().hide("");
    english.stop().show("");
  },
    function (){
      var japanese = $(this).children('.japanese');
      var english = $(this).children('.english');
      japanese.stop().show("");
      english.stop().hide("");
    }
  );
})
