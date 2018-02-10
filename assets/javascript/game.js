//how to not use the same word until all words have been used once?
var words = ["blue", "yellow", "orange", "silver", "bronze", "periwinkle", "mahogony", "taupe", "alabaster", "aquamarine"];


    var wins = 0;
    var numGuesses = 15;
    document.getElementById("num-guesses").innerHTML = numGuesses;
    var lettersGuessed = [];
    //var lettersGuessed = "";
    var currentWord = words[Math.floor(Math.random() * words.length)]; //randomly chooses a word from the words array
    console.log(currentWord); //delete later -- shows current word
    var currentBlank = []; //starts the number of _ at 0
    var wordToArray = currentWord.split(""); //splits the current word into an array, with one letter per space
    console.log(wordToArray); //delete later -- shows current word as an array, one letter per space
    var gameOver = currentWord.length; //starts the letter count = to current word length
    console.log(gameOver);

    //makes the number of _ for the current word on the board (but doesn't write it yet)
    for (i = 0; i<currentWord.length; i++){ 
        currentBlank.push(" _ ");
    }
    console.log(currentBlank);//delete later -- shows current word as _, one _ per letter
    //console.log(currentBlank.join(" "));

//writes the number of _ for the current word on the board
    //currentBlank= currentBlank.join(" ");
    console.log(currentBlank);//shows spaces on the screen
    document.getElementById("current-blank").innerHTML = currentBlank;

//get a letter; start the game
document.onkeyup = function (playGame){

    var letter = 0;
  
    //check the key to each letter in the current word
    for(var j = 0; j<currentWord.length; j++){
        if (playGame.key.toLowerCase() === wordToArray[j]){
            currentBlank[j] = wordToArray[j];
            document.getElementById("current-blank").innerHTML = currentBlank.join(" ");
            console.log(currentBlank.join(" "));
            letter++; 
            console.log(letter);
            gameOver--;
            console.log(gameOver);
        }
    }

    if (letter===0){
        lettersGuessed.push(playGame.key);
        document.getElementById("letters-guessed").innerHTML = lettersGuessed.join(" ");
        numGuesses--;
        document.getElementById("num-guesses").innerHTML = numGuesses;
    }

    //checks to see when there are no more letters to find in the current word to end the game
    if (gameOver===0){
        stopGame();
    }

    //what happens when the game ends
    function stopGame(){
        alert("Game Over");
    }


}//end of function startGame

//if all letters guess before number of guesses is 0
//increase wins by 1
//display picture
//play music

//if letters not guessed before number of guess is 0
//display picture
//fill in missing letters
