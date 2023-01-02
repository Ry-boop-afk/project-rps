console.log("Hello World!");

const gameChoices = ["rock","paper", "scissors"];

function randomInt(number){
    return Math.floor(Math.random()*number);
}

function getComputerChoice(){
    let choice = randomInt(3);
    return gameChoices[choice];
}

// for(let i=0; i<5; i++){
//     console.log(getComputerChoice());
// }

function playRound(playerSelection, computerSelection){
    let playerScore = 0;
    let computerScore = 0;


    if(playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++;
        console.log("You win! rock beats scissors");
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
       computerScore++;
        console.log("You lose! paper beats rock");
    }
    else if(playerSelection == "rock" && computerSelection == "rock"){
        console.log("Tie Bozo!");
    }

    else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        console.log("You lose! rock beats scissors");
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;
        console.log("You win! scissors beats paper");
    }
    else if(playerSelection == "scissors" && computerSelection == "scissors"){
        console.log("Tie Bozo!");
    }

    else if(playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        console.log("You win! paper beats rock");
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        console.log("You lose! scissors beats paper");
    }
    else if(playerSelection == "paper" && computerSelection == "paper"){
        console.log("Tie Bozo!");
    }
    else{
        console.log("Did you break my mf code!?");
    }
        return [playerScore, computerScore];
    }

    //Event Listener will listen for a button click and then call playRound based upon the User's choice
    const btn = document.getElementsByClassName("btn");
   
    btn[0].addEventListener('click', () => playRound(btn[0].innerText.toLowerCase(), getComputerChoice()));
    btn[1].addEventListener('click', () => playRound(btn[1].innerText.toLowerCase(), getComputerChoice()));
    btn[2].addEventListener('click', () => playRound(btn[2].innerText.toLowerCase(), getComputerChoice()));


   
    // btn.addEventListener('click', function (e) {
    //     console.log(e);
    // });



// function game(){
//     let playerScore = 0;
//     let computerScore = 0;
//     let roundScore = [playerScore, computerScore];
//     for (let i =0; i<5; i++){
//         let userInput = window.prompt("Please enter rock, paper, or scisssors");
//         let playerSelection = userInput.toLowerCase(); 
//         let computerSelection = getComputerChoice();
//         roundScore = playRound(playerSelection, computerSelection);
//         playerScore += parseInt(roundScore[0]);
//         computerScore += parseInt(roundScore[1]);

//     }
//     if (playerScore > computerScore){
//         console.log("Player Wins");
//     }
//     else if (computerScore > playerScore){
//         console.log("Computer wins");
//     }
//     else {
//         console.log("It's a tie!");
//         console.log(playerScore + " " + computerScore);
// };
// }

// game();