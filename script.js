function computerPlay() {
    let computerChoices = ["rock", "paper", "scissor"];
    let randomNum = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    return computerChoices[randomNum];

}


function playerPlay() {
    let getInput = prompt("Select either Rock, Paper or Scissors: ").toLowerCase();
    let playerSelection = getInput;  // this prompt is running twice, need to find the fix  
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        return playerSelection;
    }

    else {
        playerPlay();
    }
}


function roundPlay() {
    let c = computerPlay();
    let p = playerPlay();
    let lose = `You Lose! ${c} beats ${p}`;
    let win = `You Win! ${p} beats ${c}`;
    let tie = "You tied!";
    let result = "";

    switch (p) {

        case "rock":
            if (c == "paper") {
                alert(lose);
                result = "computer";
            }
            else if (c == "scissors") {
                alert(win);
                result = "player";
            }
            else {
                alert(tie)
                result = "tie";
            }
            break;

        case "paper":
            if (c == "scissors") {
                alert(lose);
                result = "computer";
            }
            else if (c == "rock") {
                alert(win);
                result = "player";
            }
            else {
                alert(tie)
                result = "tie";
            }
            break;

        case "scissors":
            if (c == "rock") {
                alert(lose);
                result = "computer";
            }
            else if (c == "paper") {
                alert(win);
                result = "player";
            }
            else {
                alert(tie)
                result = "tie";
            }
            break;

        default:
            alert("Something went wrong");
    }
    return result;
}


function game() {
    // have a variable that stores computer wins
    let cScore = 0;
    // have a variable that stores player wins
    let pScore = 0;
    // have a variable that stores ties
    let tScore = 0;
    // loop for 5 games 
    while (cScore + pScore + tScore < 5) {
        let winner = roundPlay();
        switch (winner) {
            case "player":
                pScore += 1;
                break;

            case "computer":
                cScore += 1;
                break;

            default:
                tScore += 1;
                break;

        }
        console.log(`the current score is Computer: ${cScore} versus Player: ${pScore}. There have been ${tScore} ties`)
    }

    if (pScore > cScore) {
        alert("Player wins! Computer loses!")
    }
    else if (pScore < cScore) {
        alert("Computer wins! Player loses!")
    }

    else {
        alert("It was a tie");
    }
    return;

}

game();
//roundPlay();