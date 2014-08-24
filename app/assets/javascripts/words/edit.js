$(function(){
  var opt = {
        autoOpen: false,
        show: "clip",
        hide: "fade",
        closeOnEscape: true,
        draggable: false,
        modal: true,
        position: {
          my: "center",
          at: "center",
          of: window
        },
        buttons: [{
          text: "Cancel",
          click: function() {
             $( this ).dialog( "close" );
          }
       }]
  };

  $( "#editwordSuccess" ).dialog({
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
      setTimeout("$('#editwordSuccess').dialog('close')",2500);
    }
  });
  $(".ui-dialog-titlebar").hide();

  $('body').on('click', 'button#editDialog', function(){
    var word_id = $(this).parent('.menuWord').attr('data-word_id');
    $("#editwordForm" + word_id).dialog(opt).dialog("open").find('#editwordSubmit' + word_id).on('click', function(){
      var word_id = $(this).attr('data-word_id');
      var params = {}
      params['english'] = $('div#editwordForm' + word_id).find('input#word_english').val();
      params['japanese'] = $('div#editwordForm' + word_id).find('input#word_japanese').val();
      params['word_id'] = word_id;

      $.ajax({
        url: '/words/' + word_id,
        type: 'PATCH',
        data: params,
        success: function(data){
          console.log(data)
          if(data[0] === false){
            data.shift();
            var errors = data;
            var error = "";
            $.each(errors, function(i, value){
              error += value + "\n"
            });
            alert(error);
          }else{
            $("#editwordForm" + word_id).dialog(opt).dialog("close");
            $( "#editwordSuccess" ).dialog( "open" );
            //更新した値のリアルタイム表示反映、more、japanese対応
            $('body').find('ul#'+params['word_id']).children('li#'+params['word_id']).children('div.english').val(params['english']);
            $('body').find('ul#'+params['word_id']).children('li#'+params['word_id']).children('div.japanese').val(params['japanese']);
          }
          return false;
        }
      })
    });
    $(".ui-dialog-titlebar").hide();
  });
});
