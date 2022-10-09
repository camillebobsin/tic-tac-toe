let p1 = document.getElementById("p1");
let p1Score = document.getElementById("p1-score");
let p2Score = document.getElementById("p2-score");
let p2 = document.getElementById("p2");

p1.innerHTML = localStorage.getItem("player1");
p1Score.innerHTML = 0;
p2Score.innerHTML = 0;
p2.innerHTML = localStorage.getItem("player2");