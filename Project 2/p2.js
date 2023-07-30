const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);

const multi=document.getElementById("multi");
const inp=document.getElementById('placer');
const former=document.getElementById("form");
const scores=document.getElementById("score");

multi.innerText=`What is ${num1} multiply by ${num2}`;
const ans=num1*num2;


let score=JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
scores.innerText=`score: ${score} `;

former.addEventListener("submit",()=>{
    const help=+inp.value;
    if(ans===help){
        score++;
        localstore();
    }
    else{
        score--;
        localstore();
    }
});
function localsstore(){
    localStorage.setItem('score',JSON.stringify(score));
}
