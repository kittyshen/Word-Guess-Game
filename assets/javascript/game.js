
//alert("link test meow");
/*Step 1. Create a word bank filled with at least 30 words. Build a array to store all those words
Step 2. Use math Random to pick a number then point the index in the wordBank array to retrive the word for current game session, save it in a varible named currentWord.
Step 3. get the length of the words it self by using string.length function? to be confirmed whether js has such function to call. otherwise need to write a function to calculate the string length using for loop.
Step 4. Create an array by splitting currentWord into another char array, using string.split()? store array in currentWordSplited[]
Step 5. place n * "_" symbol on the game screen, where n = the length of the words we get on step 3.
Step 6. initial the n*_ as a new array varible called guessedWord[].
Step 7. take user input, store it in a varible called userInput, if the userInput isn't a character a-z, ask user input again. 
Step 8. declare a varible called guessCount, initial it with game guess time allowrance. after user input an a-z char, guessCount--
Step 9. If userInput is a char from a-z,loop search userInput in currentWordSplited[], return the index number of the match.
Step 10. if find some match, assign the value of userInput into guessedWord[index].
Step 11. loop whole process from step to here until two ending condition meet. 
Step 12. if guessedWord is filled without any "_" left, then youWin varible ++  , pointer to step 2 and repeat
Step 13. if guessCount = 0 then youLose varible ++ , pointer to step 2 and repeat.*/


//testing various javasript function might be used in this assignment
//var wordBank=["one","three","they", "variable", "character", "function","number"]
//document.write (wordBank[4] + "<br>");
//document.write(wordBank[4].length + "<br>");
//var currentWordSplited = wordBank[4].split("");
//document.write (currentWordSplited +"<br>");
//document.write (currentWordSplited.length +"<br>");
//document.write(currentWordSplited[3]+"<br>");
//var randomNumber = Math.floor(Math.random()*10);
//document.write("The number "+(randomNumber+1), " letter in "+ wordBank[4] +" is letter " +   currentWordSplited[randomNumber]);

var wordBank = ["one", "three", "they", "variable", "character", "function", "number", "letter", "movie", "horse", "kitten"]
var randomNumber = Math.floor(Math.random() * 11); // get a random number from 0-9
var currentWord = wordBank[randomNumber];
var currentWordSplited = currentWord.split("");
var letterCount = currentWordSplited.length;
var guessCount = 10;
var guessedWord = [];
for (var i = 0; i < letterCount; i++) {
    guessedWord[i] = "_ ";
    document.getElementById("guessSection").innerHTML += guessedWord[i];
}

//check user input all letter, using regular expression to check user input
function checkLetter(event) {
    var userInput = event.key;
    var validLetters = /^[A-Za-z]+$/;
    if (userInput.match(validLetters)) {
        return true;
        guessCount--;
    }
    else {
        alert('Please input alphabet characters only');
        return false;
    }
}


//document.write(translate);

//var keycode = fromCharCode(userInput);
//document.write (keycode);


//for (var j = 0; j < letterCount; j++ )
//document.write (guessedWord[j]);



