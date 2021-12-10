// variable setup 
let wordBlank = document.querySelector(".word-blanks");
let win = document.querySelector(".win");
let lose = document.querySelector(".lose");
let timeElement = document.querySelector(".timer-count");
let startButton = document.querySelector("start-button");

let choseWord = "";
let numBlanks = 0;
let winCounter = 0;
let loseCounter= 0;
let isWin = false;
let timer;
let timerCount;

//Arrays to complete blanks
let lettersInChoseWord = [];
let blanksLetter = [];

//Array of words the user will guess
var words = ["variable", "array", "modulus", "object", "function", "string", "bollean"];

// unit fuction renders on pageload
function init() {
getWins();
getLosses();
}

//The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 10;
  //Prevent start button from being clicked when round is in progress
  startButton.disabled = true;
  renderBlanks()
  startTimer()
}

function renderBlanks(){

};

function startTime(){
  //set timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCounter;
    if (timerCount >= 0) {
      //Test if win condition is met
      if (isWin && timerCount > 0) {
        clearInterval(timer);
        winGame();
      }
    }
    // Test if time has run out
    if (timerCount === 0) {
      //clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);

}

//updates win count on screen and sets win count to client storage
function setWin() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

//updates lose count on screen and sets lose count to client storage
function setLosses() {
  lose.textContent = loseCounter
  localStorage.setItem("loseCount", loseCounter);
}

//these functions are used by init
function getWins() { 
  
  let storedWins = localStorage.getItem("winCount"); 

  if (storedWins === null) {
    winCounter = 0;
  } else {
    winCounter = storedWins; 
  }
  win.textContent = winCounter;
}

function getLosses() {
  let storedLosses = localStorage.getItem("loseCount");

  if (storedLosses === null) {
    loseCounter = 0;
  } else {
    loseCounter = storedLosses;
  }
  lose.textContent = loseCounter; 

}





//Attach event listener to start button to call startGame funtion on click
startButton.addEventListener("click", startGame);



