const semicircle = document.querySelectorAll('.semicircle');
const times = document.querySelectorAll('.timer')
const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
const pause = document.querySelector('#pause');

let h = document.querySelector('#hour');
let m = document.querySelector('#min');
let s = document.querySelector('#sec');
hour = Number(h);
minute = Number(m);
second = Number(s);


const hr = hour * 360000;
const min = minute * 60000
const sec = second * 1000;
const setTime = hr + min + sec;
const day = new Date().getTime();
const starTime = day/1000;
const futureTime = starTime + setTime;



let startTimer = null;


function timer() {
if(h.value === 0 && m.value === 0 && s.value === 0){
    h.value = 00;
    m.value = 00;
    s.value = 20;
}else if (s.value != 0){
    s.value--;
}else if (m.value != 0 && s.value == 0){
    s.value = 59;
    m.value--;
}else if (h.value != 0 && m.value ==0){
    m.value = 60;
    h.value--;
}

}

function stopTimer() {
    clearInterval(startTimer);
}

start.addEventListener('click', function(){
    function startinterval(){
        startTimer = setInterval(function(){
            timer();
        }, 1000);
    }
     startinterval();
     return
});
pause.addEventListener("click", function(){
        stopTimer();
    
    }
        
    )
reset.addEventListener('click',function(){
    h.value = 00;
    m.value = 00;
    s.value = 00;
    stopTimer();
})


const timerloop =setInterval(countDownTimer);
countDownTimer();

function countDownTimer() {
    let currentTime = (new Date().getTime())/1000;
    // console.log(typeof currentTime);
    const remainingTime = futureTime - currentTime;
    console.log(remainingTime);
    // console.log(setTime)
     angle = (remainingTime / setTime) * 360;
    //  console.log(angle);
if(angle > 180){
    semicircle[2].style.display = `none`;
    semicircle[0].style.transform = `rotate(180deg)`;
    semicircle[1].style.transform = `rotate(${angle}deg)`;   

}else{
    semicircle[2].style.display = `block`;
    semicircle[0].style.transform = `rotate(${angle}deg)`;
    semicircle[1].style.transform = `rotate(${angle}deg)`;
   
}

// if(currentTime <= 10){
//     semicircle[0].style.backgroundColor = 'red';
//     semicircle[1].style.backgroundColor = 'red';
// }
const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
const seconds = Math.floor((remainingTime / 1000) % 60);

if(currentTime < 0) {
    clearInterval(timerloop);
    semicircle[0].style.display = 'none';
    semicircle[1].style.display = 'none';
    semicircle[2].style.display = 'none';
    times.style.color = 'lightgray'; 
    
    times.innerHTML =
    `<div>00</div>
    <div class = 'colon'>:</div>
    <div>00</div>
    <div class = 'colon'>:</div>
    <div>00</div>`;

}
}
// countDownTimer();