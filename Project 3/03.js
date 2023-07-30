const cont=document.querySelector(".hello");                                                        
cont.addEventListener("mouseover",(event)=>{
    const x=event.pageX-cont.offsetLeft;
    const y=event.pageY-cont.offsetTop;
     // event.pageX - from the body to the mouse pointer position
    // element.offsetLeft - from the body to the edge of the container but from the left direction
    cont.style.setProperty("--xPos",x+"px");
    cont.style.setProperty("--yPos",y+"px");
});