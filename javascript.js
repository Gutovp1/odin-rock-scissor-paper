
function computerPlay(){
    let pcplay = ['rock','scissor','paper'];
    let index = Math.floor((Math.random()*10))%3;
    return pcplay[index];
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
        lower_response = response.toLowerCase();
        if(lower_response == "rock" || lower_response == "scissor" || lower_response == "paper"){
          validAnswer=true;
        }else {    
            response = prompt("Write a valid choice: rock, paper or scissor.");
            lower_response = response.toLowerCase();
        }
    }
    return lower_response;
}

//const playerSelection = 'rock';
let playerSelection = playerPlay();
const computerSelection = computerPlay();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection));