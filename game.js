const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;

$(document).on("keypress", function () {
  if (!gameStarted) {
    $("#level-title").text("Level " + level);
    gameStarted = true;
    nextSequence();
  }
});

$(".btn").click(function () {
  var userChosenColor = this.id;
  animatePress(userChosenColor);
  playSound(userChosenColor);
  userClickedPattern.push(userChosenColor);
  //console.log(userClickedPattern);
});

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function nextSequence() {
  var randomNumber = Math.floor(4 * Math.random());
  //console.log(randomNumber);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);

  level++;
  $("#level-title").text("Level " + level);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}
