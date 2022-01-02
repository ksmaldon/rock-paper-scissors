let  playerSelection = "ROCK";
let result;
let playerWins = "You win!";
let computerWins = "You lose!";
let tie = "Tie!";
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button=>{
button.addEventListener('click',(event)=>{
let playerSelection = event.target.textContent;
console.log(playerSelection);
});
button.addEventListener('click',playRound);
});
 



function computerPlay () { //Select random value from array
    let choices = ['ROCK', 'PAPER', 'SCISSOR'];
    return choices[Math.floor(Math.random()*choices.length)]
    }
    //console.log(computerPlay());

function playRound() { //Plays one round
  
    const computerSelection = computerPlay();
    if(playerSelection === computerSelection){
           result = tie;
           //alert ("Tie!")

    }else if
        ((playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSOR" && computerSelection === "PAPER") ||
        (playerSelection === "ROCK" && computerSelection === "SCISSOR")) {
        //alert (`You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.toLowerCase()}`);
        result = playerWins;//"You win!"
        playerScore++;//adds 1 to playerScore
               
     }else if 
        ((playerSelection === "ROCK" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "SCISSOR") ||
        (playerSelection === "SCISSOR" && computerSelection === "ROCK")) {
       // alert (`You lose! //${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.toLowerCase()}.`);
        result = computerWins;//"You lose!"
        computerScore++;//adds 1 to computerScore    
    }

    console.log(result);//result of one round
}

// function game () {
   
//     console.log(playRound());//first round
//     console.log(playRound());//second round
//     console.log(playRound());//third round
//     console.log(playRound());//fourth round
//     console.log(playRound());//fith round

//     console.log(computerScore);
//     console.log(playerScore);

//     if (playerScore === computerScore){
//         result = tie//"Tie!"
//     }else if(playerScore > computerScore){
//         result = playerWins;//"You win!"
//     }else if(playerScore < computerScore){
//         result = computerWins;//"You lose"
//     }
//     alert (result);
//     return result;
// }

// console.log(game())



//console.log (computerScore);
//console.log(playerScore);
//console.log(game(playerScore,computerScore));