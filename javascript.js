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
        result = 'Draw. Play again.';
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

const score = document.getElementById('score');
const round = document.getElementById('round');
const desc = document.getElementById('description');
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
btnRock.addEventListener('click',() => display(btnRock.id, computerPlay()));

const btnPaper = document.getElementById('paper');
btnPaper.addEventListener('click',() => display(btnPaper.id, computerPlay()));

const btnScissor = document.getElementById('scissor');
btnScissor.addEventListener('click',() => display(btnScissor.id, computerPlay()));

function display (playerPlay, pcPlay) {
    round.textContent = playerPlay.toUpperCase() + ' X ' + pcPlay.toUpperCase();
    desc.textContent = playRound(playerPlay, pcPlay);
    score.textContent = 'Score = YOU: ' + playerScore + ' PC: ' + computerScore;   
    checkScore();
    return;
}

