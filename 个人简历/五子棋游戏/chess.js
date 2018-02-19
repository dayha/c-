//初始化
var black=new Image();
var white=new Image();
black.src="img/black.png";
white.src="img/white.png";

var canvas;
var ctx;

var reset= [];
for (var i=1;i<21;i++){
    reset[i]= [];
    for(var j=1;j<23;j++){
        reset[i][j]=0;
    }
}
var itrue=true;
window.onload=function () {
    var waiguan=document.getElementsByClassName('waiguan')[0];
    var btn1=document.getElementsByClassName('btn1')[0];
    var btn2=document.getElementsByClassName('btn2')[0];
    var btn3=document.getElementById('btnBg1');
    var begin=document.getElementById('begin');

    btn1.onclick=function () {
        window.location.reload();
    };
    btn2.onclick=function () {
        window.location.reload();
    };

    btn3.onclick=function () {
        waiguan.style.background=getBGColor();
    };
    //棋盘线
    xiTiao();
    //棋盘9个黑点
    heiDian();
    //下qi子
    begin.onclick=function () {
        canvas.onclick=function (ev) {
            var oEvent=ev||event;
            var gundonT=document.documentElement.scrollTop;
            var gundonL=document.documentElement.scrollLeft;
            var x=oEvent.clientX+gundonL;
            var y=oEvent.clientY+gundonT;

            var canvasx=canvas.offsetLeft;
            var canvasy=canvas.offsetTop;

            var cx=Math.round((x-canvasx)/40);
            var cy=Math.round((y-canvasy)/40);
            if(reset[cx][cy]==0){
                if(itrue){
                    ctx.drawImage(black,40*cx-18,40*cy-18);
                    reset[cx][cy]=2;
                    win(2,cx,cy);
                    itrue=false;

                }else {
                    ctx.drawImage(white,40*cx-18,40*cy-18);
                    reset[cx][cy]=1;
                    win(1,cx,cy);
                    itrue=true;
                }
            }
        }
    }

};
var winblack;
var winbwhite;
// console.log(winblack);
function win(num,cx,cy) {
    winblack=document.getElementById('winblack');
    // console.log(winblack);
    winbwhite=document.getElementById('winbwhite');
    var resecx=cx;
    var resecy=cy;
    var total=1;
    //水平
    while (cx-1>0&&reset[cx-1][cy]==num){
        total++;
        cx--;
    }
    cx=resecx;
    cy=resecy;
    while (cx+1<19&&reset[cx+1][cy]==num){
        total++;
        cx++;
    }iswin(total,num);
    //垂直
    cx=resecx;
    cy=resecy;
    total=1;
    while (cy-1>0&&reset[cx][cy-1]==num){
        total++;
        cy--;
    }
    cx=resecx;
    cy=resecy;
    while (cy+1<19&&reset[cx][cy+1]==num){
        total++;
        cy++;
    }iswin(total,num);
    //左下右上
    cx=resecx;
    cy=resecy;
    total=1;
    while (cy-1>0&&cx+1&&reset[cx+1][cy-1]==num){
        total++;
        cy--;
        cx++;
    }
    cx=resecx;
    cy=resecy;
    while (cy+1<19&&cx-1&&reset[cx-1][cy+1]==num){
        total++;
        cy++;
        cx--;
    }iswin(total,num);

    //左上右下
    cx=resecx;
    cy=resecy;
    total=1;
    while (cy+1>0&&cx+1&&reset[cx+1][cy+1]==num){
        total++;
        cy++;
        cx++;
    }
    cx=resecx;
    cy=resecy;
    while (cy-1<19&&cx-1&&reset[cx-1][cy-1]==num){
        total++;
        cy--;
        cx--;
    }iswin(total,num);
}

function xiTiao() {
     canvas=document.getElementById('canvas');
     ctx=canvas.getContext('2d');
    for (var i=0;i<19;i++){
        ctx.strokeStyle='black';
        ctx.moveTo(40,40*i+40);
        ctx.lineTo(760,40*i+40);
        ctx.moveTo(40*i+40,40);
        ctx.lineTo(40*i+40,760);
        ctx.stroke();
    }
}

function heiDian() {
     canvas=document.getElementById('canvas');
     ctx=canvas.getContext('2d');
    for(var i=0;i<3;i++){
        ctx.beginPath();
        ctx.fillStyle='black';
        var ss= 240*i;
        ctx.arc(160+ss,160,5,0,2*Math.PI);
        ctx.arc(160+ss,400,5,0,2*Math.PI);
        ctx.arc(160+ss,640,5,0,2*Math.PI);
        ctx.fill();
    }
}
function iswin(to,n) {
    if(to==5){
        if(n==2){

            winblack.style.display="block";
        }else {
            winbwhite.style.display="block";

        }
    }
}
// 随机颜色
function getBGColor(){
    return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
}

