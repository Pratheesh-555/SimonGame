var btnColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$("body").keypress(function() {
    if(started === false){
        nextSequence();
        started = true;
    }
})


function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4 );
  var randomChosenColour = btnColours[randomNumber];
  gamePattern.push(randomChosenColour);
  playsound(randomChosenColour);
  animatePress(randomChosenColour);
  level++;
  $("h1").text("Level " + level);
}


 $(".btn").on("click", function () {
        var userChosenColour = this.id;
        userClickedPattern.push(userChosenColour);
        playsound(userChosenColour);
        animatePress(userChosenColour);
        checkPlay(userClickedPattern.length-1);
      });


function playsound(name) {
    switch (name) {
        case "blue":
          var audio = new Audio("sounds/blue.mp3");
          audio.play();
          break;
        case "red":
          var audio = new Audio("sounds/red.mp3");
          audio.play();
          break;
    
        case "green":
          var audio = new Audio("sounds/green.mp3");
          audio.play();
          break;
        case "yellow":
          var audio = new Audio("sounds/yellow.mp3");
          audio.play();
          break;
        default:
            console.log("Error");
      }
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}


function checkPlay(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
       
        if(level === (currentLevel+1)){
            
          setTimeout(function() { 
            nextSequence();
            
          },1000); 
        }
            
    }
    else{
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("h1").text("GAME OVER");
        level = 0;
        gamePattern = [];
        userClickedPattern = [];
        setTimeout(function(){
            $("h1").text("Press a key to start");
            }, 1000);
        started = false;
    }

}
