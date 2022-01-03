//VARIABLES
let playerScore = 0;
let computerScore = 0;
let result

//DOM ELEMENTS
const playerScore_div = document.getElementById("player-score");
const computerScore_div = document.getElementById("computer-score");
const score_div = document.querySelector(".score");
const result_div = document.querySelector(".result");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");
const reset_button = document.getElementById("reset")

//PLAY GAME BEST OF FIVE
function playRound(playerChoice){
const computerChoice = getComputerChoice();

if (playerScore===5 || computerScore===5){
    return;
}

if(playerChoice === computerChoice && (playerScore<5 && computerScore<5)){
    result_div.textContent = "It's a draw!";
        
}else if
 ((playerChoice === "paper" && computerChoice === "rock") ||
 (playerChoice === "scissor" && computerChoice === "paper") ||
 (playerChoice === "rock" && computerChoice === "scissor")&&(playerScore<5 && computerScore<5)) {
 
 playerScore++;//adds 1 to playerScore
 playerScore_div.textContent = `PLAYER:${playerScore}`;
 result_div.textContent = `${playerChoice[0].toUpperCase() + playerChoice.slice(1)} beats ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}.You win! `;
       if (playerScore===5){
        result_div.textContent = `${playerChoice[0].toUpperCase() + playerChoice.slice(1)} beats ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}. You have 5 points. You win the game! `;
       } 
}else if 
 ((playerChoice === "paper" && computerChoice === "scissor") ||
 (playerChoice === "scissor" && computerChoice === "rock") ||
 (playerChoice === "rock" && computerChoice === "paper")&&(playerScore<5 && computerScore<5)) {
 computerScore++;//adds 1 to computerScore  
 computerScore_div.textContent = `${computerScore}COMPUTER:`;  
 result_div.textContent = `${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${playerChoice[0].toUpperCase() + playerChoice.slice(1)}.You lose!`;
    if (computerScore===5){
        result_div.textContent = `${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${playerChoice[0].toUpperCase() + playerChoice.slice(1)}. Computer has 5 points. You lose the game!`;
        
        }
    }   
}



//EVENT LISTENERS
rock_button.addEventListener('click',function(){
    playRound("rock");
})
paper_button.addEventListener('click', function(){
    playRound("paper");
})
scissors_button.addEventListener('click', function(){
    playRound("scissor");
})
reset_button.addEventListener('click', function(){
    location.reload()
})

//COMPUTER CHOICE
function getComputerChoice () { //Select random value from array
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = [Math.floor(Math.random()*choices.length)];
    return choices[randomNumber];
    }