/** /const s1 = document.getElementById("s1");
let jatekos = 1;
output.textContent = "";
s1.addEventListener("click", function() {
        if(jatekos === 10){
            output.textContent = "";
            alert("A játéknek vége van");
            
         }
    if (jatekos < 10){
         if(jatekos === 2 || jatekos === 4 ||jatekos === 6 || jatekos === 8){
            s1X.style.display = "block";
            output.textContent = "A kék játékos jön!";
             jatekos ++;
           } else{
           s1O.style.display = "block";
           output.textContent = "A Piros játékos jön!";
          jatekos ++;
          }
}
});
/**/
const s1 = document.getElementById("s1");
const jön = document.getElementById("jön"); // Get output element
let jatekos = 1;
jön.textContent = "";

s1.addEventListener("click", function() {
    if (jatekos === 10) {
        jön.textContent = "";
        alert("A játéknek vége van");
        return;
    }
    
    if (jatekos < 10) {
        if (jatekos % 2 === 0) {  // Check if jatekos is even
            s1.textContent = "X";  // Change cell content to X
            jön.textContent = "A kék játékos jön!";
        } else {
            s1.textContent = "O";  // Change cell content to O
            jön.textContent = "A piros játékos jön!";
        }
        jatekos++;
    }
});