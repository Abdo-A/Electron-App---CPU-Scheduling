function firstComeFirstServed(){
    let clock=0;

    for(let i=0;i<numberOfProcesses.value;i++){
        
        if(i==0){
            p[i].startAt=p[i].arrivalTime;
            p[i].finishAt=p[i].arrivalTime+p[i].burstTime;
            p[i].completed=true;
            clock=p[i].finishAt;
        } else {
            if(clock<p[i].arrivalTime){
                p[i].startAt=p[i].arrivalTime;
                p[i].finishAt=p[i].arrivalTime+p[i].burstTime;
                p[i].completed=true;
                clock=p[i].finishAt;
            } else {
                p[i].startAt=clock;
                p[i].finishAt=clock+p[i].burstTime;
                p[i].completed=true;
                clock=p[i].finishAt;
            }
        }
    }

    finalize(p);
};