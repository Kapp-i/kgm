// jq渲染开始
$(function(){
    var w_height = $(window).height();
    var w_width = $(window).width();
    var len = $(".txtwav").children("span").length;
    var top;
    var left;
    
    setTimeout(() => {
        $("#hidden-txt").css("top",rnd(25,518))
        $("#hidden-txt").css("left",rnd(25,518))
    }, 20);

    // 文字散开
    // setInterval(() => {
    //     for(var i = 0;i<=len-1;i++){
    //         $(".txtwav span").eq(i).css("top",rnd(1,598))
    //         $(".txtwav span").eq(i).css("left",rnd(1,598))
    //     }
    // }, 2000);

    function rnd(n, m){
        return Math.floor(Math.random()*(m-n+1)+n)
    }
    
})