    //how to not use the same word until all words have been used once?
    var words = ["blue", "yellow", "orange", "silver", "bronze", "periwinkle", "mahogony", "taupe", "alabaster", "aquamarine"];
    var wins = 0;
    var images = [];
    images[0] = "./assets/images/blue.jpg";
    images[1] = "./assets/images/yellow.jpg";
    images[2] = "./assets/images/orange.jpg";
    images[3] = "./assets/images/silver.jpg";
    images[4] = "./assets/images/bronze.jpg";
    images[5] = "./assets/images/periwinkle.jpg";
    images[6] = "./assets/images/mahogony.jpg";
    images[7] = "./assets/images/taupe.jpg";
    images[8] = "./assets/images/alabaster.jpg";
    images[9] = "./assets/images/aquamarine.jpg";
    
    startGame();

//get a letter; start the game
function startGame(){
    var lettersGuessed = [];
    var numGuesses = 15;
    document.getElementById("num-guesses").innerText = numGuesses;
    var currentWord = words[Math.floor(Math.random() * words.length)];
    console.log(currentWord);
    console.log(words.indexOf(currentWord));
    var currentBlank = []; //starts the number of _ at 0
    var wordToArray = currentWord.split(""); //splits the current word into an array, with one letter per space
    console.log(wordToArray); //delete later -- shows current word as an array, one letter per space
    var gameWin = currentWord.length; //starts the letter count = to current word length
    console.log(gameWin + " until game win");
    for (i = 0; i<currentWord.length; i++){ 
        currentBlank.push(" _ ");
    }
    console.log(currentBlank);//shows spaces on the screen
    document.getElementById("current-blank").innerText = currentBlank.join(" ");

    //starts a new word
    document.onkeyup = function (playGame){
        var letter = 0;
        var badLetters;
        console.log(playGame.key + " letter pressed");
        //var wordWin = currentWord; //don't think I need another var here; used to change the pink box

        //compares the key pressed to each letter in the current word & checks to see if it was already pressed
        for(var j = 0; j<currentWord.length; j++){
            if (playGame.key.toLowerCase() === currentBlank[j]){
                console.log("already there");
                letter++;
            }
            else if (playGame.key.toLowerCase() === wordToArray[j]){
                currentBlank[j] = wordToArray[j];
                document.getElementById("current-blank").innerText = currentBlank.join(" ");
                console.log(currentBlank.join(" "));
                letter++; //if the letter is in current word letter++
                console.log(letter+" letter, so 57 doesn't run");
                gameWin--;
                console.log(gameWin+ " until gameWin");
            }
        }

       //check if the letter is already in the "already guessed" array. if not, add it
       if (letter===0){
            alreadyGuessed();
            console.log(letter + " letter");
            if (badLetters === -1) {
                lettersGuessed.push(playGame.key);
                document.getElementById("letters-guessed").innerText = lettersGuessed.join(" ");
                numGuesses--;
                console.log(numGuesses + " numGuesses");
                document.getElementById("num-guesses").innerText = numGuesses;
            }
        }
        function alreadyGuessed() {
            badLetters = lettersGuessed.indexOf(playGame.key);
            console.log(badLetters + " badLetters -1");//should be -1
        }

        //checks to see when there are no more letters to find in the current word to end the game
        if (gameWin===0){
            console.log("if game over =0");
            winGame();
        }
        //what happens when the game ends with a win
        function winGame(){
            console.log("function winGame");
            displayPic();
            emptyLettersGuessed();
            document.getElementById("word-win").innerText = "Yes! The word was " + currentWord + ".";
            wins++;
            document.getElementById("win-count").innerText = wins;
            startGame();
        }

        //checks to see when the num of guessed = 0 to end the game
        if (numGuesses===0){
            console.log("numGuesses===0");
            loseGame();
        }
        //what happens when the game ends with a loss
        function loseGame(){
            console.log("function loseGame");
            displayPic();
            emptyLettersGuessed();
            document.getElementById("word-win").innerText = "The word was " + currentWord + ".";
            startGame();
        }

        //function to empty alreadyGuessed letters array
        function emptyLettersGuessed(){
            lettersGuessed = [];
            console.log(lettersGuessed+" lettersGuessed");
            document.getElementById("letters-guessed").innerText = "";

        }

        function displayPic(){
            document.imagePic.src = images[words.indexOf(currentWord)];
        }

    }//end of function "playGame" to play a new word
}//end of function startGame

//play music