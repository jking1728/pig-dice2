// Business Logic

function Player(turn) {
  this.roll = 0;
  this.turnScore = 0;
  this.totalScore = 0;
  this.turn = turn;
};

Player.prototype.throwDice = function() {
  if (this.turn === true) {
    this.roll = Math.floor(6*Math.random())+1;
  } else {
    this.turnScore = 0;
    this.roll = 0;
  }
}

Player.prototype.checkRoll = function(player) {
  if (this.roll === 1) {
    this.turnScore = 0;
    this.turn = false;
    alert("You rolled a 1. Your turn is over.");
    this.roll = 0;
    player.turn = true;
  } else {
    this.turnScore += this.roll
  }
}

Player.prototype.hold = function(player) {
  if (this.turn === true) {
    this.totalScore += this.turnScore;
    this.turnScore = 0;
    this.turn = false;
    player.turn = true;
  }
}

// Player.prototype.computerEasy = function() {
//   if (this.turn === true) {
//
//   }
// }

Player.prototype.winner = function(player) {
  if (this.totalScore >= 20) {
    alert("Congratulations " + player + " you win!");

  } else {
    return false;
  }
}


// user interface Logic

$(document).ready(function() {
  var player1 = new Player(true);
  var player2 = new Player(false);

  $("button#2humans").click(function(event){
    event.preventDefault();
    $("div#humanvshuman").show();
    $("div#select-mode").hide();
  })
  $("button#vsEasyComputer").click(function(event){
    event.preventDefault();
    $("div#humanVsEasyComputer").show();
    $("div#select-mode").hide();
  })
  $("button#roll-button1").click(function(event) {
    event.preventDefault();
    player1.throwDice();
    player1.checkRoll(player2);
    $("span#player1roll").text(player1.roll);
    $("span#player1turntotal").text(player1.turnScore);
  });
  $("button#hold-button1").click(function(event) {
    event.preventDefault();
    player1.hold(player2);
    $("span#player1Total").text(player1.totalScore);
    $("span#player1turntotal").empty();
    alert("your turn is over. Player 2's turn");
    player1.winner("player 1");
  });
  $("button#roll-button2").click(function(event) {
    event.preventDefault();
    player2.throwDice();
    player2.checkRoll(player1);
    $("span#player2roll").text(player2.roll);
    $("span#player2turntotal").text(player2.turnScore);
  });
  $("button#hold-button2").click(function(event) {
    event.preventDefault();
    player2.hold(player1);
    $("span#player2Total").text(player2.totalScore);
    $("span#player2turntotal").empty();
    alert("your turn is over. Player 1's turn");
    player2.winner("player 2");
  });
});
