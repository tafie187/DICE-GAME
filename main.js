const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");

text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 350);

function onTick() {
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;

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

function complete() {
  clearInterval(timer);
  timer = null;
}

// Function to reset the animation by removing the 'fade' class from all spans
function resetAnimation() {
  const spans = text.querySelectorAll('span');
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
