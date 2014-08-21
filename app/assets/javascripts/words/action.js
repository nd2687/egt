$(function(){
  $('body').on('click', 'li.word', function(){
    if($(this).hasClass('selected')){
      $(this).removeClass('selected').find('.actionWord').hide();
    }else{
      $('li.word').removeClass('selected');
      $('.actionWord').hide();
      $(this).addClass('selected').find('.actionWord').show();
    };
  });
});
