// ==========================================
// SDG DASHBOARD
// ==========================================

// ----------------------------
// Gauge Animation
// ----------------------------

const meter = document.querySelector(".meter");
const scoreText = document.querySelector(".score");

let score = 0;
const finalScore = 82;

const circumference = 503;

const gaugeAnimation = setInterval(() => {

    score++;

    scoreText.innerHTML = score + "%";

    const offset = circumference - (score / 100) * circumference;

    meter.style.strokeDashoffset = offset;

    if(score >= finalScore){

        clearInterval(gaugeAnimation);

    }

},25);

// ----------------------------
// Animated Counters
// ----------------------------

function animateCounter(id,target){

    const el=document.getElementById(id);

    let value=0;

    const interval=setInterval(()=>{

        value++;

        el.innerHTML=value;

        if(value>=target){

            clearInterval(interval);

        }

    },300);

}

animateCounter("critical",1);
animateCounter("high",2);
animateCounter("medium",5);
animateCounter("low",11);

// ==========================================
// Findings Table
// ==========================================

const findings=[

{
severity:"🔴 Critical",
issue:"Hardcoded AWS Secret Key",
file:"config.py",
status:"Open"
},

{
severity:"🟠 High",
issue:"SQL Injection",
file:"login.py",
status:"Open"
},

{
severity:"🟠 High",
issue:"Command Injection",
file:"api.py",
status:"Open"
},

{
severity:"🟡 Medium",
issue:"Missing Docker USER",
file:"Dockerfile",
status:"Pending"
},

{
severity:"🟡 Medium",
issue:"Missing HEALTHCHECK",
file:"Dockerfile",
status:"Pending"
},

{
severity:"🟢 Low",
issue:"Weak CSP Header",
file:"index.html",
status:"Review"
},

{
severity:"🟢 Low",
issue:"Unused Dependency",
file:"requirements.txt",
status:"Review"
}

];

const tbody=document.getElementById("tableBody");

findings.forEach((item,index)=>{

    setTimeout(()=>{

        tbody.innerHTML+=`

<tr>

<td>${item.severity}</td>

<td>${item.issue}</td>

<td>${item.file}</td>

<td>${item.status}</td>

</tr>

`;

    },index*400);

});

// ==========================================
// Line Chart
// ==========================================

const trend=document.getElementById("trendCanvas");

const ctx=trend.getContext("2d");

trend.width=600;
trend.height=300;

const values=[100,96,94,92,90,88,86,84,82];

let step=0;

function drawTrend(){

ctx.clearRect(0,0,600,300);

// Grid
ctx.strokeStyle="#123";

for(let i=0;i<=6;i++){

ctx.beginPath();

ctx.moveTo(0,i*50);

ctx.lineTo(600,i*50);

ctx.stroke();

}

// Line

ctx.beginPath();

ctx.lineWidth=4;

ctx.strokeStyle="#00d4ff";

values.forEach((v,i)=>{

let x=i*70+30;

let y=250-v*2;

if(i===0){

ctx.moveTo(x,y);

}else{

ctx.lineTo(x,y);

}

if(i<=step){

ctx.fillStyle="#00ff99";

ctx.beginPath();

ctx.arc(x,y,5,0,Math.PI*2);

ctx.fill();

ctx.beginPath();

ctx.moveTo(i===0?x:x-70,y);

}

});

ctx.beginPath();

ctx.lineWidth=4;

ctx.strokeStyle="#00d4ff";

for(let i=0;i<=step;i++){

let x=i*70+30;

let y=250-values[i]*2;

if(i===0){

ctx.moveTo(x,y);

}else{

ctx.lineTo(x,y);

}

}

ctx.stroke();

if(step<values.length-1){

step++;

setTimeout(drawTrend,350);

}

}

drawTrend();

// ==========================================
// Pie Chart
// ==========================================

const pie=document.getElementById("pieCanvas");

const pctx=pie.getContext("2d");

pie.width=350;
pie.height=350;

const data=[1,2,5,11];

const colors=[

"#ff0033",

"#ff9900",

"#ffd000",

"#00ff99"

];

const total=data.reduce((a,b)=>a+b);

let start=0;

data.forEach((value,index)=>{

const slice=(value/total)*Math.PI*2;

pctx.beginPath();

pctx.moveTo(175,175);

pctx.arc(

175,

175,

120,

start,

start+slice

);

pctx.closePath();

pctx.fillStyle=colors[index];

pctx.fill();

start+=slice;

});

// Legend

const labels=[

"Critical",

"High",

"Medium",

"Low"

];

labels.forEach((text,index)=>{

pctx.fillStyle=colors[index];

pctx.fillRect(20,20+index*30,15,15);

pctx.fillStyle="white";

pctx.font="16px Segoe UI";

pctx.fillText(text,45,33+index*30);

});

// ==========================================
// Download Buttons (Demo)
// ==========================================

document.querySelectorAll(".downloads button").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.innerHTML="✔ Download Started";

setTimeout(()=>{

btn.innerHTML=btn.innerHTML.replace("✔ ","⬇ ");

},2000);

});

});

// ==========================================
// Notification
// ==========================================

setTimeout(()=>{

const note=document.createElement("div");

note.innerHTML="✅ AI Scan Completed Successfully";

note.style.position="fixed";
note.style.top="20px";
note.style.right="20px";
note.style.padding="15px 25px";
note.style.background="#00c853";
note.style.color="white";
note.style.borderRadius="10px";
note.style.boxShadow="0 0 20px rgba(0,255,0,0.4)";
note.style.zIndex="9999";

document.body.appendChild(note);

setTimeout(()=>{

note.remove();

},4000);

},1000);