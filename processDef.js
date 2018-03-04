class Process{
    constructor(name, burstTime, arrivalTime, currentlyExecuting, finished, waitingNow, waitingTime){
        this.name=name;
        this.burstTime=burstTime;
        this.arrivalTime=arrivalTime;
        this.finished=finished;
        this.waitingNow=waitingNow;
        this.waitingTime=waitingTime;
    }
}