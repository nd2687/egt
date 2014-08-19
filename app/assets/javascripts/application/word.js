$(function (){
  $("body").on({
    'mouseenter':function(){
      var english = $(this).children('.english');
      var japanese = $(this).children('.japanese');
      $(this).css('cursor', 'pointer').css('background', '#a3d57c');
      english.stop().slideUp();
      japanese.stop().slideDown();
    },
    'mouseleave':function(){
      var english = $(this).children('.english');
      var japanese = $(this).children('.japanese');
      $(this).css('cursor', 'pointer').css('background', '');
      english.stop().slideDown();
      japanese.stop().slideUp();
    }
  }, 'li.word');

  $('#new_word').on("click", function(){
    var user_id = $('button#new_word').attr("data-user_id");
    var params = {}
    params['english'] = $('input#word_english').val();
    params['japanese'] = $('input#word_japanese').val();
    params['user_id'] = user_id;

    $.ajax({
      url: '/words',
      type: 'POST',
      data: params,
      success: function(data){
        if(data.length && $.isArray(data) && data[0] !== false){
          var words = data;
          $('html,body').animate({ scrollTop: 0 }, 'fast');
          var list = $('<li class="word" style="display:none;">');
          var nesting = list
            .append('<div class="english" style="display:none;" id="ajax_english">' + words[0] + '</div>')
            .append('<div class="japanese" style="display:none;">' + words[1] + '</div>');
          //alert($('body').find('ul').length);
          //$('body').find('ul:first').prepend(nesting);
          $('body').find('ul:not(:hidden)').prepend(nesting);
          list.slideDown();

          $('input#word_english').val('');
          $('input#word_japanese').val('');
          $('div#ajax_english').slideDown(1100);
        } else if(data[0] === false){
          data.shift();
          var errors = data;
          var error = "";
          $.each(errors, function(i, value){
            error += value + "\n"
          });
          alert(error);
        }

        return false;
      }
    })
  });
});
