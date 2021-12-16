const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('.reset');
const btnStop = document.querySelector('.stop');
const count = document.querySelector('.count');

const timerM = document.querySelector('.timer-m');
const timerS = document.querySelector('.timer-s');

const breakM = document.querySelector('.break-m');
const breakS = document.querySelector('.break-s');

let timer;

btnStart.addEventListener('click',function(){
    if(timer === undefined){
       timer = setInterval(startTimer,1000)
    }
    else{
        alert('Error')
    }
})

btnReset.addEventListener('click',function(){
    if(timer !== undefined){
        resetTimer()
    }
    else{
        alert('Error')
    }
})

btnStop.addEventListener('click',function(){
    if(timer !== undefined){
        stopInterval()
    }
    else{
        alert('Error')
    }
})

function startTimer(){
    if(timerS.innerText != 0){
        timerS.innerText--;
    }else if(timerS.innerText == 0 && timerM.innerText != 0){
        timerM.innerText--;
        timerS.innerText = 59;
    }

    if(timerM.innerText == 0 && timerS.innerText == 0){
        if(breakS.innerText != 0){
            breakS.innerText--;
        }
        else if( breakS.innerText == 0 && breakM.innerText != 0){
            breakS.innerText = 59;
            breakM.innerText--;
        }
    }

    if(timerM.innerText == 0 && breakM.innerText == 0){
        timerS.innerText = '00';
        timerM.innerText = 25;
        breakS.innerText = '00';
        breakM.innerText = 5;
        count.innerText++;
    }
}

function resetTimer(){
    timerS.innerText = '00';
    timerM.innerText = 25;
    breakS.innerText = '00';
    breakM.innerText = 5;
    count.innerText = 0;
}

 function stopInterval(){
    clearInterval(timer);
    timer = undefined;
} 

