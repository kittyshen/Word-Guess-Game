
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


var wordBank = ["one", "three", "they", "variable", "character", "function", "number", "letter", 
"movie", "horse", "kitten","returns","new", "string", "with", "people","button","document",
"total", "amount", "sales","basic", "cable", "frog", "television", "channel","pork","bracket"]
var randomNumber =0; // get a random number from 0-10
var currentWord = "";
var currentWordSplited = [];
var letterCount = 0;
var guessCount = 0;
var guessedWord = [];
var win = 0;
var lose = 0;

// define a function to pick a new word from the wordbank
function pickWord(){
    randomNumber = Math.floor(Math.random() * 11);
    currentWord = wordBank[randomNumber];
    currentWordSplited = currentWord.split("");
    letterCount = currentWordSplited.length;
    guessCount = 10;
    guessedWord = [];
    //initial the guessedWord array with all "_ "
    for (var i = 0; i < letterCount; i++) {
        guessedWord[i] = "_ ";
      //  document.getElementById("guessSection").innerHTML += guessedWord[i];
    }
    console.log("currentWord =" +currentWord );
    printCurrent(guessedWord);
}

// call the function to initial the game screen
pickWord();
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
    var letterUsedArray = []; //declare a array to store the letter user already used

    // Next, give JavaScript a function to execute when onkeyup event fires.

document.onkeyup = function(event) {
    var userInput = event.key;
    userTyped.textContent = userInput; //change html userTyping element to what user just typed.
    var validLetters = /^[A-Za-z]+$/;
    //Check whether user entered a valid letter between a-z
    if (userInput.match(validLetters)) {
        //then check whether user input already in the letterUsed array.
        if(letterUsedArray.indexOf(userInput) == -1 ){
            letterUsedArray.push(userInput); // store user inputed letter if it's not in the letterUsedArray
            console.log (letterUsedArray);
            document.getElementById("guessLeft").innerHTML = guessCount-1;
            letterUsed.textContent += userInput.toUpperCase()+","; 
            console.log("debug-cheat: target word is " + currentWord);

            //do the loop check with the user inputed letter.
            for(var j = 0 ; j<letterCount; j++ ){ //check user input start here
                if(userInput  == currentWordSplited[j]){
                    guessedWord[j] = userInput;
                    printCurrent(guessedWord); // everytime find a matched letter redo current guess progress printing on DOM
                }
                if (guessedWord.indexOf("_ ") == -1){  // check winning condition met or not,which means the guessedWord don't contain any initial "_ "
                    console.log(guessedWord);
                    printCurrent(guessedWord); 

                    alert("You guessed the right word: "+ currentWord);
                    win ++;
                    document.getElementById("statusWin").innerHTML = " Win: " + win;

                    //winning condition meet start another section
                    // adding confirm to another game to avoid overlapping of two game session.
                    var onemore = confirm("Try another round?");
                    if(onemore){
                        pickWord();
                        guessCount =10;
                        letterUsed.textContent = ""; 
                        letterUsedArray = [];
                    }
                    else break;  // use to break out of the keyup event.
                    
                }
            }
            guessCount--;
            //if user reached the max number of guess try, 
            if(guessCount<= 0){
                lose++;
                document.getElementById("statusLose").innerHTML = "Lose: "+lose;
                //losing condition meet start another section  
                guessCount =10;
                letterUsedArray = [];
                letterUsed.textContent = ""; 
                pickWord();
            }
           
        }
        else{
            alert('You already typed '+ userInput );
        }
            

    }
    else {
        alert('Please input alphabet characters only');
    }
}
 