let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset");
let winner = document.querySelector(".winner");

let turn0 = true; // Player 0

const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]; // 2D array

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0 == true) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winningPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
        winner.innerText = `${pos1Val} Winner! 🎉`;
        resetButton.innerText = "New Game";
      }
    }
  }
};
resetButton.addEventListener("click", () => {
  location.reload();
});
