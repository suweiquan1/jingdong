/**
 * Created by 苏伟全 on 2017/5/30.
 */

//头部header
$(window).scroll(
    function(){
        var i=$(window).scrollTop();
        if(i>=139){
            $("header").addClass("bianse");
        }
        if(i<=139){
            $("header").removeClass("bianse");
        }
    }
);
//头部header

//横幅广告banner
var swiper = new Swiper('.swiper-container',{
    //  切换为垂直轮播
    //direction:"vertical",
    //  循环轮播
    loop:"true",
    //  如果需要分页器
    pagination: '.swiper-pagination'
    //  如果需要 前进、后退
    //nextButton: '.swiper-button-next',
    //prevButton: '.swiper-button-prev',
    //  如果需要进度条
    //scrollbar: '.swiper-scrollbar'

});
//横幅广告banner

//主体main
var i=18000;  // 5个小时

//  计时器
setInterval(function(){

    i=i+1;

    // 小时  转换成整数
    var h=parseInt(i/3600);

    // 分钟
    var m=parseInt(i%3600/60);   //  %是除完后的余数

    // 秒
    var s=i%3600%60;

    $(".h1").text( parseInt(h/10) );
    $(".h2").text(h%10);

    $(".m1").text( parseInt(m/10) );
    $(".m2").text(m%10);

    $(".s1").text( parseInt(s/10) );
    $(".s2").text(s%10);

},1000);
//主体main