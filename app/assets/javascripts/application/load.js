$(function (){
  //$("button#reverseSort").on('click', function(){
  //  $("ul").fadeOut('fast');
  //  $('#loadArea').load("?sort_type=reverse ul");
  //});

  $("button.sortButton").on('click', function(){
    var sortType = $(this).attr('data-sort-type');
    $("ul").fadeOut('fast');
    $('#loadArea').load("?sort_type="+sortType+" ul");
  });

  //$("button#alphabetSort").on('click', function(){
  //  $("ul").fadeOut('fast');
  //  $('#loadArea').load("?sort_type=alphabet ul");
  //});

})
