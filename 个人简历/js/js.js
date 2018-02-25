//动画特效方法:例如、、滑动，弹出，显示隐藏
//滚动或显示到当前时页面出现效果方法
function topSliding(index,num,obj,children,timerOne,timerTwo,arr) {
    //index表示下标,num表示下标对应的数字,obj表示对象,childern表示对象指定的元素,timerOne需要延时的时间,timerTwo完成动画过程说需要的时间
    if(index == num){
        //判定下标是否对应
        obj.find(children).delay(timerOne).animate({
            bottom:  arr
        }, timerTwo, 'easeOutExpo');
    }
}
//右滑动
function rightSliding(index,num,obj,children,timerOne,timerTwo,arr) {
    //index表示下标,num表示下标对应的数字,obj表示对象,childern表示对象指定的元素,timerOne需要延时的时间,timerTwo完成动画过程说需要的时间
    if(index == num){
        //判定下标是否对应
        obj.find(children).delay(timerOne).animate({
            left:  arr
        }, timerTwo, 'easeOutExpo');
    }
}
//下滑动
function bottomSliding(index,num,obj,children,timerOne,timerTwo,arr) {
    //index表示下标,num表示下标对应的数字,obj表示对象,childern表示对象指定的元素,timerOne需要延时的时间,timerTwo完成动画过程说需要的时间
    if(index == num){
        //判定下标是否对应
        obj.find(children).delay(timerOne).animate({
            top:  arr
        }, timerTwo, 'easeOutExpo');
    }
}
//左滑动
function leftSliding(index,num,obj,children,timerOne,timerTwo,arr) {
    //index表示下标,num表示下标对应的数字,obj表示对象,childern表示对象指定的元素,timerOne需要延时的时间,timerTwo完成动画过程说需要的时间
    if(index == num){
        //判定下标是否对应
        obj.find(children).delay(timerOne).animate({
            right:  arr
        }, timerTwo, 'easeOutExpo');
    }
}
//动画显示隐藏
//显示
function xianshi(index,num,obj,children,timerOne) {
    if(index == num){
        obj.find(children).fadeIn(timerOne);
    }
}
//隐藏
function yingchan(index,num,obj,children,timerOne) {
    if(index == num){
        obj.find(children).fadeOut(timerOne);
    }
}
//图片滑动方法,控制方向滑动
var newtimer;//设置一个滑动的定时器
var $weizhi;//速度
var newscroll;//obj是包住ul盒子，arr是obj的属性值，num是移动的像素，obc是最外层显示可视的大小的盒子,but1和but2是控制对象滑动的方向
function newslide(obj,arr,num,but1,but2) {
    $weizhi=parseInt(obj.css(arr));//获取.box的weizhi值
    newscroll=function(){
        $weizhi-=1;//设置滚动速度
        obj.css(arr,$weizhi+'px');
        if($weizhi<-num){
            obj.css(arr);
            $weizhi=0;}//当对象值小于属性值，重置.box 属性值为0；
        newtimer =setTimeout(newscroll);
    };
    but1.click(function () {
        newscroll=function() {
            $weizhi -= 1;//设置滚动速度
            obj.css(arr, $weizhi + 'px');
            if ($weizhi < -num) {
                obj.css(arr);
                $weizhi = 0;}//当对象值小于属性值，重置.box 属性值为0；
            newtimer = setTimeout(newscroll);
        };
    });
    but2.click(function () {
        newscroll=function() {
            $weizhi += 1;//设置滚动速度
            obj.css(arr, $weizhi+ 'px');
            if ($weizhi ==0) {
                obj.css(arr);
                $weizhi =-num;}//当对象值等于0，重置.box 属性值为-num；
            newtimer = setTimeout(newscroll);
        }
    });
    setTimeout(newscroll);
    obj.hover(function(){
        clearTimeout(newtimer);
    },function(){
        setTimeout(newscroll);
    });
}