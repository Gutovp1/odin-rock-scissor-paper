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
            playerScore++;
        }else{
            result = "You lost. Because, "+ playerSelection +" is beaten by "+ computerSelection +".";
            computerScore++;
        }
        
    }
    return result;
}

// function playerPlay(){
//     let validAnswer = false;
//     while(!validAnswer){
//         response = prompt("Write your answer down: paper, rock or scissor.");
//         lowerResponse = response.toLowerCase();
//         if(lowerResponse == "rock" || lowerResponse == "scissor" || lowerResponse == "paper"){
//           validAnswer=true;
//         }else {    
//             response = prompt("Write a valid choice: rock, paper or scissor.");
//             lowerResponse = response.toLowerCase();
//         }
//     }
//     return lowerResponse;
// }

function checkScore(){
    finalResult = '';
    if(playerScore >= 5){
        finalResult = 'You won the battle with 5 victories! =)';
        round.textContent = finalResult;
        playerScore = 0;
        computerScore = 0;
    }
    if(computerScore >= 5){
        finalResult = 'You lost the battle. Computer has 5 wins. =(';
        round.textContent = finalResult;
        playerScore = 0;
        computerScore = 0;
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
const round = document.getElementById('round');
// const bR = document.createElement('button');
// bR.setAttribute('id','rock');
// bR.textContent = 'Rockk';
// const bod = document.querySelector('.bod');
// bod.appendChild(bR);
// bR.addEventListener('click',() => {
//     playRound(bR.id,computerPlay())
//     console.log(checkScore());
// });


const btnRock = document.getElementById('rock');
btnRock.addEventListener('click',() => {
   playerSelection = btnRock.id;
   computerSelection = computerPlay();
   round.textContent = 'You = ' + playerSelection + '  PC = ' + computerSelection + ' ';
   score.textContent = playRound(playerSelection, computerSelection) +
   ' Partial score = YOU: ' + playerScore + ' PC: ' + computerScore;  
   checkScore(); 
} );

const btnPaper = document.getElementById('paper');
btnPaper.addEventListener('click',() => {
    playerSelection = 'paper';
    computerSelection = computerPlay();
    round.textContent = 'You = ' + playerSelection + '  PC = ' + computerSelection + ' ';
    score.textContent = playRound(playerSelection, computerSelection) +
    ' Partial score = YOU: ' + playerScore + ' PC: ' + computerScore;   
    checkScore();
});

const btnScissor = document.getElementById('scissor');
btnScissor.addEventListener('click',() => {
    playerSelection = 'scissor';
    computerSelection = computerPlay();
    round.textContent = 'You = ' + playerSelection + '  PC = ' + computerSelection + ' ';
    score.textContent = playRound(playerSelection, computerSelection) +
    ' Partial score = YOU: ' + playerScore + ' PC: ' + computerScore;   
    checkScore();
});


