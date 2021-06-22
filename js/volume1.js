"use strict";

var gun = prompt("You're going to a one vs. one match is call of duty. Which gun your using?:(famas, scarh or aka47): ");

var randomNum = Math.round(Math.random());

var window;
if (randomNum === 1) {
    window.alert("You won the match with a " + gun);
} else if (randomNum === 0) {
    window.alert("You lost the match with a " + gun);
}
