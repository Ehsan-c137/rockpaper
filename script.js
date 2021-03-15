let userChoice = prompt('do you choose rock, paper or scissors?');
let computerChoice = Math.random();

if ( computerChoice < 0.34){
    computerChoice = 'rock';
} else if ( computerChoice < 0.64){
    computerChoice = 'paper';
} else { computerChoice = 'scissors';}

function compare ( userChoice , computerChoice){
    if ( userChoice == computerChoice){
        console.log('the result is a tie!!');
    }  else if ( computerChoice == 'rock' && userChoice == 'scissors'){
        console.log('Computer Wins!!')
    }  else if ( computerChoice == 'paper' && userChoice == 'rock'){
        console.log('Computer Wins!!')
    }  else if ( computerChoice == 'scissors' && userChoice == 'paper'){
        console.log('Computer Wins!!')
    }
    else if ( userChoice == 'rock' && computerChoice == 'scissors'){
        console.log('YOU Win!!')
    }  else if ( userChoice == 'paper' && computerChoice == 'rock'){
        console.log('YOU Win!!')
    }  else if ( userChoice == 'scissors' && computerChoice == 'paper'){
        console.log('YOU Win!!')
    }
}

compare ( userChoice , computerChoice);