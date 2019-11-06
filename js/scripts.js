// Business Logic

function Player(roll, turnScore, totalScore) {
  this.roll = 0;
  this.turnScore = 0;
  this.totalScore = 0;
};



// var rolldice = function() {
//   return Math.floor(6*Math.random())+1;
// }

Player.prototype.throwDice = function() {
  this.roll = Math.floor(6*Math.random())+1;
}

Player.prototype.checkRoll = function() {
  if (this.roll === 1) {
    this.turnScore = 0;
    alert("You rolled a 1. Your turn is over.");
  } else {
    this.turnScore += this.roll
  }
}

Player.prototype.hold = function() {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
}

Player.prototype.winner = function() {
  if (this.totalScore >= 20) {
    alert("you win");

  } else {
    return false;
  }
}


// user interface Logic

$(document).ready(function() {
  var player1 = new Player();
  var player2 = new Player();
  $("button#roll-button1").click(function(event) {
    event.preventDefault();
    player1.throwDice();
    player1.checkRoll();
    $("span#player1roll").text(player1.roll);
    $("span#player1turntotal").text(player1.turnScore);
  });
  $("button#hold-button1").click(function(event) {
    event.preventDefault();
    player1.hold();
    $("span#player1Total").text(player1.totalScore);
    $("span#player1turntotal").empty();
    alert("your turn is over. Player 2's turn");
    player1.winner();
  });
  $("button#roll-button2").click(function(event) {
    event.preventDefault();
    player2.throwDice();
    player2.checkRoll();
    $("span#player2roll").text(player2.roll);
    $("span#player2turntotal").text(player2.turnScore);
  });
  $("button#hold-button2").click(function(event) {
    event.preventDefault();
    player2.hold();
    $("span#player2Total").text(player2.totalScore);
    $("span#player2turntotal").empty();
    alert("your turn is over. Player 1's turn");
    player2.winner();
  });
});
