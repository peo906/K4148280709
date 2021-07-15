$(function(){
    if ($('#mainWrap').length) {
        $(document).on('click','.listWrap .more',function(){
            $('.listWrap ul').css('max-height','none');
            $(this).hide();
        });
    }

    if ($('#loginWrap').length) {
        $(document).on('click','.box label',function () {
            if ($(this).hasClass('idClear')) {
                $('input[name=idInput]').val('').focus();
            }else{
                $('input[name=pasWrdInput]').val('').focus();
            }
        });
        $(document).on('click','.loginBtn',function () {
            if (!$('input[name=idInput]').val() && !$('input[name=pasWrdInput]').val()) {
                $('.error').show();
            }else{
                $('.error').hide();
            }

        });

    }
})
