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

      // Beállítjuk a státusz szöveg színét a háttér színére
      statusDisplay.style.color = "rgb(14, 13, 13)";  // Háttér szín
      let dots = 0;

      const dotInterval = setInterval(() => {
        // A pontok színét a háttér színére állítjuk
        statusDisplay.style.color = "rgb(245, 245, 245)";  
        dots = (dots + 1) % 4; // 0-3 között váltakozik
        statusDisplay.textContent = ".".repeat(dots); // Megjeleníti a pontokat
      }, 334);

      setTimeout(() => {
        clearInterval(dotInterval);
        
        // Várj, míg 3 pont megjelenik
        statusDisplay.textContent = "..."; // Három pont megjelenítése
        setTimeout(() => {
          // A következő játékos színének beállítása
          currentPlayer = currentPlayer === "X" ? "O" : "X";
          // A státusz szöveg színét a következő játékos színére állítjuk
          statusDisplay.style.color = currentPlayer === "X" ? "red" : "blue"; 
          statusDisplay.textContent = currentPlayer === "X" ? "A piros játékos jön!" : "A kék játékos jön!";
        }, 334); // 334 ms után vált a következő játékosra
      }, 1000);
    }
  });
});
