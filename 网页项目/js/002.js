var ospan=document.getElementById("span");
var oa=document.getElementById('a');
var str=ospan.innerHTML;
console.log(str);
var onoff=true;
oa.onclick=function(){
    if(onoff){
        ospan.innerHTML=str.substring(0,12);
        oa.innerHTML=".....>>展开";
    }else{
        ospan.innerHTML=str;
        oa.innerHTML=">>收缩"
    }
    onoff=!onoff;
}
