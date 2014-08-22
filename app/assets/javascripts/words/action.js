$(function(){
  $('body').on('click', 'li.word', function(){
    if($(this).hasClass('selected')){
      $(this).removeClass('selected').parent('ul.wordUl').children().last().children('.menuWord').hide();
    }else{
      $('li.word').removeClass('selected');

      $('.menuWord').hide();
      $(this).addClass('selected').parent('ul.wordUl').children().last().children('.menuWord').show();
    };
  });
});
