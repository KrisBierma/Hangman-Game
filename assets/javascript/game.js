//how to not use the same word until all words have been used once?
var words = ["blue", "yellow", "orange", "silver", "bronze", "periwinkle", "mahogony", "taupe", "alabaster", "aquamarine"];


    var wins = 0;
    var guesses = 15;
    var lettersGuessed = [];
    var currentWord = words[Math.floor(Math.random() * words.length)]; //randomly chooses a word from the words array
    console.log(currentWord); //delete later -- shows current word
    var currentBlank = []; //starts the number of _ at 0
    var wordToArray = currentWord.split(""); //splits the current word into an array, with one letter per space
    console.log(wordToArray); //delete later -- shows current word as an array, one letter per space

    //makes the number of _ for the current word on the board (but doesn't write it yet)
    for (i = 0; i<currentWord.length; i++){ 
        currentBlank.push(" _ ");
    }
    console.log(currentBlank);//delete later -- shows current word as _, one _ per letter
    //console.log(currentBlank.join(" "));

//writes the number of _ for the current word on the board
    currentBlank= currentBlank.join(" ");
    document.getElementById("current-blank").innerHTML = currentBlank;
    //console.log(playGame.key); //delete later

//get the initial key press to start the game
document.onkeyup = function (playGame){
    console.log(playGame.key); //delete later

    //check the key to each letter in the current word
    for(var j = 0; j<words.length; j++){
        if (playGame.key.toLowerCase() === wordToArray[j]){
            currentBlank[j] = playGame.key.toLowerCase; 
        }
        else {
            lettersGuessed.push();
            document.getElementById("letters-guessed").innerHTML = playGame.key.toLowerCase();
            console.log(lettersGuessed);
        }
    }
}//end of function startGame


//id = winCount
//var = wins

//if there, insert on _
//continue comparing to end of word
//if there, decrease number of guesses by 1

//if letter not there, decrease number of guesses by 1
//add letter to letters already guessed

//if all letters guess before number of guesses is 0
//increase wins by 1
//display picture
//play music

//if letters not guessed before number of guess is 0
//display picture
//fill in missing letters
