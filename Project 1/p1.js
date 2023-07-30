let h1=document.getElementById("hours");
let h2=document.getElementById("minutes");
let h3=document.getElementById("seconds");
let amp=document.getElementById("apm");

function update(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let amper='AM';
    if(h1>12){
        h1=h1-12;
        amp='PM';
    }
    if(m<10){
        m='0'+m;
    }
    if(h<10){
        h='0'+h;
    }
    if(s<10){
        s='0'+s;
    }
    h1.innerText=h;
    h2.innerText=m;
    h3.innerText=s;
    amp=amper;
    setTimeout(()=>{
        update();
    },1000);
}

update();