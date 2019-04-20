//Declare variables
var targetNumber = Math.floor((Math.random() * 120) + 19);
var wins = 0;
var losses = 0;
var yourScore = 0;


$(document).ready(function() {
    var yellowCrystal =  Math.floor((Math.random() * 12) + 1);
    var redCrystal =  Math.floor((Math.random() * 12) + 1);
    var greenCrystal =  Math.floor((Math.random() * 12) + 1);
    var blueCrystal =  Math.floor((Math.random() * 12) + 1);
    console.log(yellowCrystal);
    console.log(redCrystal);
    console.log(greenCrystal);
    console.log(blueCrystal);
    
    $("#target-number").html("<p>Target Number: " + targetNumber + "</p>");
    $("#win-loss").html("<p>Wins: " + wins + " " + "Losses: " + losses + "</p>");
    $("#your-score").html("<p>Your total score is: " + yourScore + "</p>");

    $(".top-right").on("click", function(){
        // console.log(yellowCrystal);
        // console.log(yourScore);
        var newScore = yellowCrystal + yourScore;
        yourScore = newScore;
        // console.log(newScore);
        checkScore()
        $("#your-score").html("<p>Your total score is: " + yourScore + "</p>");

    }) 
    $(".top-mid").on("click", function(){
        // console.log(redCrystal);
        var newScore = redCrystal + yourScore;
        yourScore = newScore;
        // console.log(newScore);
        checkScore()
        $("#your-score").html("<p>Your total score is: " + yourScore + "</p>");
    }) 
    $(".bottom-mid").on("click", function(){
        // console.log(greenCrystal);
        var newScore = greenCrystal + yourScore;
        yourScore = newScore;
        // console.log(newScore);
        checkScore()
        $("#your-score").html("<p>Your total score is: " + yourScore + "</p>");
    }) 
    $(".bottom-right").on("click", function(){
        // console.log(blueCrystal);
        var newScore = blueCrystal + yourScore;
        yourScore = newScore;
        // console.log(newScore);
        checkScore()
        $("#your-score").html("<p>Your total score is: " + yourScore + "</p>");
    })
});

function checkScore() {
    console.log(yourScore);
    console.log(targetNumber);
    if (yourScore === targetNumber) {
        alert("Yooo good job! You can do simple math!! Looks like all those years of higher education weren't a waste after all!");
        wins++;
        yourScore = 0;
        $("#win-loss").html("<p>Wins: " + wins + " " + "Losses: " + losses + "</p>");
        targetNumber = Math.floor((Math.random() * 120) + 19);
    }
    if (yourScore > targetNumber) {
        alert("Well, you've overshot the target. Get back in there and try it again!");
        losses++;
        yourScore = 0;
        $("#win-loss").html("<p>Wins: " + wins + " " + "Losses: " + losses + "</p>");
        targetNumber = Math.floor((Math.random() * 120) + 19);
    }
}