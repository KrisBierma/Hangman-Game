var words = ["blue", "yellow", "orange", "silver", "bronze", "periwinkle", "mahogany", "taupe", "alabaster", "aquamarine"];
var songTitles = ['"Blue Ice" by Shout Out Louds', '"Yellow Moon" by Barnaby Bright', '"Orange Blossoms" by JJ Grey & Mofro', 
'"The Golden Age and the Silver Girl" by Tyler Lyle', '"Carried Away" by Crosby, Stills and Nash', '"Periwinkle Sky" by The Dahls', 
'"Theme from Mahogany" by Diana Ross', '"Ou La La" by René La Taupe', '"Alabaster" by Rend Collective', 
'"Aquamarine" by Heather Nova'];
var wins = 0;
var losses = 0;
var images = [];
var music = [];
images[0] = "./assets/images/blue.jpg";
images[1] = "./assets/images/yellow.jpg";
images[2] = "./assets/images/orange.jpg";
images[3] = "./assets/images/silver.jpg";
images[4] = "./assets/images/bronze.jpg";
images[5] = "./assets/images/periwinkle.jpg";
images[6] = "./assets/images/mahogany.jpg";
images[7] = "./assets/images/taupe.jpg";
images[8] = "./assets/images/alabaster.jpg";
images[9] = "./assets/images/aquamarine.jpg";

music[0] = new Audio("./assets/songs/blue.mp3");
music[1] = new Audio("./assets/songs/yellow.mp3");
music[2] = new Audio("./assets/songs/orange.mp3");
music[3] = new Audio("./assets/songs/silver.mp3");
music[4] = new Audio("./assets/songs/bronze.mp3");
music[5] = new Audio("./assets/songs/periwinkle.mp3");
music[6] = new Audio("./assets/songs/mahogany.mp3");
music[7] = new Audio("./assets/songs/taupe.mp3");
music[8] = new Audio("./assets/songs/alabaster.mp3");
music[9] = new Audio("./assets/songs/aquamarine.mp3");

    
startGame();

//get a letter; start the game
function startGame(){
    var lettersGuessed = [];
    var numGuesses = 12;
    document.getElementById("num-guesses").innerText = numGuesses;
    var currentWord = words[Math.floor(Math.random() * words.length)];
    console.log(currentWord);
    var currentBlank = []; //starts the number of _ at 0
    var wordToArray = currentWord.split(""); //splits the current word into an array, with one letter per space
    var gameWin = currentWord.length; //starts the letter count = to current word length
    for (i = 0; i<currentWord.length; i++){ 
        currentBlank.push(" _ ");
        }
    document.getElementById("current-blank").innerText = currentBlank.join(" ");
    var currentSong = music[words.indexOf(currentWord)];

    //starts a new word
    document.onkeyup = function (playGame){
        var letter = 0;
        var badLetters;

        //compares the key pressed to each letter in the current word & checks to see if it was already pressed
        for(var j = 0; j<currentWord.length; j++){
            if (playGame.key.toLowerCase() === currentBlank[j]){
                letter++;
            }
            else if (playGame.key.toLowerCase() === wordToArray[j]){
                currentBlank[j] = wordToArray[j];
                document.getElementById("current-blank").innerText = currentBlank.join(" ");
                letter++; //if the letter is in current word letter++
                gameWin--;
                }
            }

        //check if the letter is already in the "already guessed" array. if not, add it
        if (letter===0){
            badLetters = lettersGuessed.indexOf(playGame.key.toUpperCase());
            if (badLetters === -1) {
                lettersGuessed.push(playGame.key.toUpperCase());
                document.getElementById("letters-guessed").innerText = lettersGuessed.join(" ");
                numGuesses--;
                document.getElementById("num-guesses").innerText = numGuesses;
                }
            }

        //checks to see when there are no more letters to find in the current word to end the game with a win
        if (gameWin===0){
            displayPic();
            stopMusic();
            playMusic();
            emptyLettersGuessed();
            document.getElementById("word-win").innerText = "Yes! The word was " + currentWord + ".";
            document.getElementById("song-title").innerText = songTitles[words.indexOf(currentWord)];
            wins++;
            document.getElementById("win-count").innerText = wins;
            startGame();            }

        //checks to see when the num of guessed = 0 to end the game with a loss
        if (numGuesses===0){
            stopMusic();
            displayPic();
            document.getElementById("song-title").innerText = "";
            emptyLettersGuessed();
            document.getElementById("word-win").innerText = "The word was " + currentWord + ".";
            losses++;
            document.getElementById("loss-count").innerText = losses;
            startGame();        }

        //function to empty already Guessed letters array
        function emptyLettersGuessed(){
            lettersGuessed = [];
            document.getElementById("letters-guessed").innerText = "";
            }

        function displayPic(){
            document.imagePic.src = images[words.indexOf(currentWord)];
            }

        function playMusic(){
            currentSong.play();
            }

        function stopMusic() {
            for (m=0; m<music.length; m++){
                music[m].pause();
                }
            }
        }
}