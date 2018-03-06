class Process{
    constructor(name, burstTime=0, arrivalTime=0, currentlyExecuting, finished, waitingNow=false, waitingTime=0, turnAroundTime=0){
        this.name=name;
        this.burstTime=burstTime;
        this.arrivalTime=arrivalTime;
        this.finished=finished;
        this.waitingNow=waitingNow;
        this.waitingTime=waitingTime;
        this.turnAroundTime=turnAroundTime;
    }
}