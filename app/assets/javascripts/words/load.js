$(function (){
  $("button.sortButton").on('click', function(){
    var sortType = $(this).attr('data-sort-type');
    $("ul").fadeOut('fast');
    //$('#loadArea').load("?sort_type="+sortType+" ul");
    window.location = "/?sort_type="+sortType;
  });
})
