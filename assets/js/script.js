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
  
}



//Attach event listener to start button to call startGame funtion on click
startButton.addEventListener("click", startGame);

