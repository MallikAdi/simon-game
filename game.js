const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(4 * Math.random());
  console.log(randomNumber);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
