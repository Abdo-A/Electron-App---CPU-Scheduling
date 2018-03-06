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
    p=[];
    for(let i=1;i<=numberOfProcesses.value;i++){
        //declaring the dynamic named variables
        window[`name${i}`]=document.getElementById(`name${i}`).value;
        window[`burstTime${i}`]=Number(document.getElementById(`burstTime${i}`).value);
        window[`arrivalTime${i}`]=Number(document.getElementById(`arrivalTime${i}`).value);

        //each array element is a Process object
        p[i]=new Process(window[`name${i}`],window[`burstTime${i}`],window[`arrivalTime${i}`]);
    }

    p.sort((a,b)=>{
        if(a.arrivalTime!=b.arrivalTime){
            return a.arrivalTime-b.arrivalTime;
        }
        else return b.burstTime-a.burstTime;
        });
    //now, p that will be dealt with by the criteria functions is sorted:
    //lower arrivalTime first
    //then higher burstTime first

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
    let averageWaitingTime=0,averageTurnAroundtime=0;

    p[0].waitingTime=0;
    p[0].turnAroundTime=p[0].burstTime;
    p[0].absoluteTime=p[0].arrivalTime+p[0].burstTime;

    for(let i=1;i<numberOfProcesses.value;i++){
        p[i].absoluteTime=p[i-1].absoluteTime+p[i].burstTime;
        p[i].turnAroundTime=p[i].absoluteTime-p[i].arrivalTime;
        p[i].waitingTime=p[i].turnAroundTime-p[i].burstTime;
    }

    for(let i=0;i<numberOfProcesses.value;i++){
        averageWaitingTime=averageWaitingTime+p[i].waitingTime;
        averageTurnAroundtime=averageTurnAroundtime+p[i].turnAroundTime;
    }

    for(let i=0;i<numberOfProcesses.value;i++){
        console.log(p[i]);
    }
    console.log('averageWaitingTime',averageWaitingTime);
    console.log('averageTurnAroundtime',averageTurnAroundtime);
}



function shortedJobFirst(){
    body.style.backgroundColor="green";
    for(let i=0;i<numberOfProcesses.value;i++){
        console.log(p[i]);
    }
}

function shortedJobFirstPreemtive(){
    body.style.backgroundColor="blue";
    for(let i=0;i<numberOfProcesses.value;i++){
        console.log(p[i]);
    }
}

function priority(){
    body.style.backgroundColor="brown";
    for(let i=0;i<numberOfProcesses.value;i++){
        console.log(p[i]);
    }
}

function priorityPreemtive(){
    body.style.backgroundColor="black";
    for(let i=0;i<numberOfProcesses.value;i++){
        console.log(p[i]);
    }
}

function RR(){
    body.style.backgroundColor="yellow";
    for(let i=0;i<numberOfProcesses.value;i++){
        console.log(p[i]);
    }
}
