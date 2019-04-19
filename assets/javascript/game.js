//Declare variables
var targetNumber = Math.random();

$(window).mousemove(function(event) {
  
    $("#miner").css({top: event.pageY, left: event.pageX});
});