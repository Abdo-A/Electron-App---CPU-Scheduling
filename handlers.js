function handleKeyUp(){
    numberOfProcesses.value = numberOfProcesses.value.replace(/\D/, "");
};

function handleSimulate(){
    simulate=true;
}

function handleNoSimulate(){
    simulate=false;
}