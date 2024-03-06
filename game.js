const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;

$("#question-mark").click(function () {
  $("#instructions").toggle();
});

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
  checkAnswer(userClickedPattern.length - 1);
  //console.log(userClickedPattern);
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => nextSequence(), 1000);
      userClickedPattern = [];
    }
  } else {
    console.log("failure");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    gameStarted = false;
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    $("#level-title").text("Game Over! Press any key to restart");
    setTimeout(() => $("body").removeClass("game-over"), 200);
  }
}

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
