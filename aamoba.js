const cells = document.querySelectorAll(".click");
let currentPlayer = "O"; 
const statusDisplay = document.getElementById("jön");

statusDisplay.textContent = "A kék játékos jön!";
statusDisplay.style.color = "blue";

cells.forEach(cell => {
  cell.addEventListener("click", function () {
    if (cell.textContent === "") {
      cell.textContent = currentPlayer;
      cell.style.color = currentPlayer === "X" ? "red" : "blue";

      statusDisplay.style.color = "rgb(14, 13, 13)";  
      let dots = 0;

      const dotInterval = setInterval(() => {

        statusDisplay.style.color = "rgb(245, 245, 245)";  
        dots = (dots + 1) % 4; 
        statusDisplay.textContent = ".".repeat(dots); 
      }, 334);

      setTimeout(() => {
        clearInterval(dotInterval);

        statusDisplay.textContent = "..."; 
        setTimeout(() => {

          currentPlayer = currentPlayer === "X" ? "O" : "X";

          statusDisplay.style.color = currentPlayer === "X" ? "red" : "blue"; 
          statusDisplay.textContent = currentPlayer === "X" ? "A piros játékos jön!" : "A kék játékos jön!";
        }, 334); 
      }, 1000);
    }
  });
});