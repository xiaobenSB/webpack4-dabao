require('../index.css');
require('../timg.jpg');
require('./index2.js')
var width = document.body.clientWidth || document.documentElement.clientWidth,
    cover = document.getElementsByClassName("cover")[0],
    areaUl = document.getElementsByClassName("areaUl")[0],
    timePay = document.getElementsByClassName("timepay")[0],
    close = timePay.getElementsByClassName("close")[0],
    btn = timePay.getElementsByClassName("btn")[0],
    clearB = document.getElementsByClassName("did")[0],
    dd = clearB.getElementsByTagName("dd"),
    flag = false ;
areaUl.addEventListener("click",function(ev){
  var e = window.event || ev ;
if(e.target.nodeName.toLowerCase() === "span"){
   cover.style.display = "block";
   e.target.parentElement.parentElement.parentElement.style.transition = ".2s";
   e.target.parentElement.parentElement.parentElement.style.transform = "translateY(-10rem)";
   e.target.parentElement.parentElement.parentElement.addEventListener("transitionend",function(){ this.style.transform = "translateY(-.2rem)";timePay.style.display = "block";timeBth(timePay.childNodes[5],e.target); },-0);
}
},-0);
//弹窗支付时间
var color =null;
var spans;
function timeBth(nodelist,span){
var len = nodelist.childNodes.length;
var a=nodelist.childNodes[1].childNodes[0].innerHTML;
if(span.parentElement.parentElement.id.length===0||span.parentElement.parentElement.id.length===1) {return};
// /\s/.test(span.parentElement.parentElement.id)--这个是错的
var aLiText;
//校验传进来的时间空格
/\s/g.test(span.parentElement.parentElement.id)===true?aLiText=span.parentElement.parentElement.id.replace(/\s/g,""):aLiText=span.parentElement.parentElement.id;
aLiText=aLiText.split("_");
var c = [];
spans = span;
 for(var i=0;i<len;i++){
    if(nodelist.childNodes[i].nodeType === 1){
	 if(!color){ nodelist.childNodes[i].childNodes[0].style.backgroundColor="#a8a8a8";}
	  nodelist.childNodes[i].childNodes[0].onclick=null;
      for(var b=0;b<aLiText.length;b++){ 
        c[i]=""+aLiText[b]+"分钟";  
       
       if( c[i].indexOf(nodelist.childNodes[i].childNodes[0].innerHTML)!== -1) { //出现过的就绑定
        nodelist.childNodes[i].childNodes[0].style.backgroundColor="#fff";
       nodelist.childNodes[i].childNodes[0].onclick=spanOnClick;
        }
        
       // if( c[i].indexOf(nodelist.childNodes[i].childNodes[0].innerHTML)=== -1) {  console.log(c[i],nodelist.childNodes[i].childNodes[0].innerHTML); } 这个是错的

      }
    
    }
  }
 
};
function spanOnClick(){
   //for(var j=0;j<dd.length;j++){dd[j].childNodes[0].style.background = "#fff"}
 if(color){color.style.backgroundColor = "#fff";}
         this.style.backgroundColor = "#ff9800";
         color = this;
         pay(color,spans);

}

function pay(colors,span){
 if(span){
   btn.style.backgroundColor = "#ff9800";
   btn.innerHTML = "提交订单";
   btn.onclick = function(){
    var value=colors.innerHTML,
        spanClass=span.className; 
     value=~~(value.split("分钟")[0])*60;
    btn.href = "index.php?c=index&a=wx_pay&time="+value+"&region="+spanClass+"";
    }
  }else {
  btn.style.backgroundColor = "#ccc";
  btn.style.color ="#fff";
  btn.innerHTML = "立刻支付";
  if(flag){
  color=null;
  flag=false;
  
  }
  
  }
};
close.addEventListener("click",function(){
  timePay.style.display = "none";
  cover.style.display = "none";
  var span = null;
  flag = true;
  pay(color,span);
},-0);

/*空格去除法
function trim(param) {
    if ((vRet = param) == '') { return vRet; }
    while (true) {
        if (vRet.indexOf (' ') == 0) {
            vRet = vRet.substring(1, parseInt(vRet.length));
        } else if ((parseInt(vRet.length) != 0) && (vRet.lastIndexOf (' ') == parseInt(vRet.length) - 1)) {
            vRet = vRet.substring(0, parseInt(vRet.length) - 1);
        } else {
            return vRet;
        }
    }
}
*/
