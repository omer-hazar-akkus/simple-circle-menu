var a=0;
function ackapa(){
    if(a==0){
        document.getElementById("mainbuton").style.transform="rotate(135deg)";
        document.getElementById("redbutton").style.transform="translate(-60px,-60px)";
        document.getElementById("greenbutton").style.transform="translate(-80px,0px)";
        document.getElementById("bluebutton").style.transform="translate(0px,-80px)";
        a=1;
    }
    else{
        document.getElementById("mainbuton").style.transform="rotate(0deg)";
        document.getElementById("redbutton").style.transform="translate(0px,0px)";
        document.getElementById("greenbutton").style.transform="translate(0px,0px)";
        document.getElementById("bluebutton").style.transform="translate(0px,0px)";
        a=0;
    }

}