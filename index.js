// Fetching Elements
const session = document.getElementById("sessionText");
const timer = document.getElementById("timer");
const sessionIncrease = document.getElementById("sessionIncrement");
const sessionDecrease = document.getElementById("sessionDecrement");
const breakIncrease = document.getElementById("breakIncrement");
const breakDecrease = document.getElementById("breakDecrement");
const sessionDuration = document.getElementById("sessionInterval");
const breakDuration = document.getElementById("breakInterval");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const resumeButton = document.getElementById("resume");

// Declaring Variable;
var sessionCount = 1;
var sessionTime = 25;
var breakTime = 5;
var sessionActive = false;
var interval;
var currentSessionTime;
resumeButton.disabled = true;
pauseButton.disabled = true;

// Adding Event Listeners to Buttons
sessionIncrease.addEventListener("click",increaseSessionTime);
sessionDecrease.addEventListener("click",decreaseSessionTime);
breakIncrease.addEventListener("click",increaseBreakTime);
breakDecrease.addEventListener("click",decreaseBreakTime);
startButton.addEventListener("click",startTimer);
pauseButton.addEventListener("click",pauseTimer);
resetButton.addEventListener("click",resetTimer);
resumeButton.addEventListener("click",resumeTimer);

//Increase Session Time
function increaseSessionTime() {
    if(sessionTime < 60){
        sessionTime += 5;
        sessionDuration.innerText = sessionTime;
    } else {
        alert("Maximum Time Per Work Session is 60");
    }
}

//Decrease Session Time
function decreaseSessionTime() {
    if(sessionTime > 5){
        sessionTime -= 5;
        sessionDuration.innerText = sessionTime;
    } else {
        alert("Minimum Time Per Work Session is 5 ");
    }
}

//Increase Break Time
function increaseBreakTime() {
    if(breakTime < 15){
        breakTime ++;
        breakDuration.innerText = breakTime;
    } else {
        alert("You cannot be productive if you are lazy");
    }
}

// Decrease Break Time
function decreaseBreakTime() {    
    if(breakTime >1 ){
        breakTime --;
        breakDuration.innerText = breakTime;
} else {
    alert("Your brain cannot focus if its stressed give it a rest once in a while");
}}

// Start Button Functionality along with session time calculation
function startTimer() {
    clearInterval(interval);
    sessionActive = true;    
    sessionIncrease.disabled = true;
    sessionDecrease.disabled = true;
    breakIncrease.disabled = true;
    breakDecrease.disabled = true;
    startButton.disabled = true;
    pauseButton.disabled = false;
    var totalTime = sessionTime * 60;
    timerRun (totalTime);
}

// Break calculating fuction
function breakTimer () {
    clearInterval(interval);
    sessionActive = false;
    var totalBreak = breakTime * 60;
    timerRun (totalBreak);
}

// Pause Button Functionality
function pauseTimer() {
    resumeButton.disabled = false;
    resetButton.disabled = false;
    clearInterval(interval);
}

// Resume Button functionality
function resumeTimer() {
    sessionIncrease.disabled = true;
    sessionDecrease.disabled = true;
    breakIncrease.disabled = true;
    breakDecrease.disabled = true;
    startButton.disabled = true;
    timerRun(currentSessionTime);
}

// Timer function
function timerRun (currentValue) {
    resetButton.disabled = true;
    interval = setInterval (function () {
        var minutes = Math.floor(currentValue / 60);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        var seconds = Math.floor(currentValue % 60);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        currentValue --;
        currentSessionTime = currentValue;
        timer.innerText= minutes + ":" + seconds;
        if(currentValue === 0){
            if (sessionActive === false) {
                startTimer();
                sessionCounter();
            } else {
                breakTimer();
                sessionCounter();
            }
        }
    },1000);
}

//Session Counter
function sessionCounter() {
    if(sessionActive === true) {
        sessionCount++;
        session.innerText = "Session " + sessionCount;
    } else {
        session.innerText = "Break";
    }

}

//Reset Timer
function resetTimer() {
    sessionCount = 0;
    sessionActive = true;
    sessionCounter();
    sessionTime = 25;
    sessionDuration.innerText = sessionTime;
    breakTime = 5;
    breakDuration.innerHTML = breakTime;
    timer.innerText = "00:00";
    sessionActive = false;
    clearInterval(interval);
    sessionIncrease.disabled = false;
    sessionDecrease.disabled = false;
    breakIncrease.disabled = false;
    breakDecrease.disabled = false;
    pauseButton.disabled = true;
    resumeButton.disabled = true;
    startButton.disabled = false;
}