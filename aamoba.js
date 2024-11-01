document.getElementById('sp').addEventListener('click', sipl);
document.getElementById('lm').addEventListener('click', lomu);

function sipl() {
    document.getElementById('kezdőlap').style.display = 'none';

}

function lomu() {
    document.querySelector('h1').style.display = 'block';
    document.getElementById('pálya').style.display = 'block';
    document.getElementById('jön').style.display = 'block';
    document.getElementById('kezdőlap').style.display = 'none';
}

const cells = document.querySelectorAll(".click");
let currentPlayer = "O"; 
const statusDisplay = document.getElementById("jön");
let isActive = true;

statusDisplay.textContent = "A kék játékos jön!";
statusDisplay.style.color = "blue";

cells.forEach(cell => {
  cell.addEventListener("click", function () {
    if (cell.textContent === "" && isActive) { 
      cell.textContent = currentPlayer;
      cell.style.color = currentPlayer === "X" ? "red" : "blue";

      statusDisplay.style.color = "rgb(14, 13, 13)";  
      let dots = 0;

      const dotInterval = setInterval(() => {
        statusDisplay.style.color = "rgb(245, 245, 245)";  
        dots = (dots + 1) % 4; 
        statusDisplay.textContent = ".".repeat(dots); 
      }, 334);

      isActive = false; 

      setTimeout(() => {
        clearInterval(dotInterval);
        statusDisplay.textContent = "..."; 

        setTimeout(() => {
          currentPlayer = currentPlayer === "X" ? "O" : "X";

          statusDisplay.textContent = currentPlayer === "X" ? "A piros játékos jön!" : "A kék játékos jön!";
          statusDisplay.style.color = currentPlayer === "X" ? "red" : "blue"; 

          if (isGameOver()) {
            statusDisplay.textContent = "A játék véget ért!";
            statusDisplay.style.color = "whitesmoke"; 
            alert("A játéknak vége! A pálya betelt.");
          } else {
            isActive = true;
          }
        }, 334); 
      }, 1000);
    }  
  });
});

function isGameOver() {
  return Array.from(cells).every(cell => cell.textContent !== "");
}