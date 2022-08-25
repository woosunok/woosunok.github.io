$(function(){

    //list1
    $("#list-title1").click(function(){
        $('#list-area1').css('display','block');
    });

    $("#list-area1").click(function(){
        $('#list-area1').css('display','none');
    });

    //list2
    $("#list-title2").click(function(){
        $('#list-area2').css('display','block');
    });

    $("#list-area2").click(function(){
        $('#list-area2').css('display','none');
    });

    //list3
    $("#list-title3").click(function(){
        $('#list-area3').css('display','block');
    });

    $("#list-area3").click(function(){
        $('#list-area3').css('display','none');
    });

    
    //list4
    $("#list-title4").click(function(){
        $('#list-area4').css('display','block');
    });

    $("#list-area4").click(function(){
        $('#list-area4').css('display','none');
    });

    //list5
    $("#list-title5").click(function(){
        $('#list-area5').css('display','block');
    });

    $("#list-area5").click(function(){
        $('#list-area5').css('display','none');
    });

    //list6
    $("#list-title6").click(function(){
        $('#list-area6').css('display','block');
    });

    $("#list-area6").click(function(){
        $('#list-area6').css('display','none');
    });

    //list7
    $("#list-title7").click(function(){
        $('#list-area7').css('display','block');
    });

    $("#list-area7").click(function(){
        $('#list-area7').css('display','none');
    });

    //list8
    $("#list-title8").click(function(){
        $('#list-area8').css('display','block');
    });

    $("#list-area8").click(function(){
        $('#list-area8').css('display','none');
    });

    //list9
    $("#list-title9").click(function(){
        $('#list-area9').css('display','block');
    });

    $("#list-area9").click(function(){
        $('#list-area9').css('display','none');
    });


    //menu1 클릭시 효과
    $("#menu1").click(function(){
        $('#content1').css('display','block');
        $('#content2').css('display','none');
        $('#content3').css('display','none');
        $('#menu1').css('background-color','rgba(0, 0, 0, 0.08)');
        $('#menu2').css('background-color','#fff');
        $('#menu3').css('background-color','#fff');
    });

    //menu2 클릭시 효과
    $("#menu2").click(function(){
        $('#content1').css('display','none');
        $('#content2').css('display','block');
        $('#content3').css('display','none');
        $('#menu2').css('background-color','rgba(0, 0, 0, 0.08)');
        $('#menu1').css('background-color','#fff');
        $('#menu3').css('background-color','#fff');
    });

    //menu3 클릭시 효과
    $("#menu3").click(function(){
        $('#content1').css('display','none');
        $('#content2').css('display','none');
        $('#content3').css('display','block');
        $('#menu3').css('background-color','rgba(0, 0, 0, 0.08)');
        $('#menu1').css('background-color','#fff');
        $('#menu2').css('background-color','#fff');
    });
    
});
