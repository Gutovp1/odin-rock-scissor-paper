
function computerPlay(){
    let pcplay = ['rocket','scissor','paper'];
    let index = Math.floor((Math.random()*10))%3;
    return pcplay[index];
}

function playRound(playerSelection,computerSelection){
    if(playerSelection === computerSelection){
        result = 'Draw. Play again';
    }
    else {
        if((playerSelection == 'rocket' && computerSelection == 'scissor') || (playerSelection == 'scissor' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rocket')){
            result = "You won. Because, "+ playerSelection +" beats "+ computerSelection +".";
        }else{
            result = "You lost. Because, "+ playerSelection +" is beaten by "+ computerSelection +".";
        }
        
    }
    return result;
}

const playerSelection = 'rocket';
const computerSelection = computerPlay();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection));