function computerPlay(){
    let computerChoices = ["rock", "paper", "scissor"];
    let randomNum = Math.floor(Math.random() * (2 - 0 + 1) + 0); 
    return computerChoices[randomNum];
  
}


function playerPlay(){
    let getInput = prompt("Select either Rock, Paper or Scissors: ").toLowerCase(); 
    let playerSelection = getInput;  // this prompt is running twice, need to find the fix  
    if(playerSelection  == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
     return playerSelection;
    }

    else {
    playerPlay();
    }
}


function roundPlay(){
    let c = computerPlay();
    let p = playerPlay();
    let lose = `You Lose! ${c} beats ${p}`;
    let win = `You Win! ${p} beats ${c}`;
    let tie = "You tied!";
 
    
  switch(p) {

    case "rock":
        if(c == "paper"){
            alert(lose);
        }
        else if(c == "scissors"){
            alert(win);
        }
        else {
            alert(tie)
        }
        break;

    case "paper":
        if(c == "scissors"){
            alert(lose);
        }
        else if(c == "rock"){
            alert(win);
        }
        else {
            alert(tie)
        }
        break;

    case "scissors":
        if(c == "rock"){
            alert(lose);
        }
        else if(c == "paper"){
            alert(win);
        }
        else {
            alert(tie)
        }
        break;

    default :
        alert("Something went wrong");
  }
}

roundPlay();