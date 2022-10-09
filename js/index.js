const player1Box = document.getElementById("player1-box");
const player2Box = document.getElementById("player2-box");
let message1 = document.getElementById("message1");
let message2 = document.getElementById("message2");

function validateForm() {
    let player1 = document.forms["form"]["player1"].value;
    let player2 = document.forms["form"]["player2"].value;
    if (player1 == null || player1 == "" || player2 == null || player2 == "") {
        if (player1 == null || player1 == "") {
            player1Box.style.border = "2px solid red";
            message1.innerHTML = "Insira um nome válido";
            message1.style.color = "red";
            message1.style.fontSize = "1.5vh";
        }
        if (player2 == null || player2 == "") {
            player2Box.style.border = "2px solid red";
            message2.innerHTML = "Insira um nome válido";
            message2.style.color = "red";
            message2.style.fontSize = "1.5vh";
        }
        return false;
    }
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);
}
