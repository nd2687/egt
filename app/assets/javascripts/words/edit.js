$(function(){
    //　モーダル初期設定
    $('#modal').dialog({
        autoOpen: false,  // 自動でオープンしない
        modal: true,      // モーダル表示する
        resizable: false, // リサイズしない
        draggable: false, // ドラッグしない
        show: "clip",     // 表示時のエフェクト
        hide: "fade"      // 非表示時のエフェクト
    });
 
    // .selecter クリック時にモーダル表示
    $('.selecter').click(function () {
        $('#modal').dialog('open');
        return false;
    });
 
    // モーダル画面以外のブラウザ領域をクリックで、モーダル非表示
    $(document).on('click', '.ui-widget-overlay', function(){
        $(this).prev().find('.ui-dialog-content').dialog('close');
    });
});
