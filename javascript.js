
function computerPlay(){
    let pcplay = ['rocket','scissor','paper'];
    let index = Math.floor((Math.random()*10))%3;
    return pcplay[index];
}

const playerSelection = 'rocket';
const computerSelection = computerPlay();
console.log(playerSelection);
console.log(computerSelection);