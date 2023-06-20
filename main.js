// Get the element with the class "fancy"
const text = document.querySelector(".fancy");

// Get the text content of the element
const strText = text.textContent;

// Split the text into an array of characters
const splitText = strText.split("");

// Clear the original text content
text.textContent = "";

// Iterate over each character in the splitText array
for (let i = 0; i < splitText.length; i++) {
  // Create a new span element for each character and append it to the text element
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

// Initialize variables for tracking the animation
let char = 0;
let timer = setInterval(onTick, 350);

// Function that is called at intervals to animate each character
function onTick() {
  // Get the span element at the current character index
  const span = text.querySelectorAll('span')[char];

  // Add the 'fade' class to the span element, which applies a fading animation
  span.classList.add('fade');

  // Move to the next character
  char++;

  // Check if the animation is complete (reached the end of the text)
  if (char === splitText.length) {
    complete();
    return;
  }

  // Reset the animation to the beginning once it reaches the end
  if (char === splitText.length + 1) {
    char = 0;
    resetAnimation();
  }
}

// Function called when the animation is complete
function complete() {
  // Clear the interval timer
  clearInterval(timer);
  timer = null;
}

// Function to reset the animation by removing the 'fade' class from all spans
function resetAnimation() {
  // Get all span elements
  const spans = text.querySelectorAll('span');
  
  // Remove the 'fade' class from each span element
  spans.forEach((span) => {
    span.classList.remove('fade');
  });
}

// Player name
let player1 = "Player 1";
let player2 = "Player 2";

// Function to change the player name
function editNames() {
    // Prompt the user to enter a new name for player 1
    player1 = prompt("Change Player1 name");
    // Prompt the user to enter a new name for player 2 
    player2 = prompt("Change player2 name"); 

    // Update the HTML element with the class "Player1" to display the new name
    document.querySelector("p.Player1").innerHTML = player1; 
    
    // Update the HTML element with the class "Player2" to display the new name
    document.querySelector("p.Player2").innerHTML = player2; 
}

// Function to roll the dice
function rollTheDice() {
    setTimeout(function () {
        // Generate a random number between 1 and 6 for dice 1
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        // Generate a random number between 1 and 6 for dice 2 
        let randomNumber2 = Math.floor(Math.random() * 6) + 1; 

        // Update the image source for dice 1 to display the corresponding dice face
        document.querySelector(".img1").setAttribute("src", "dice" + randomNumber1 + ".png"); 
        // Update the image source for dice 2 to display the corresponding dice face
        document.querySelector(".img2").setAttribute("src", "dice" + randomNumber2 + ".png"); 

        if (randomNumber1 === randomNumber2) {
            // If the random numbers are equal, display "Draw!" in the HTML element with the tag "h1"
            document.querySelector("h1").innerHTML = "Draw!"; 
        }
        else if (randomNumber1 < randomNumber2) {
            // If the random number for player 2 is greater than the random number for player 1, display player 2's name followed by "WINS!" in the HTML element with the tag "h1"
            document.querySelector("h1").innerHTML = (player2 + " WINS!"); 
        }
        else {
            // If the random number for player 1 is greater than the random number for player 2, display player 1's name followed by "WINS!" in the HTML element with the tag "h1"
            document.querySelector("h1").innerHTML = (player1 + " WINS!"); 
        }
    }, 700); // Choose the milliseconds you want before executing the code inside the setTimeout function
}
