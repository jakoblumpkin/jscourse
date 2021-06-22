
let gun=prompt("You're going to a one vs. one match is call of duty. Which gun your using?:(famas, scarh or aka47): ");

let randomNum=Math.round(Math.random());

if(randomNum==1){
    alert("You won the match with a "+gun);
}else if(randomNum==0){
    alert("You lost the match with a "+gun);
}
