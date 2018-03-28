function handleKeyUp(){
    numberOfProcesses.value = numberOfProcesses.value.replace(/\D/, "");
};

function handleSimulate(){
    simulate=true;
    answerArea.innerHTML=``;
    infoArea.innerHTML=``;
}

function handleNoSimulate(){
    simulate=false;
    answerArea.innerHTML=``;
    infoArea.innerHTML=``;
}

function handleErrors(){
    for(let i=0;i<p.length;i++){
        if(p[i].burstTime<=0){
            invalidInputFlag=true;
        } else if(p[i].arrivalTime<0){
            invalidInputFlag=true;
        }
    };

    if(criteria.value==='RR'){
        try {
            quantum=Number(document.getElementById('quantum').value);
            warningArea.innerHTML=``;
        } catch (e) {
            invalidNoQuantum=true;
        }
        if(!quantum){invalidNoQuantum=true}
        else {invalidNoQuantum=false;}
    }
    if(invalidNoQuantum && invalidInputFlag){
        warningArea.innerHTML=`<h2>Please Enter Quantum value and Burst times to continue</h2>`;
        invalidNoQuantum=false;
        invalidInputFlag=false;
    } else if (invalidNoQuantum) {
        warningArea.innerHTML=`<h2>Please Enter Quantum value continue</h2>`;
        invalidNoQuantum=false;
    } else if (invalidInputFlag) {
        warningArea.innerHTML=`<h2>Please Enter Valid Burst/Arrival Times to continue</h2>`;
        invalidInputFlag=false;
    } else {
        warningArea.innerHTML=``;
    }
}