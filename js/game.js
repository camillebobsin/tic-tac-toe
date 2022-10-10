let p1 = document.getElementById("p1");
let p1Score = document.getElementById("p1-score");
let p2Score = document.getElementById("p2-score");
let p2 = document.getElementById("p2");

p1.innerHTML = localStorage.getItem("player1");
p1Score.innerHTML = 0;
p2Score.innerHTML = 0;
p2.innerHTML = localStorage.getItem("player2");

let result = document.getElementById("result");
let reset = document.getElementById("reset");
const cellElements = document.querySelectorAll("[data-cell]");
let xTurn = true; 
let table = ['', '', '', '', '', '', '', '', ''];
let win = 0;
let winner = '';
let turn = 0;

result.innerHTML = "Vez de " + localStorage.getItem("player1");

reset.addEventListener('click', () => {
    table = ['', '', '', '', '', '', '', '', ''];
    for (let i = 0; i < 9; i++) {
        cellElements[i].innerHTML = '';
    }
    win = 0;
    result.innerHTML = turn ? "Vez de " + localStorage.getItem("player2") : "Vez de " + localStorage.getItem("player1")
});

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick)
})

function handleClick(e) {
    if (win == 0) {
        const cell = e.target;
        if (cell.innerHTML == '') {
            cell.innerHTML = xTurn ? 'X' : 'O';
            cell.style.color = xTurn ? "#6331a1" : "#a1318e";
            if (checkWin(cell.id, cell.innerHTML) == 1) {
                result.innerHTML = winner == 'X' ? localStorage.getItem("player1") + " ganhou!" : localStorage.getItem("player2") + " ganhou!";
                if (winner == 'X') {
                    p1Score.innerHTML = parseInt(p1Score.innerHTML) + 1
                }
                else {
                    p2Score.innerHTML = parseInt(p2Score.innerHTML) + 1
                }
                winner = '';
                
            }
            else if (checkWin(cell.id, cell.innerHTML) == 2) {
                result.innerHTML = "Deu velha!"
            }
            xTurn = !xTurn;
            turn = !turn;
            if (win == 0) {
                result.innerHTML = turn ? "Vez de " + localStorage.getItem("player2") : "Vez de " + localStorage.getItem("player1")
            }
        }
    }
    return;
}

function checkWin(id, letter) {
    let draw = 1;
    index = parseInt(id[1]) - 1;
    table[index] = letter;
    for (let line = 0; line < 9; line += 3) {
        if (table[line] == table[line+1] && table[line] == table[line+2] && table[line] != '') {
            winner = table[line];
            win = 1;
            return win;
        }
    }
    for (let column = 0; column < 3; column++) {
        if (table[column] == table[column+3] && table[column] == table[column+6] && table[column] != '') {
            winner = table[column];
            win = 1;
            return win;
        }
    }
    if (table[0] == table[4] && table[0] == table[8] && table[0] != '') {
        winner = table[0];
        win = 1;
        return win;
    }
    if (table[2] == table[4] && table[2] == table[6] && table[2] != '') {
        winner = table[2];
        win = 1;
        return win;
    }
    for (let i = 0; i < 9; i++) {
        if (table[i] == '') {
            draw = 0;
        }
    }
    if (draw) {
        win = 2;
        return win;
    }
}