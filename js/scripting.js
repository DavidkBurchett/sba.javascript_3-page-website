// game
function changeColor() {
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    ball.style.backgroundColor = randomColor;
};

function changeParagraph() {
    if(dropDown.value == "pong"){
        paragraph.innerHTML = "Pong is considered to be the first game ever made, and still known to this day despite it's simplicity. It is seen either as a two player game or single player game. The goal is to get the ball(or square) past the other players bar. Unlike Atari Breakout it is played horizontally. They do share that the game picks up in speed as it progresses, making it harder for both players. The name originates from its similarity to ping pong, and after playing for even a small amount of time, it's easy to see the similarities.";
        document.getElementById('gif').src = './img/Pong.gif'
    } else {
        paragraph.innerHTML = "This is Atari Breakout, a retro game that was very well renown, and still is even present today. You can even play the game in full with a simple <a target=_blank href=https://elgoog.im/breakout/>google search</a>. The game i was intending to design was going to either be This or Pong(read more about pong by changing the dropdown). This point of the game is to destroy all of the blocks in the upper level using the bar along the bottom to bounce the ball into the blocks. the game gets faster the further you advance, and once you destroy all of the blocks you progress to the next level.";
        document.getElementById('gif').src = './img/Atari-Breakout.gif'
    }
}

// Email
function ValidateEmail(mail) {
    var mailRegex = /\S+@\S+\.\S+/;
 if (mail.value.match(mailRegex))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

// Score
function addScore(score){
    while(!(-Infinity < score && score < Infinity)){
        score = prompt("please enter a valid score")
    }
    var table = document.getElementById("scoreTable")
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Guest User";
    cell2.innerHTML = score;
}

// Variables
var ball = document.getElementById("ball");
var dropDown = document.getElementById("dropDown")
var paragraph = document.getElementById("instructionsP")

var colors = ["red", "blue", "purple", "yellow", "green", "white", "brown", "orange"]