$(function(){

    /*
    $('#main1>.download>.download_button').click(function(){ 
        $(this).parent('.popup').css('display','block');
   
    });

    $('#main1>.popup>.popupclose').click(function(){ 
        $(this).parent('.popup').css('display','none');
    });
   */
    $("#btn_close").click(function(){
        $('.popup').css('display','none');
    });

    $('.download_button').click(function(){
        $('.popup').css('display','block');
    });

    $("#google").click(function(){
        $("#qrcode").attr("src", "images/androidQR.png");
    });
    $("#ios").click(function(){
        $("#qrcode").attr("src", "images/iosQR.png");
    });
});
