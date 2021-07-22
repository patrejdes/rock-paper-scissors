// first we need 3 variables rock, paper scissors
let message = "";
let rockPaperScissors = ["rock", "paper", "scissors"]
// random selection computer
function computerPlay (){
    let randomComputer = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    return randomComputer;
}

// move selection human, insensitive
function playerSelection (){
    let input = prompt();
    return input;
} 

//
let h = 0;
let c = 0;

function letsPlay(playerSelection, computerPlay) {

    if (playerSelection == "rock" && computerPlay == "paper") {
        return message = "good luck next time, you lost" + "         " + h +" - " + ++c;
    
    }else if (playerSelection == "rock" && computerPlay == "rock") {
        return message = "its a draw" + "         " + h +" - " + c;
    }
    else if(playerSelection == "rock" && computerPlay == "scissors") {
        return message = "congratulations, you won" + "         " + ++h +" - " + c;
    }
    else if(playerSelection == "paper" && computerPlay == "scissors") {
        return message = "good luck next time, you lost" + "         " + h +" - " + ++c;
    
    }else if (playerSelection == "paper" && computerPlay == "paper") {
        return message = "its a draw" + "         " + h +" - " + c;
    }
    else if(playerSelection == "paper" && computerPlay == "rock") {
        return message = "congratulations, you won";
    }
    else if(playerSelection == "scissors" && computerPlay == "rock") {
        return message = "good luck next, time you lost";
    
    }else if (playerSelection == "scissors" && computerPlay == "scissors") {
        return message = "its a draw" + "         " + h +" - " + c;
    }
    else if(playerSelection == "scissors" && computerPlay == "paper") {
        return message = "congratulations, you won";
    }else {
        return message = "wrong value";
    }
}
//alert(letsPlay(playerSelection(), computerPlay()));
alert(letsPlay("rock", "paper"));
alert(letsPlay("rock", "paper"));
alert(letsPlay("rock", "paper"));
alert(letsPlay("rock", "paper"));