function handleSelect(){
    body.style.backgroundColor="red";
}

function onSubmit(){
    let p1=document.getElementById('p1');
    let t1=document.getElementById('t1');
    let p2=document.getElementById('p2');
    let t2=document.getElementById('t2');
    let p3=document.getElementById('p3');
    let t3=document.getElementById('t3');
    let p4=document.getElementById('p4');
    let t4=document.getElementById('t4');
    let answer=document.getElementById('answer');
    let body=document.querySelector('body');
    let criteria=document.getElementById('criteria');
    
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
    answer.innerHTML=p1.value;
}
function shortedJobFirst(){
    
}
function shortedJobFirstPreemtive(){
    
}
function priority(){
    
}
function priorityPreemtive(){
    
}
function RR(){
    
}