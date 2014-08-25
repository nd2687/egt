$(function (){
  $("button.sortButton").on('click', function(){
    var sortType = $(this).attr('data-sort-type');
    var wordType = $(this).attr('data-word-type');
    var completeType = $(this).attr('data-complete-type');
    $("ul").fadeOut('fast');
    window.location = "/?sort_type="+sortType+"&word_type="+wordType+"&complete_type="+completeType;
  });
})
