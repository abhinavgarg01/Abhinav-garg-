let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let New_game = document.querySelector(".New-game");
let reset_btn = document.querySelector("#reset-btn");
let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
const resetbtn = () => {
    turnO = true;
    enablesbtn();
    msg_container.classList.add("hide");
}
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});
const disabledbtn = () => {
    for (let box of boxes) {
        box.disabled = true;


    }
}
const enablesbtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msg_container.classList.remove("hide");
    disabledbtn();

}
const checkwinner = () => {
    for (patterns of winPatterns) {
        let pos1 = boxes[patterns[0]].innerText;
        let pos2 = boxes[patterns[1]].innerText;
        let pos3 = boxes[patterns[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {

                showWinner(pos1);
            }
        }
    }

}
New_game.addEventListener("click", resetbtn);
reset_btn.addEventListener("click", resetbtn);
