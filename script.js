// have a variable that stores computer wins
let cScore = 0;
// have a variable that stores player wins
let pScore = 0;
// have a variable that stores ties
let tScore = 0;



/*function playerPlay() {
    let getInput = prompt("Select either Rock, Paper or Scissors: ").toLowerCase();
    let playerSelection = getInput;  // this prompt is running twice, need to find the fix  
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        return playerSelection;
    }

    else {
        playerPlay();
    }
}*/


function computerPlay() {
    let computerChoices = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    
    return computerChoices[randomNum];

}




function roundPlay(choice) {
    let c = computerPlay();
    let p = choice;
    let lose = `You Lose! ${c} beats ${p}`;
    let win = `You Win! ${p} beats ${c}`;
    let tie = "Tie! You and the computer selected the same choice!";
    let result = "";
    let resultHTML = document.getElementById('result'); 
    switch (p) {

        case "rock":
            if (c == "paper") {
                resultHTML.textContent = lose;
                result = "computer";
            }
            else if (c == "scissors") {
                resultHTML.textContent = win;
                result = "player";
            }
            else {
                resultHTML.textContent = tie;
                result = "tie";
            }
            break;

        case "paper":
            if (c == "scissors") {
                resultHTML.textContent = lose;
                result = "computer";
            }
            else if (c == "rock") {
                resultHTML.textContent = win;
                result = "player";
            }
            else {
                resultHTML.textContent = tie;
                result = "tie";
            }
            break;

        case "scissors":
            if (c == "rock") {
                resultHTML.textContent = lose;
                result = "computer";
            }
            else if (c == "paper") {
                resultHTML.textContent = win;
                result = "player";
            }
            else {
                resultHTML.textContent = tie;
                result = "tie";
            }
            break;

        default:
            alert("Something went wrong");
    }
    return result;
}



function game(choice) {

    // loop for 5 games 
    // while (cScore + pScore + tScore < 5) {
    
    let winner = roundPlay(choice);
    let pScoreHTML = document.getElementById('pScore');
    let cScoreHTML = document.getElementById('cScore');
    
    switch (winner) {
        case "player":
            pScore += 1;
            pScoreHTML.textContent = pScore;
            break;

        case "computer":
            cScore += 1;
            cScoreHTML.textContent = cScore;
            break;

        default:
            
            break;

        //}

    }

    if (pScore == 5 || cScore == 5){
        if(pScore == 5){
            alert("YOU WIN");
            pScore = 0;
            cScore = 0;
            pScoreHTML.textContent = pScore;  
            cScoreHTML.textContent = cScore;
        }
        else{
            alert("YOU LOSE");
            pScore = 0;
            cScore = 0;
            pScoreHTML.textContent = pScore;  
            cScoreHTML.textContent = cScore;
        }
    }
    return;

}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
    })
})


