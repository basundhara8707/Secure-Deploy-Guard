// =====================================
// SDG AI LIVE SCANNING SIMULATION
// =====================================

const progressFill = document.getElementById("progressFill");
const progressNumber = document.getElementById("progressNumber");

const terminal = document.getElementById("terminal");

const files = document.getElementById("files");
const threats = document.getElementById("threats");
const trust = document.getElementById("trust");
const cpu = document.getElementById("cpu");
const memory = document.getElementById("memory");
const timer = document.getElementById("time");

const findingList = document.getElementById("findingList");

const dashboardBtn = document.getElementById("dashboardBtn");

const completeText = document.getElementById("completeText");

let progress = 0;
let fileCount = 0;
let threatCount = 0;
let trustScore = 100;

let seconds = 0;

// =====================================
// AGENTS
// =====================================

const agents = [
    document.querySelector("#agent1 .status"),
    document.querySelector("#agent2 .status"),
    document.querySelector("#agent3 .status"),
    document.querySelector("#agent4 .status"),
    document.querySelector("#agent5 .status"),
    document.querySelector("#agent6 .status"),
    document.querySelector("#agent7 .status"),
    document.querySelector("#agent8 .status")
];

const agentNames = [
    "Running...",
    "Running...",
    "Running...",
    "Running...",
    "Running...",
    "Running...",
    "Running...",
    "Thinking..."
];

// =====================================
// TERMINAL LOGS
// =====================================

const logs = [

"Initializing Secure Deploy Guard...",

"Loading AI Orchestrator...",

"Loading MCP Servers...",

"Bandit MCP Connected",

"Semgrep MCP Connected",

"Docker Scanner Ready",

"Secret Detector Ready",

"Loading Policy Engine",

"Loading Trust Score Calculator",

"Connecting LLM Judge",

"Scanning app.py",

"Scanning login.py",

"Scanning dashboard.html",

"Scanning api.py",

"Scanning Dockerfile",

"Scanning docker-compose.yml",

"Scanning config.yaml",

"Scanning requirements.txt",

"Checking Dependencies",

"Fetching CVE Database",

"Running Red Team",

"Running Blue Team",

"Generating Green Team Suggestions",

"Running Semantic Analysis",

"Evaluating Security Policies",

"Calculating Trust Score",

"Preparing Report"

];

let logIndex = 0;

// =====================================
// FINDINGS
// =====================================

const findings = [

{
level:"critical",
title:"Hardcoded AWS Secret Key",
file:"config.py"
},

{
level:"high",
title:"SQL Injection Vulnerability",
file:"login.py"
},

{
level:"high",
title:"Command Injection",
file:"api.py"
},

{
level:"medium",
title:"Dockerfile Missing USER",
file:"Dockerfile"
},

{
level:"medium",
title:"Missing HEALTHCHECK",
file:"Dockerfile"
},

{
level:"low",
title:"Unused Dependency",
file:"requirements.txt"
},

{
level:"low",
title:"Weak CSP Header",
file:"index.html"
}

];

let findingIndex=0;

// =====================================
// TIMER
// =====================================

setInterval(()=>{

seconds++;

let m=Math.floor(seconds/60);

let s=seconds%60;

timer.innerHTML=
String(m).padStart(2,"0")
+
":"
+
String(s).padStart(2,"0");

},1000);

// =====================================
// AGENTS START
// =====================================

agents.forEach((agent,i)=>{

setTimeout(()=>{

agent.innerHTML=agentNames[i];

agent.style.color="#00ff99";

},i*800);

});

// =====================================
// TERMINAL
// =====================================

function addLog(){

if(logIndex>=logs.length)return;

const line=document.createElement("div");

line.innerHTML="> "+logs[logIndex];

terminal.appendChild(line);

terminal.scrollTop=terminal.scrollHeight;

logIndex++;

}

setInterval(addLog,800);

// =====================================
// FINDINGS
// =====================================

function addFinding(){

if(findingIndex>=findings.length)return;

const f=findings[findingIndex];

const card=document.createElement("div");

card.className="finding "+f.level;

card.innerHTML=`

<div>

<h3>${f.title}</h3>

<span>${f.file}</span>

</div>

<strong>${f.level.toUpperCase()}</strong>

`;

findingList.prepend(card);

findingIndex++;

threatCount++;

threats.innerHTML=threatCount;

switch(f.level){

case "critical":

trustScore-=20;

break;

case "high":

trustScore-=10;

break;

case "medium":

trustScore-=5;

break;

case "low":

trustScore-=2;

break;

}

trust.innerHTML=trustScore+"%";

}

setInterval(addFinding,3500);

// =====================================
// MAIN SCAN LOOP
// =====================================

const scan=setInterval(()=>{

progress++;

if(progress>100){

clearInterval(scan);

complete();

return;

}

progressFill.style.width=progress+"%";

progressNumber.innerHTML=progress+"%";

fileCount+=Math.floor(Math.random()*8);

files.innerHTML=fileCount;

cpu.innerHTML=(20+Math.floor(Math.random()*70))+"%";

memory.innerHTML=(25+Math.floor(Math.random()*60))+"%";

},120);

// =====================================
// COMPLETE
// =====================================

function complete(){

completeText.innerHTML="✓ Security Scan Completed Successfully";

dashboardBtn.style.display="inline-block";

agents.forEach(agent=>{

agent.innerHTML="Completed";

agent.style.color="#00ff99";

});

addLog();

addLog();

addLog();

}

// =====================================
// BUTTON
// =====================================

dashboardBtn.onclick=()=>{

window.location="dashboard.html";

};