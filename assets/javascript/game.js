    //how to not use the same word until all words have been used once?
    var words = ["blue", "yellow", "orange", "silver", "bronze", "periwinkle", "mahogony", "taupe", "alabaster", "aquamarine"];
    
    var images = [];
    images[0] = "../images/blue.jpg";
    images[1] = "../images/yellow.jpg";
    
    var wins = 0;
    //document.getElementById("num-guesses").innerHTML = numGuesses;

    startGame();

//get a letter; start the game
function startGame(){
    var lettersGuessed = [];
    var numGuesses = 15;
    document.getElementById("num-guesses").innerHTML = numGuesses;
    var currentWord = words[Math.floor(Math.random() * words.length)];
    var currentBlank = []; //starts the number of _ at 0
    var wordToArray = currentWord.split(""); //splits the current word into an array, with one letter per space
    console.log(wordToArray); //delete later -- shows current word as an array, one letter per space
    var gameOver = currentWord.length; //starts the letter count = to current word length
    for (i = 0; i<currentWord.length; i++){ 
        currentBlank.push(" _ ");
    }
    console.log(currentBlank);//shows spaces on the screen
    document.getElementById("current-blank").innerHTML = currentBlank.join(" ");

    //starts a new word
    document.onkeyup = function (playGame){
        var letter = 0;
        var badLetters;
        var wordWin = currentWord;

        //compare the key to each letter in the current word
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

        //check if the letter is already in the "already guessed" array. if not, add it
        function alreadyGuessed() {
            badLetters = lettersGuessed.indexOf(playGame.key);
            console.log(badLetters);
        }

        if (letter===0){
            alreadyGuessed();
            if (badLetters === -1) {
                lettersGuessed.push(playGame.key);
                document.getElementById("letters-guessed").innerHTML = lettersGuessed;
                numGuesses--;
                document.getElementById("num-guesses").innerHTML = numGuesses;
            }
        }

        //checks to see when there are no more letters to find in the current word to end the game
        if (gameOver===0){
            stopGame();
        }

        //what happens when the game ends with a win
        function stopGame(){
            empty();
            document.getElementById("word-win").innerHTML = "Yes! The word was " + wordWin + ".";
            wins++;
            document.getElementById("win-count").innerHTML = wins;
            startGame();
            //displayPic();
        }

        //checks to see when the num of guessed = 0 to end the game
        if (numGuesses===0){
            loseGame();
        }

        //what happens when the game ends with a loss
        function loseGame(){
            empty();
            document.getElementById("word-win").innerHTML = "The word was " + wordWin + ".";
            startGame();
            //displayPic();
        }

        //function to empty alreadyGuessed letters array
        function empty(){
            lettersGuessed = [];
            console.log(lettersGuessed);
            document.getElementById("letters-guessed").innerHTMl = lettersGuessed.join(" ");
        }

   //     function displayPic(){
     //       document.imagePic.src = images[imgNum];
       //     if ()
        //}



    }//end of function "playGame" to play a new word
}//end of function startGame


//if all letters guess before number of guesses is 0
//display picture
//play music

//if letters not guessed before number of guess is 0
//display picture

