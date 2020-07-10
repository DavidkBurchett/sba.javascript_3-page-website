function changeColor() {
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    ball.style.backgroundColor = randomColor;
};

var ball = document.getElementById("ball");

var colors = ["red", "blue", "purple", "yellow", "green", "white", "brown", "orange"]

