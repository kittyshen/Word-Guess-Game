
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
Step 11. loop whole process from step 7 to here until two ending condition meet. 
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
var randomNumber = Math.floor(Math.random() * 11); // get a random number from 0-10
var currentWord = wordBank[randomNumber];
var currentWordSplited = currentWord.split("");
var letterCount = currentWordSplited.length;
var guessCount = 10;
var guessedWord = [];

//initial the guessedWord array with all "_ "
for (var i = 0; i < letterCount; i++) {
    guessedWord[i] = "_ ";
  //  document.getElementById("guessSection").innerHTML += guessedWord[i];
}
function printCurrent(aArray){
    document.getElementById("guessSection").innerHTML = ""; // reset before printing
    for (var i = 0; i < aArray.length; i++) {
        document.getElementById("guessSection").innerHTML += aArray[i];
    }
}
printCurrent(guessedWord);
console.log(guessCount);
    
    //set two pointer var pointing to the elements in DOM we want to modify for easy access
    var  userTyped = document.getElementById("userTyping");
    var letterUsed = document.getElementById("letterAlreadyUsed");

    // Next, give JavaScript a function to execute when onkeyup event fires.
    document.onkeyup = function(event) {
        var userInput = event.key;
        userTyped.textContent = userInput; //change html userTyping element to what user just typed.
        var validLetters = /^[A-Za-z]+$/;
        if (userInput.match(validLetters)) {
            
            document.getElementById("guessLeft").innerHTML = "Remaining guess count: "+guessCount;
            guessCount--;
            letterUsed.textContent += userInput.toUpperCase()+","; 
            console.log(guessCount);

            console.log("debug-cheat: target word is " + currentWord);

            //if user have't reach the max number of guess try, do the loop check with the user inputed letter.
            if(guessCount>0){
                for( var j = 0 ; j<letterCount; j++ ){ //check user input start here
                    if(userInput  == currentWordSplited[j]){
                        guessedWord[j] = userInput;
                        printCurrent(guessedWord); // everytime find a matched letter redo current guess progress printing on DOM
                    }
                    if (guessedWord.indexOf("_ ") == -1){  // check winning condition met or not,which means the guessedWord don't contain any initial "_ "
                        document.getElementById("status").innerHTML = "you Win! ";
                    }
                }
            }
            else{
                document.getElementById("status").innerHTML = "you lose! ";
                guessCount =10;
                printCurrent(guessedWord); 
            }

        }
        else {
            alert('Please input alphabet characters only');
        }
    }
 