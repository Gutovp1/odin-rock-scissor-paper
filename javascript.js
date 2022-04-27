//game beginning
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let pcPlay = ['rock','scissor','paper'];
    let index = Math.floor((Math.random()*10))%3;
    return pcPlay[index];
}

function playRound(playerSelection,computerSelection){
    if(playerSelection === computerSelection){
        result = 'Draw. Play again';
    }
    else {
        if((playerSelection == 'rock' && computerSelection == 'scissor') || (playerSelection == 'scissor' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')){
            result = "You won. Because, "+ playerSelection +" beats "+ computerSelection +".";
        }else{
            result = "You lost. Because, "+ playerSelection +" is beaten by "+ computerSelection +".";
        }
        
    }
    return result;
}

function playerPlay(){
    let validAnswer = false;
    while(!validAnswer){
        response = prompt("Write your answer down: paper, rock or scissor.");
        lowerResponse = response.toLowerCase();
        if(lowerResponse == "rock" || lowerResponse == "scissor" || lowerResponse == "paper"){
          validAnswer=true;
        }else {    
            response = prompt("Write a valid choice: rock, paper or scissor.");
            lowerResponse = response.toLowerCase();
        }
    }
    return lowerResponse;
}

function checkScore(numberOfWins, numberOfLosses, numberOfRounds){
    if(numberOfWins == numberOfLosses){
        finalResult = 'There was a draw with final score: '+numberOfWins+' x '+numberOfLosses+".";
    }else if(numberOfWins > numberOfLosses){
        finalResult = 'You rocked and won the game. You beat the computer '+numberOfWins+' and lost '+numberOfLosses+' times.';
    }else {
        finalResult = 'Computer won the game. You lost '+numberOfLosses +' rounds and won '+numberOfWins+'.';
    }
    return finalResult;
}
//five rounds game, in which the user enters a prompt answer each round

// function game(){
//     let winScore = 0;
//     let lossScore = 0;
//     let numberOfRounds = 5;
//     for(let i=0;i<numberOfRounds;i++){
//         playerSelection = playerPlay();
//         computerSelection = computerPlay();
//         resultRound = playRound(playerSelection,computerSelection);
//         console.log(playerSelection);
//         console.log(computerSelection);
//         console.log(playRound(playerSelection,computerSelection));
//         if (resultRound.includes('won'))
//         {   winScore++;
//         } else if(resultRound.includes('lost')){
//             lossScore++;
//         }        
//     }
//     gameResult = checkScore(winScore,lossScore, numberOfRounds);
//     return gameResult;
// }

//console.log(game());

const score = document.getElementById('score');

const btnRock = document.getElementById('btn-rock');
btnRock.addEventListener('click',() => {
   playerSelection = 'rock';
   computerSelection = computerPlay();
   console.log(playerSelection);
   console.log(computerSelection);
   score.textContent = playRound(playerSelection, computerSelection);   
} );

const btnPaper = document.getElementById('btn-paper');
btnPaper.addEventListener('click',() => {
    playerSelection = 'paper';
    computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    score.textContent = playRound(playerSelection, computerSelection);
});

const btnScissor = document.getElementById('btn-scissor');
btnScissor.addEventListener('click',() =>{
    playerSelection = 'scissor';
    computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    score.textContent = playRound(playerSelection, computerSelection);
});

