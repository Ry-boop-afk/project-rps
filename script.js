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
    const announcingWinner = document.createElement('p');
    announcingWinner.style.color = "blue";
    announcingWinner.style.fontSize = 20 ;
    const results = document.getElementsByClassName("results");

    


    if(playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++;
        announcingWinner.textContent = "You win! rock beats scissors";
        runningScore = playerScore + "-" + computerScore;
      
        
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
       computerScore++;
       announcingWinner.textContent= "You lose! paper beats rock";
       results[0].appendChild(announcingWinner);
    
    }
    else if(playerSelection == "rock" && computerSelection == "rock"){
        announcingWinner.textContent = "Tie Bozo!";
        results[0].appendChild(announcingWinner);
       
    }

    else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        announcingWinner.textContent= "You lose! rock beats scissors";
        results[0].appendChild(announcingWinner);
       
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;
        announcingWinner.textContent= "You win! scissors beats paper";
        results[0].appendChild(announcingWinner);
        
    }
    else if(playerSelection == "scissors" && computerSelection == "scissors"){
        announcingWinner.textContent= "Tie Bozo!";
        results[0].appendChild(announcingWinner);
      
    }

    else if(playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        announcingWinner.textContent = "You win! paper beats rock";
        results[0].appendChild(announcingWinner);
     
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        announcingWinner.textContent = "You lose! scissors beats paper";
        results[0].appendChild(announcingWinner);
     
    }
    else if(playerSelection == "paper" && computerSelection == "paper"){
        announcingWinner.textContent = "Tie Bozo!";
        results[0].appendChild(announcingWinner);
     
    }
    else{
        announcingWinner.textContent = "Did you break my mf code!?";
        results[0].appendChild(announcingWinner);
      
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