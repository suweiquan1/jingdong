/**
 * Created by ��ΰȫ on 2017/5/30.
 */

//ͷ��header
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
//ͷ��header

//������banner
var swiper = new Swiper('.swiper-container',{
    //  �л�Ϊ��ֱ�ֲ�
    //direction:"vertical",
    //  ѭ���ֲ�
    loop:"true",
    //  �����Ҫ��ҳ��
    pagination: '.swiper-pagination'
    //  �����Ҫ ǰ��������
    //nextButton: '.swiper-button-next',
    //prevButton: '.swiper-button-prev',
    //  �����Ҫ������
    //scrollbar: '.swiper-scrollbar'

});
//������banner

//����main
var i=18000;  // 5��Сʱ

//  ��ʱ��
setInterval(function(){

    i=i+1;

    // Сʱ  ת��������
    var h=parseInt(i/3600);

    // ����
    var m=parseInt(i%3600/60);   //  %�ǳ���������

    // ��
    var s=i%3600%60;

    $(".h1").text( parseInt(h/10) );
    $(".h2").text(h%10);

    $(".m1").text( parseInt(m/10) );
    $(".m2").text(m%10);

    $(".s1").text( parseInt(s/10) );
    $(".s2").text(s%10);

},1000);
//����main