var maskimg=document.querySelector(".mask>img");
var mask=document.querySelector(".mask");
var li=document.querySelectorAll(".box>ul>li");
var footul=document.querySelector(".foot>ul");
var good=document.querySelector(".good");
var sorry=document.querySelector(".sorry");
var okevent=document.querySelector(".okevent");
var but=document.querySelector(".but");
//定义时间判断
var timernum=0;

maskimg.onclick=function () {
    mask.style.display="none";

    caltime();
}

var caltimefalg=true;
//设置10秒倒计时
var caltimer;
function caltime() {
    timernum=0;
    clearInterval(caltimer);
    caltimer=setInterval(function () {
            timernum++;

            if(timernum>=10 && caltimefalg==true){
                mask.style.display="block";
                clearInterval(caltimer);

            }

        },1000)


}

//计数器
var num=1;

//点击事件
   for(var i=0;i<li.length;i++){
       li[i].index=i;
       li[i].onclick=function () {
           var zhi=li[this.index].value;
           if(zhi==num && num<25){
               var  el=li[this.index];
               // var newel=el.cloneNode();
               footul.append(el);
               num++;
               document.documentElement.scrollTop=0;
               windowtxt();

           }
           else if(zhi==num && num==25){
               var  el=li[this.index];
               // var newel=el.cloneNode();
               footul.append(el);
               document.documentElement.scrollTop=0;
               caltimefalg=false;
               oktxt();
           }
           else {
               document.documentElement.scrollTop=0;
               sorrytxt();

           }
       }
   }
   
   //弹框:成功事件
function windowtxt() {
    good.style.display="block";
    timernum=1;
    var timer=setTimeout(function () {

        good.style.display="none";
        mask.style.display="block";
        // falg=false;
    },3000);
}

//弹框:失败事件
function sorrytxt() {
    sorry.style.display="block";
    timernum=1;
    var timer=setTimeout(function () {

        sorry.style.display="none";
        mask.style.display="block";
        // falg=false;
    },3000);
}

//弹框:恭喜事件
function oktxt() {
    okevent.style.display="block";
    timernum=1;
    // var timer=setTimeout(function () {
    //
    //     sorry.style.display="none";
    //     // mask.style.display="block";
    //     // falg=false;
    // },3000);
}

//成果展示
but.onclick=function () {
    okevent.style.display="none";
}