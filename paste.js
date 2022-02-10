//customizable number of games to play in console

fewGames = (choice) => {
    let max = 5;
    let pcounter = 0, ccounter = 0;

    for (let i = 0; i < max; i++) {
        let game = playGame(choice);
        
        //Counting
        
        if (game == "You won! Well done!") {
            pcounter +=1;
        } else if (game == "You lost! Computer won."){
            ccounter +=1;
        }
        console.log(game);
        console.log(`Game no: ${i}. Wins: P ${pcounter}, C ${ccounter}`);
    }}