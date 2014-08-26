$(function (){
  $( "#newwordSuccess" ).dialog({
    autoOpen: false,
    show: "clip",
    hide: "fade",
    height: 50,
    closeOnEscape: true,
    draggable: false,
    position: {
      my: "center",
      at: "center",
      of: window
    },
    open: function(event, ui){
      setTimeout("$('#newwordSuccess').dialog('close')",2500);
    }
  });
  $(".ui-dialog-titlebar").hide();

  $("body").on({
    'mouseenter':function(){
      var wordType = $('.words').first().attr('data-word-type');
      var english = $(this).children('.english');
      var japanese = $(this).children('.japanese');
      $(this).css('cursor', 'pointer').css('background', '#a3d57c');
      if(wordType === "ja"){
        english.stop().slideDown();
        japanese.stop().slideUp();
      }else{
        english.stop().slideUp();
        japanese.stop().slideDown();
      }
    },
    'mouseleave':function(){
      var wordType = $('.words').first().attr('data-word-type');
      var english = $(this).children('.english');
      var japanese = $(this).children('.japanese');
      $(this).css('cursor', 'pointer').css('background', '');
      if(wordType !== "ja"){
        english.stop().slideDown();
        japanese.stop().slideUp();
      }else{
        english.stop().slideUp();
        japanese.stop().slideDown();
      }
    }
  }, '.word');

  $("body").on({
    'mouseenter':function(){
      var wordType = $('.words').first().attr('data-word-type');
      var english = $(this).children('.english');
      var japanese = $(this).children('.japanese');
      $(this).css('cursor', 'pointer').css('background', '#a3d57c');
      if(wordType === "ja"){
        english.stop().slideDown();
        japanese.stop().slideUp();
      }else{
        english.stop().slideUp();
        japanese.stop().slideDown();
      }
    },
    'mouseleave':function(){
      var wordType = $('.words').first().attr('data-word-type');
      var english = $(this).children('.english');
      var japanese = $(this).children('.japanese');
      $(this).css('cursor', 'pointer').css('background', '');
      if(wordType !== "ja"){
        english.stop().slideDown();
        japanese.stop().slideUp();
      }else{
        english.stop().slideUp();
        japanese.stop().slideDown();
      }
    }
  }, '.wordComplete');

  $('#new_word').on("click", function(){
    var user_id = $('#new_word').attr("data-user_id");
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
          //var wordType = $('div.words').first().attr('data-word-type');
          //var words = data;
          //$('html,body').animate({ scrollTop: 0 }, 'fast');
          //var ul = $('<ul class="wordUl" style="display:none;">');
          //var list = ul.append('<li class="word" style="display:none;">');
          //var nesting_en = list
          //  .append('<div class="english" style="display:none;" id="ajax_english">' + words[0] + '</div>')
          //  .append('<div class="japanese" style="display:none;">' + words[1] + '</div>');
          //var nesting_ja = list
          //  .append('<div class="english" style="display:none;" id="ajax_english">' + words[0] + '</div>')
          //  .append('<div class="japanese" style="display:none;">' + words[1] + '</div>');
          ////alert($('body').find('ul').length);
          ////$('body').find('ul:first').prepend(nesting);
          //if(wordType !== "ja"){
          //  $('body').find('div.words:not(:hidden)').prepend(nesting_en);
          //  ul.slideDown();

          $( "#newwordSuccess" ).dialog( "open" );
          $('.newForm').find('input#word_english').val('');
          $('.newForm').find('input#word_japanese').val('');
          //  $('div#ajax_english').slideDown(1100);
          //}else{
          //}
          var str_count = $('body').find('#newWordCount').text();
          var count = Number(str_count);
          $('#newWordCount').text(count+1);
        }else if(data[0] === false){
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
