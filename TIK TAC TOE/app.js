let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let resetBtn = document.querySelector(".reset-btn");
let counter = 0;

let turnO = true;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        turnO ? box.innerText = 'O' : box.innerText = 'X';
        turnO = !turnO;
        box.disabled = true;
        counter++;
        checkWinner();
    })
})
boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        if (!box.disabled) {
            turnO ? box.innerText = 'O' : box.innerText = 'X';
        }
    })
})
boxes.forEach((box) => {
    box.addEventListener("mouseout", () => {
        if (!box.disabled) {
            box.innerText = ''
        }
    })
})

function checkWinner() {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                counter = 0;
                gameEnd(pos1Val);
            }
        }
    }
    if (counter == 9) {
        msg.innerText = ` Game DRAW !! Start A New Game`
        msg.classList.remove("hide");
        resetBtn.innerText = "Start New Game"
    }
}

function gameEnd(winner) {
    for (box of boxes) {
        box.disabled = true;
    }
    msg.innerText = `${winner} Won The Game`
    msg.classList.remove("hide");
    resetBtn.innerText = "Start New Game"
}

function resetGame() {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    msg.classList.add("hide");
    resetBtn.innerText = "Reset Game"

}
resetBtn.addEventListener("click", resetGame);


