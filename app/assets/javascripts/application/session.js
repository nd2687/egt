$(function(){
  $( ".alert" ).dialog({
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
      setTimeout("$('.alert').dialog('close')",2500);
    }
  });
  $(".ui-dialog-titlebar").hide();
  $( ".alert" ).parent().css({position:"fixed"}).end().dialog( "open" );
})
