var Kék = 0;
var Piros = 0; 
var jatek_vege = 0;

  function clicked(s1) {
    var cell = document.getElementById(s1);
    if (Piros + Kék < 9){
        jatek_vege = 1
    } 
    if (cell.innerHTML === "" && !jatek_vege ) {
        if (Kék <= Piros) {
            Kék++;
            cell.innerHTML = "Kék";
        } else {
            Piros++;
            cell.innerHTML = "Piros";
        }
        return true;
    } else {
        return false;
    }
}