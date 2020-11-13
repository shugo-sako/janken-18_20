//

// 画像をランダムに表示させたい。↓
//var startBtn =document.querySelector(".match_start")
document.querySelector(".match_start").onclick=function(){
    var random=Math.random()*3;
    console.log(random);
    if(random==0){
    console.log("グー");
    }else if(random==1){
        console.log("パー");
    }else if(random==2){
        console.log("チョキ");
    }


// 0=グー、1＝パー、2＝チョキ

var myGooBtn = document.querySelector(".rock");
myGooBtn.onclick = function(){
if(random==0){
    console.log("あいこ");
}else if(random==1){
    console.log("負け");
}else if(random==2);{
    console.log("勝ち");
}
}

var myChokiBtn = document.querySelector(".scissors");
myChokiBtn.onclick = function(){
    if(random==0){
        console.log("負け");
    }else if(random==1){
        console.log("勝ち");
    }else if(random==2);{
        console.log("あいこ");
    }
    }

var myPaaBtn = document.querySelector(".paper");
myPaaBtn.onclick = function(){
    if(random==0){
        console.log("勝ち");
    }else if(random==1){
        console.log("あいこ");
    }else if(random==2);{
        console.log("負け");
    }
    
    }


    
};