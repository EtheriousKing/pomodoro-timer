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

// Declaring Variable;
var sessionCount = 0;
var sessionTime = 25;
var breakTime = 5;

// Adding Event Listeners to Buttons
sessionIncrease.addEventListener("click",increaseSessionTime);
sessionDecrease.addEventListener("click",decreaseSessionTime);
breakIncrease.addEventListener("click",increaseBreakTime);
breakDecrease.addEventListener("click",decreaseBreakTime);
startButton.addEventListener("click",startTimer);
pauseButton.addEventListener("click",pauseTimer);
resetButton.addEventListener("click",resetTimer);

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

function startTimer() {}
function pauseTimer() {}

//Session Counter
function sessionCounter() {
    sessionCount++;
    session.innerText = "Session " + sessionCount;
}

//Reset Timer
function resetTimer() {
    sessionCount = 0;
    sessionCounter();
    sessionTime = 25;
    sessionDuration.innerText = sessionTime;
    breakTime = 5;
    breakDuration.innerHTML = breakTime;
}