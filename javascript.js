

let playerChoice = "";



function getComputerChoice(){ //randomly selects a choice for the computer
    let computerChoice = ["Rock", "Paper", "Scissors"];
    let random = computerChoice[Math.floor(Math.random()*3)]; //chooses random index from 0-2 of computerChoice
    console.log(random);
    return random;
}


function playRound(computerChoice, playerChoice){
    if(playerChoice == computerChoice)
    {
        console.log("a");
        return "It's a draw!";
    }
    else if((playerChoice == "Rock" && computerChoice == "Paper") || (playerChoice == "Paper" && computerChoice == "Scissors"))
    {   
        lose++;
        console.log("b");
        return "You lose the computer chose " + computerChoice + "!";
    }
    else if((playerChoice == "Rock" && computerChoice == "Scissors") ||(playerChoice == "Scissors" && computerChoice == "Paper"))
    {   
        win++;
        console.log("c");
        return "You win the computer chose " + computerChoice + "!";
        
    }
}


function game(){

    for(let i = 0; i < 5; i++){
        let computerChoice = getComputerChoice();
        let playerchoice = playerChoice;
        playRound(computerChoice, playerChoice);
        alert(playRound(computerChoice, playerChoice));

    }
    if(win > lose){
        alert("You win!");
    }
    else{
        alert("You lose!");
    }
  
}

// game();


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener('click', () => {
    console.log("Rock");
    let computerChoice = getComputerChoice();
    playerChoice = "Rock";
    playRound(computerChoice, playerChoice);

})
paper.addEventListener('click', () =>{
    console.log("Paper");
    let computerChoice = getComputerChoice();
    playerChoice = "Paper";
    playRound(computerChoice, playerChoice);
})
scissors.addEventListener('click', () => {
    console.log("Scissors");
    let computerChoice = getComputerChoice();
    playerChoice = "Scissors";
    playRound(computerChoice, playerChoice);
})



let win = 0;
let lose = 0;
let check = 0;
