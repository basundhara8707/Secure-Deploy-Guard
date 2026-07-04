const browse=document.getElementById("browseBtn");

const file=document.getElementById("fileInput");

const filename=document.getElementById("filename");

const drop=document.getElementById("drop-area");

const scan=document.getElementById("scanBtn");

const fill=document.querySelector(".progress-fill");

const text=document.getElementById("progressText");

browse.onclick=()=>file.click();

file.onchange=()=>{

filename.innerHTML=file.files[0].name;

};

drop.addEventListener("dragover",e=>{

e.preventDefault();

drop.classList.add("drag");

});

drop.addEventListener("dragleave",()=>{

drop.classList.remove("drag");

});

drop.addEventListener("drop",e=>{

e.preventDefault();

drop.classList.remove("drag");

const f=e.dataTransfer.files[0];

filename.innerHTML=f.name;

});

scan.onclick=()=>{

let p=0;

text.innerHTML="Uploading Project...";

let interval=setInterval(()=>{

p+=2;

fill.style.width=p+"%";

text.innerHTML="Uploading "+p+"%";

if(p>=100){

clearInterval(interval);

text.innerHTML="Upload Successful ✓";

setTimeout(()=>{

window.location="scanning.html";

},1200);

}

},40);

};