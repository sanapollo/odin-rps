computerPlay = () => {
    let random = Math.floor(Math.random() * 10);
    let answer;

    if (random > 3 && random < 7) {
        answer = "paper";
    } else if (random <= 3) {
        answer = "rock";
    } else if (random > 6) {
        answer = "scissors";
    } else {
        answer = "Something went wrong";
    }
    return answer;

}

userPlay = () => {
    //Definitely want this to take an input
    let answer = prompt("Rock Paper Or Scissors?");
    answer = answer.toLowerCase();
    return answer;
}

demo = () => {
    let answer = computerPlay();
    return answer;
}


playGame = (user=demo()) => {
    let computer = computerPlay();
    let winner;

    //Game Logic
    if (user == "rock") {
        if (computer == "paper") {
            winner = false;
        } else if (computer == "scissors") {
            winner = true;
        } else if (computer == "rock") {
            winner = "tie";
        }
    } else if (user == "scissors") {
        if (computer == "paper") {
            winner = true;
        } else if (computer == "scissors") {
            winner = "tie";
        } else if (computer == "rock") {
            winner = false;
        }
    } else if (user == "paper") {
        if (computer == "paper") {
            winner = "tie";
        } else if (computer == "scissors") {
            winner = false;
        } else if (computer == "rock") {
            winner = true;
        }
    }
    console.log(winner);
    //Winner Message
    if (winner == "tie") {
        winner = "You Tied! Try again";
    } else if (winner) {
        winner = "You Won! Well done!";
    } else {
        winner = "You Lost! Computer Won.";
    }

    return winner;
}

fewGames = (choice = demo()) => {
    let max = 5;
    let pcounter = 0, ccounter = 0;

    for (let i = 0; i < max; i++) {
        let game = playGame(choice);
        
        //Counting
        
        if (game == "You Won! Well done!") {
            pcounter +=1;
        } else if (game == "You Lost! Computer Won."){
            ccounter +=1;
        }
        console.log(game);
        console.log(`Game no: ${i}. Wins: P ${pcounter}, C ${ccounter}`);
    }



}

console.log(fewGames("rock"));