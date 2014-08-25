$(function(){
  $( "#completewordSuccess" ).dialog({
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
      setTimeout("$('#completewordSuccess').dialog('close')",2500);
    }
  });
  $(".ui-dialog-titlebar").hide();

  $('body').on('click', '.completeWord', function(){
    var word_id = $(this).parent('.menuWord').attr('data-word_id');

    $.ajax({
      url: "/words/" + word_id + "/complete",
      type: "PATCH",
      data: "JSON",
      success: function(data){
        $('body').find('ul#'+ word_id).hide('slow');
        $( "#completewordSuccess" ).dialog( "open" );
        var str_count = $('body').find('span#completeCount').text();
        var count = Number(str_count);
        $('span#completeCount').text(count+1);
      }
    });
    return false;
  });
});
