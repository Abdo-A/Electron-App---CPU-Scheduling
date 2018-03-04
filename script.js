let body=document.querySelector('body');
let answer=document.getElementById('answer');
let numberOfProcesses=document.getElementById('numberOfProcesses');
let criteria=document.getElementById('criteria');
let p=[];
function onProceed(){
    for (let i=1;i<=numberOfProcesses.value;i++){
        answer.innerHTML+=`
        P${i} <input type="hidden" id="name${i}" value="P${i}"/>
              Burst Time  <input type="number" id="burstTime${i}">
              Arrival Time  <input type="number" id="arrivalTime${i}">
              <br /> <br />
        `;
    }
}

function onSubmit(){
    for(let i=1;i<=numberOfProcesses.value;i++){
        //declaring the dynamic named variables
        window[`name${i}`]=document.getElementById(`name${i}`).value;
        window[`burstTime${i}`]=document.getElementById(`burstTime${i}`).value;
        window[`arrivalTime${i}`]=document.getElementById(`arrivalTime${i}`).value;

        //each array element is a Process object
        p[i]=new Process(window[`name${i}`],window[`burstTime${i}`],window[`arrivalTime${i}`]);
        console.log(window[`p${i}`]);
    }

    if(criteria.value==='firstComeFirstServed'){
        firstComeFirstServed();
    } else if(criteria.value==='shortedJobFirst'){
        shortedJobFirst();
    } else if(criteria.value==='shortedJobFirstPreemtive'){
        shortedJobFirstPreemtive();
    } else if(criteria.value==='priority'){
        priority();
    } else if(criteria.value==='priorityPreemtive'){
        priorityPreemtive();
    } else if(criteria.value==='RR'){
        RR();
    }
}

function firstComeFirstServed(){
    body.style.backgroundColor="red";
    let totalBurstTime=0, counter=0;
    
    for(let i=1;i<=numberOfProcesses.value;i++){
        totalBurstTime+=Number(p[i].burstTime);
    }
    console.log(totalBurstTime);
}

function shortedJobFirst(){
    body.style.backgroundColor="green";
    for(let i=1;i<=numberOfProcesses.value;i++){
        
    }
}

function shortedJobFirstPreemtive(){
    body.style.backgroundColor="blue";
    for(let i=1;i<=numberOfProcesses.value;i++){
        
    }
}

function priority(){
    body.style.backgroundColor="brown";
    for(let i=1;i<=numberOfProcesses.value;i++){
        
    }
}

function priorityPreemtive(){
    body.style.backgroundColor="black";
    for(let i=1;i<=numberOfProcesses.value;i++){
        
    }
}

function RR(){
    body.style.backgroundColor="yellow";
    for(let i=1;i<=numberOfProcesses.value;i++){
        
    }
}