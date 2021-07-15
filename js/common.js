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
            if (!$('input[name=idInput]').val() || !$('input[name=pasWrdInput]').val()) {
                $('.error').show();
            }else{
                $('.error').hide();
            }
        });
    }
    if ($('#buyPageWrap').length) {
        $(document).on('click','.btnBox ul li button',function () {
            var price = $(this).attr('data-price');
            $('.buyPrice').val( comma(price));
            $('input[name=price]').val(price);
        });
        $(document).on('click','.buyBtn',function () {
            var pirce = $('input[name=price]').val();
            console.log(pirce);
            if (pirce) {
                if (pirce > 9999){
                    $('#popupWrap').show();
                }else{
                    alert('만원 이상 구매 가능합니다.');
                }
            }else{
                alert('금액을 입력해주세요.');
            }

        });
        function comma(str) {
            str = String(str);
            return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
        }
    }





})
