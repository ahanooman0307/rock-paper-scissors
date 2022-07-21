
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const crock = document.querySelector("#crock");
const cpaper = document.querySelector("#cpaper");
const cscissors = document.querySelector("#cscissors");
const score = document.querySelector(".score");



let playerChoice = "";

function getComputerChoice(){ //randomly selects a choice for the computer
    let computerChoice = ["Rock", "Paper", "Scissors"];
    let random = computerChoice[Math.floor(Math.random()*3)]; //chooses random index from 0-2 of computerChoice
    console.log(random);
    //below is code to show computer choice
    if(random == "Rock")
    {
        crock.style.cssText = "background-color: red";
        cpaper.style.cssText = "background-color: black";
        cscissors.style.cssText = "background-color: black";
    }
    else if(random == "Paper")
    {
        crock.style.cssText = "background-color: black";
        cpaper.style.cssText = "background-color: red";
        cscissors.style.cssText = "background-color: black";
    }
    else if(random == "Scissors")
    {
        crock.style.cssText = "background-color: black";
        cpaper.style.cssText = "background-color: black";
        cscissors.style.cssText = "background-color: red";   
    }
    return random;
}


function playRound(computerChoice, playerChoice){
    if(playerChoice == computerChoice)
    {
        console.log("draw");
        return "It's a draw!";
    }
    else if((playerChoice == "Rock" && computerChoice == "Paper") || (playerChoice == "Paper" && computerChoice == "Scissors") || (playerChoice == "Scissors" && computerChoice == "Rock"))
    {
        computer_score++;
        console.log("computer_score");
        return "You computer_score the computer chose " + computerChoice + "!";
    }
    else if((playerChoice == "Rock" && computerChoice == "Scissors") ||(playerChoice == "Scissors" && computerChoice == "Paper") || (playerChoice == "Paper" && computerChoice == "Rock"))
    {
        player_score++;
        console.log("player_score");
        score.textContent = `Score: ${player_score}`;
        return "You player_score the computer chose " + computerChoice + "!";

    }
}


function game(){

    for(let i = 0; i < 5; i++){
        let computerChoice = getComputerChoice();
        let playerchoice = playerChoice;
        playRound(computerChoice, playerChoice);
        alert(playRound(computerChoice, playerChoice));

    }
    if(player_score > computer_score){
        alert("You player_score!");
    }
    else{
        alert("You computer_score!");
    }

}

// game();



rock.addEventListener('click', () => {
    console.log("Rock");
    let computerChoice = getComputerChoice();
    playerChoice = "Rock";
    rock.style.cssText = "background-color: aqua";
    paper.style.cssText = "background-color: black";
    scissors.style.cssText = "background-color: black";
    playRound(computerChoice, playerChoice);
    if(player_score == 5){
        alert("you player_score");
    }

})
paper.addEventListener('click', () =>{
    console.log("Paper");
    let computerChoice = getComputerChoice();
    playerChoice = "Paper";
    rock.style.cssText = "background-color: black";
    paper.style.cssText = "background-color: aqua";
    scissors.style.cssText = "background-color: black";
    playRound(computerChoice, playerChoice);
    if(player_score == 5){
        alert("you player_score");
    }
})
scissors.addEventListener('click', () => {
    console.log("Scissors");
    let computerChoice = getComputerChoice();
    playerChoice = "Scissors";
    rock.style.cssText = "background-color: black";
    paper.style.cssText = "background-color: black";
    scissors.style.cssText = "background-color: aqua";
    playRound(computerChoice, playerChoice);
    if(player_score == 5){
        alert("you win!");
    }
})



let player_score = 0;
let computer_score = 0;
let check = 0;
