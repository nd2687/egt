$(function (){
  $("button#reverseSort").on('click', function(){
    $("ul#wordsUp").fadeOut('fast');
    $('#loadArea').load("/reverse/ ul#wordsDown");
  });

  $("button#normalSort").on('click', function(){
    $("ul#wordsDown").fadeOut('fast');
    $('#loadArea').load("/ ul#wordsUp");
  });
})
