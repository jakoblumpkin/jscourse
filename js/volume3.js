"use strict";
var gun;

var players={
    name1: null,
    name: function(){
       players.name1=prompt("What is your name?: ");
    },
    wins: 0,
    gun: null
};

players.name();



gun = prompt("You're going to a one vs. one match is call of duty. Which gun your using?:(famas, scarh or aka47): ");
players.gun=gun;

var randomNum = Math.round(Math.random());


var maps = ["nuketown", "quarry", "jungle", "Firing Range"];

function findrandom(range) {
    return Math.round(Math.random() * range);
}

for (let i = 1; i <= 10; i++) {
    var randomNum1 = Math.round(Math.random());
    var randomNumber = findrandom(4);
    var window;
    if (randomNum1 === 1) {
        players.wins = players.wins + 1;
    }
}

if (players.wins > 5) {
    let loses=10-players.wins;
    alert("Congragulations " + players.name1 +" you won the game with " +players.wins+ " round wins and " + loses + " loses using a "+ players.gun +".");
}else {
    let loses=10-players.wins;
    alert("Unfortunaly " + players.name1 +" you lost the game with " +players.wins+ " round wins and " + loses + " loses using a "+ players.gun +".");
}