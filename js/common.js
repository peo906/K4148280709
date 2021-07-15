$(function(){
    if ($('#mainWrap').length) {
        $(document).on('click','.listWrap .more',function(){
            $('.listWrap ul').css('max-height','none');
            $(this).hide();
        });
    }
})
