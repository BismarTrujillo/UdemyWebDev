
const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
var level = 0;
var started = false;






$(document).keypress(function() {
    if(!started){
        nextSequence();
        started  = true;
    }  
});


$(".btn").click(function(event){
    var colorClicked = event.target.id;
    userClickedPattern.push(colorClicked);

    animatePress(colorClicked);
    playSound(colorClicked);
    answerChecker();
    //wait until pattern is check and then next sequence
    nextSequence();


});

function nextSequence(){  
    levelUp(level);

    level++;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    setTimeout(function(){
        $("#" + randomChosenColor).fadeIn(200).fadeOut(200).fadeIn(200);
        playSound(randomChosenColor);

    }, 500);
    
}

function animatePress(currColor){
    $("."+currColor).addClass("pressed");

    setTimeout(function(){
        $("."+currColor).removeClass("pressed");

    }, 100);
}

function levelUp(level){
    $("#level-title").text("Level " + level );
}

function playSound(colorClicked){
    var sound = new Audio("./sounds/" + colorClicked + ".mp3");
    sound.play();
}

function answerChecker(){
    for (let i = 0; i < gamePattern.length; i++) {
        if(gamePattern[i] == userClickedPattern[i]){
            return;
        } else {
            alert("you lost");
        }
        
    }
}