function getComputerChoice(){ //randomly selects a choice for the computer
    let computerChoice = ["Rock", "Paper", "Scissors"];
    let random = computerChoice[Math.floor(Math.random()*3)]; //chooses random index from 0-2 of computerChoice
    console.log(random);
    return random;
}

function getPlayerChoice(){ //prompts use to choose rock paper or scissors
    let playerChoice = capitalize(prompt("Choose Rock, Paper, or Scissors"));
    if(playerChoice == "Rock"){
        check = 1;
    }
    else if(playerChoice == "Paper"){
        check = 1;
    }
    else if(playerChoice == "Scissors"){
        check = 1;
    }
    //makes sures players types a valid answer
    while(check == 0)
    {   
        playerChoice = capitalize(prompt("Please choose Rock, Paper, or Scissors"));
        if(playerChoice == "Rock"){
            check = 1;
        }
        else if(playerChoice == "Paper"){
            check = 1;
        }
        else if(playerChoice == "Scissors"){
            check = 1;
        }
    }
    check = 0;
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
        lose++;
        return "You lose the computer chose " + computerChoice + "!";
    }
    else if((playerChoice == "Rock" && computerChoice == "Scissors") ||(playerChoice == "Scissors" && computerChoice == "Paper"))
    {   
        win++;
        return "You win the computer chose " + computerChoice + "!";
    }
}

function game(){

    for(let i = 0; i < 5; i++){
        let computerChoice = getComputerChoice();
        let playerChoice = capitalize(getPlayerChoice());
        playRound(computerChoice, playerChoice);
        console.log(playRound(computerChoice, playerChoice));

    }
    if(win > lose){
        console.log("You win!");
    }
    else{
        console.log("You lose!");
    }
  
}

let win = 0;
let lose = 0;
let check = 0;
game();


