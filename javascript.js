function getComputerChoice(){
    let computerChoice = ["Rock", "Paper", "Scissors"];
    let random = computerChoice[Math.floor(Math.random()*3)]; //chooses random index from 0-2 of computerChoice
    console.log(random);
    return random;
}

function getPlayerChoice(){
    let playerChoice = prompt("Choose Rock, Paper, or Scissors");
    return playerChoice;
}

function capitalize(word){
    let result = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return result; 
    }

function playRound(computerChoice, playerChoice){
    if(playerChoice == computerChoice)
    {
        return "It's a draw!";
    }
    else if((playerChoice == "Rock" && computerChoice == "Paper") || (playerChoice == "Paper" && computerChoice == "Scissors"))
    {
        return "You lose the computer chose " + computerChoice + "!";
    }
    else if((playerChoice == "Rock" && computerChoice == "Scissors") ||(playerChoice == "Scissors" && computerChoice == "Paper"))
    {   
        win++;
        return "You win the computer chose " + computerChoice + "!";
    }
}

function game(computerChoice, playerChoice){

    for(let i = 0; i < 5; i++){
        playRound(computerChoice, playerChoice);
        console.log(playRound(computerChoice, playerChoice));
        computerChoice = getComputerChoice();
        playerChoice = capitalize(getPlayerChoice());
    }
    if(win == 3){
        console.log("You win!");
    }
    else{
        console.log("You lose!");
    }
  
}

let win = 0;
let computerChoice = getComputerChoice();
let playerChoice = capitalize(getPlayerChoice());
game(computerChoice, playerChoice);

// console.log(playRound(computerChoice, playerChoice));


