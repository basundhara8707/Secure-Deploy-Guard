const buttons=document.querySelectorAll("button");

buttons.forEach(btn=>{

btn.onclick=()=>{

const old=btn.innerHTML;

btn.innerHTML="✔ Export Successful";

btn.style.background="#00c853";

setTimeout(()=>{

btn.innerHTML=old;

btn.style.background="#00d4ff";

},2500);

};

});

// Animated Counters

function animate(id,target){

const el=document.getElementById(id);

let n=0;

const timer=setInterval(()=>{

n++;

el.innerHTML=n+(id=="trustScore"?"%":"");

if(n>=target){

clearInterval(timer);

}

},20);

}

animate("trustScore",82);
animate("files",418);
animate("issues",19);

// Auto scroll effect (for demo)

setTimeout(()=>{

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

},3500);