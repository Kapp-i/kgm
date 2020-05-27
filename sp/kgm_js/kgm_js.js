// 鼠标浮动时文字消失，鼠标退出时文字重新显示
$(function(){
    var arr = [];
    $(".htmleaf-content span").mouseover(function(){
        var i = $(this).index()
        arr[i] = $(this).text()
        $(this).text(" ")
    })
    $(".htmleaf-content span").mouseleave(function(){
        var i = $(this).index()
        $(this).text(arr[i])
    })

   
})

// 鼠标悬浮时显示 because 移走时隐藏
$(function(){
     $("#hidden-txt").mouseleave(function(){
        $(this).css("opacity",0);
    })
    $("#hidden-txt").mouseover(function(){
        $(this).css("opacity",1);
    })
})

// 截取url访问地址的参数
function getQueryStringRegExp(name)
{
    var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i");
    if (reg.test(location.href)) return unescape(RegExp.$2.replace(/\+/g, " ")); return "";
};