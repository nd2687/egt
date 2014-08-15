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

  $('#new_word').on("click", function(){
    var user_id = $('button#new_word').attr("data-user_id");
    var params = {}
    params['japanese'] = $('input#word_japanese').val();
    params['english'] = $('input#word_english').val();
    params['user_id'] = user_id;

    $.ajax({
      url: '/words',
      type: 'POST',
      data: params,
      success: function(words){
        var list = $('<li class="word" style="display:none;">')
        var nesting = list
          .append('<div class="japanese" style="display:none;" id="ajax_japanese">' + words[0] + '</div>')
          .append('<div class="english" style="display:none;">' + words[1] + '</div>');
        $('ul#words').prepend(nesting);
        list.fadeIn('slow');
        $('div#ajax_japanese').slideDown('slow');
        list.hover(function(){
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
        return false;
      }
    })
  });
  //return false;
});
