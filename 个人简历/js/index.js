$(function(){
    $('#MyPic').find('img').fadeIn(3000);
    $('#information').delay(500).animate({left: '0', right:'0', top:'50px', margin:'30px auto auto auto'}, 1500, 'easeOutExpo');
    $('.dataBox').find('li').delay(500).animate({top:'0'},1500,'easeOutExpo');

    var objleft=$('.ulone').children().clone(true);
    $('.ulTwo').append(objleft);
    newslide($('.walp'),'left',990,$('.btn1'),$('.btn2'));

    //轮播图点击出发跳转项目
    $('.oli').eq(0).click(function () {
       location.href="麦子商城/index.html";
    });
    $('.oli').eq(1).click(function () {
        location.href="五子棋游戏/Chess.html";
    });
    $('.oli').eq(2).click(function () {
        location.href="商城项目/HomePage.html";
    });


    $('#dowebok').fullpage({
        anchors: ['page1', 'page2', 'page3'],
        menu: '#menu',
        afterLoad: function(anchorLink, index){
            rightSliding(index,2,$('.section2'),'.mytext',500,1000,'0');
            topSliding(index,2,$('.section2'),'p',1000,1500,'0');

            rightSliding(index,2,$('.small_box'),'.mytextTwo',3000,1000,'0');
            topSliding(index,1,$('.mytextTwo'),'.p1',2000,1000,'0');

            $('.small_box').eq(0).animate({left:'0',top:'0'},1500,'easeOutExpo');
            $('.small_box').eq(1).animate({right:'0',top:'0'},1500,'easeOutExpo');
            $('.small_box').eq(2).animate({left:'0',bottom:'0'},1500,'easeOutExpo');
            $('.small_box').eq(3).animate({right:'0',bottom:'0'},1500,'easeOutExpo');

            xianshi(index,2,$('.contentOne'),'p',4000);

            xianshi(index,3,$('.section3'),'p',2000);
        },
        onLeave: function(index, direction){
            rightSliding(index,'2',$('.section2'),'.mytext',500,1000,'-50%');
            topSliding(index,'2',$('.section2'),'p',500,1500,'-120%');

            rightSliding(index,'2',$('.small_box'),'.mytextTwo',3000,1000,'-50%');
            topSliding(index,'1',$('.mytextTwo'),'.p1',2000,1000,'-120%');

            $('.small_box').eq(0).animate({left:'-100%',top:'-100%'},1500,'easeOutExpo');
            $('.small_box').eq(1).animate({right:'-100%',top:'-100%'},1500,'easeOutExpo');
            $('.small_box').eq(2).animate({left:'-100%',bottom:'-100%'},1500,'easeOutExpo');
            $('.small_box').eq(3).animate({right:'-100%',bottom:'-100%'},1500,'easeOutExpo');

            yingchan(index,'2',$('.contentOne'),'p',4000);

            yingchan(index,'3',$('.section3'),'p',2000);

        }
    });
});
