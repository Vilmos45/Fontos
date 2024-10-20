var Kék = 0;
var Piros = 0; 
var jatek_vege = 0;

function clicked(s1) {
    if(s1==clicked) {
        let szin = 0
        if (Piros + Kék < 9){
            jatek_vege = 1
        } 

        if (Kék < Piros){
            szin ++;
            Kék ++;
        } 
        else{
            Piros ++;
            szin = Piros;
        } 
      return true;
    } 
  }
