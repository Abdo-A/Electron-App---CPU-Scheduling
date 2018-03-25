function finalize(p=[]){
    for(let i=0;i<numberOfProcesses.value;i++){
        p[i].turnAroundTime=p[i].finishAt-p[i].arrivalTime;
        p[i].waitingTime=p[i].turnAroundTime-p[i].burstTime;

        averageWaitingTime+=p[i].waitingTime;
        averageTurnAroundtime+=p[i].turnAroundTime;
    }

    averageWaitingTime=averageWaitingTime/numberOfProcesses.value;
    averageTurnAroundtime=averageTurnAroundtime/numberOfProcesses.value;

    //now, we have all processes set, and also averageWaitingTime, averageTurnAroundtime, let's draw
    pInOrder=p;
    pInOrder.sort((a,b)=>{
        return a.startAt-b.startAt;
        });
    answerArea.innerHTML='<br/>';
    for(let i=0;i<numberOfProcesses.value;i++){
        console.log(pInOrder[i]);
        answerArea.innerHTML+=`
        Process Name: ${pInOrder[i].name} ****
        Starts At: ${pInOrder[i].startAt} ****
        Finishes At: ${pInOrder[i].finishAt} ****
        Waiting Time: ${pInOrder[i].waitingTime} ****
        TurnAround Time: ${pInOrder[i].turnAroundTime}
        <br/><br/>
        `;
    }
    answerArea.innerHTML+=`
        Average Waiting Time : ${averageWaitingTime}
        <br/> Average Turnaround Time : ${averageTurnAroundtime}
    `;
    console.log('averageWaitingTime',averageWaitingTime);
    console.log('averageTurnAroundtime',averageTurnAroundtime);
}
