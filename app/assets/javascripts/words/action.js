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
  $('body').on('click', 'li.wordComplete', function(){
    if($(this).hasClass('selected')){
      $(this).removeClass('selected').parent('ul.wordUl').children().last().children('.menuWord').hide();
    }else{
      $('li.word').removeClass('selected');

      $('.menuWord').hide();
      $(this).addClass('selected').parent('ul.wordUl').children().last().children('.menuWord').show();
    };
  });

  $(window).scroll(function(){
    var now = $(window).scrollTop();

    if(now > 1500){
      $('#page-top').fadeIn('slow');
    }else{
      $('#page-top').fadeOut('slow');
    }
  });

  $('#move-page-top').click(function(){
    $('html,body').animate({scrollTop:0}, 'slow');
  });
});
