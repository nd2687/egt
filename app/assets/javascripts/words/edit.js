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

  $('body').on('click', 'button#editDialog', function(){
    var word_id = $(this).parent('.menuWord').attr('data-word_id');
    alert(word_id);

    $("#editwordForm" + word_id).dialog(opt).dialog("open");
    $(".ui-dialog-titlebar").hide();
  });
});
