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

    $(".top-right").on("click", function(){
        console.log(yellowCrystal);
    }) 
    $(".top-mid").on("click", function(){
        console.log(redCrystal);
    }) 
    $(".bottom-mid").on("click", function(){
        console.log(greenCrystal);
    }) 
    $(".bottom-right").on("click", function(){
        console.log(blueCrystal);
    }) 
})