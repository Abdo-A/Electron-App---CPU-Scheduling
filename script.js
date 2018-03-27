let body=document.querySelector('body');
let inputsArea=document.getElementById('inputsArea');
let answerArea=document.getElementById('answerArea');
let warningArea=document.getElementById('warningArea');
let numberOfProcesses=document.getElementById('numberOfProcesses');
let criteria=document.getElementById('criteria');
let submitButton=document.getElementById('submitButton');
let simulateButton=document.getElementById('simulateButton');
let notAnswer=document.getElementById('notAnswer');
let averageWaitingTime=0,averageTurnAroundtime=0;
let quantum;
let simulate=false;
let p=[];
function onProceed(){
    if(numberOfProcesses.value>0) {
        inputsArea.innerHTML=''; //
        answerArea.innerHTML='';
        submitButton.style.display="inline-block";
        simulateButton.style.display="inline-block";
        if(criteria.value==='priority' || criteria.value==='priorityPreemtive') {
            for (let i=1;i<=numberOfProcesses.value;i++){
                inputsArea.innerHTML+=`
                P${i} <input placeholder="Name" type="hidden" id="name${i}" value="P${i}"/>
                    <input placeholder="Burst Time" type="number" id="burstTime${i}">
                    <input placeholder="Arrival Time" type="number" id="arrivalTime${i}">
                    <input placeholder="Priority" type="number" id="priority${i}">
                    <br /> <br />
                `;
            }
        } else if(criteria.value==='RR'){
            inputsArea.innerHTML=`
            Quantum  <input type="number" id="quantum">
            <br/><br/>
            `;
            for (let i=1;i<=numberOfProcesses.value;i++){
                inputsArea.innerHTML+=`
                P${i} <input type="hidden" id="name${i}" value="P${i}"/>
                    <input placeholder="Burst Time" type="number" id="burstTime${i}">
                    <input placeholder="Arrival Time" type="number" id="arrivalTime${i}">
                    <br /> <br />
                `;
            }
        } else {
            for (let i=1;i<=numberOfProcesses.value;i++){
                inputsArea.innerHTML+=`
                P${i} <input type="hidden" id="name${i}" value="P${i}"/>
                    <input placeholder="Burst Time" type="number" id="burstTime${i}">
                    <input placeholder="Arrival Time" type="number" id="arrivalTime${i}">
                    <br /> <br />
                `;
            }
        }
    } else {
        inputsArea.innerHTML='<h3>Please Enter a Value for the Number of Processes! ;)</h3>'
    }
    
    
}

function onSubmit(){
    p=[];
    if(criteria.value==='priority' || criteria.value==='priorityPreemtive') {
        for(let i=1;i<=numberOfProcesses.value;i++){
            //declaring the dynamic named variables
            window[`name${i}`]=document.getElementById(`name${i}`).value;
            window[`burstTime${i}`]=Number(document.getElementById(`burstTime${i}`).value);
            window[`arrivalTime${i}`]=Number(document.getElementById(`arrivalTime${i}`).value);
            window[`priority${i}`]=Number(document.getElementById(`priority${i}`).value);
            //each array element is a Process object
            p[i]=new Process(window[`name${i}`],window[`burstTime${i}`],window[`arrivalTime${i}`],window[`priority${i}`]);
        }
        
    } else {
        for(let i=1;i<=numberOfProcesses.value;i++){
            //declaring the dynamic named variables
            window[`name${i}`]=document.getElementById(`name${i}`).value;
            window[`burstTime${i}`]=Number(document.getElementById(`burstTime${i}`).value);
            window[`arrivalTime${i}`]=Number(document.getElementById(`arrivalTime${i}`).value);
    
            //each array element is a Process object
            p[i]=new Process(window[`name${i}`],window[`burstTime${i}`],window[`arrivalTime${i}`]);
        }   
    }
    if(criteria.value==='RR'){
        try {
            quantum=Number(document.getElementById('quantum').value);
            warningArea.innerHTML=``;
        } catch (e) {
            warningArea.innerHTML=`<h2>Please Enter Quantum to achieve Round Robin!</h2>`;
        }
        if(!quantum) warningArea.innerHTML=`<h2>Please Enter Quantum to achieve Round Robin!</h2>`;
    }

    p.sort((a,b)=>{
        if(a.arrivalTime!=b.arrivalTime){
            return a.arrivalTime-b.arrivalTime;
        }
        else return a.burstTime-b.burstTime; //b.burstTime-a.burstTime;
        });
    p.pop(); //

    //now, p that will be dealt with by the criteria functions is sorted:
    //lower arrivalTime first
    //then higher burstTime first

    if(warningArea.innerHTML===``) {
        notAnswer.style.animation="goLeft 2s forwards";
        answerArea.style.position="absolute";
        answerArea.style.top="40vh";
        answerArea.style.left="50vw";
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
    } else if(criteria.value==='RR' && !!quantum){
        RR();
    }
}




