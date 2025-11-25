const nupp = document.getElementById("nupp");
nupp.addEventListener("click", teisenda);
const kotkas = new Audio('helid/kotkas.mp3');

let x = 0

function teisenda() {
    if (x == 0) {
    document.getElementById('piim_tõlge').innerHTML = "0.26 gallons of milk";
    document.getElementById("munad_tõlge").innerHTML = "4 eggs";
    document.getElementById("suhkur_tõlge").innerHTML = "1 tsp. of sugar";
    document.getElementById("jahu_tõlge").innerHTML = "14.1 oz of flour" ;
    document.getElementById("või_tõlge").innerHTML = "2 tbsp. of butter" ;
    document.getElementById("sool_tõlge").innerHTML = "pinch of salt" ;

    kotkas.play();
    x = 1;
    }
    else if (x == 1) {
        document.getElementById('tühi_tõlge').innerHTML = "VABADUSE EEST POLE PÄÄSU";
        x = 2;

    }
    
    else if (x == 2) {
        document.getElementById('tühi_tõlge').innerHTML = "Okei, kui sa just peale käid";
        x = 3
    }

    else if (x == 3) {
        document.getElementById('piim_tõlge').innerHTML = "Piim 1l";
        document.getElementById("munad_tõlge").innerHTML = "munad 4tk";
        document.getElementById("suhkur_tõlge").innerHTML = "suhkur 1tl";
        document.getElementById("jahu_tõlge").innerHTML = "jahu 400g" ;
        document.getElementById("või_tõlge").innerHTML = "või 2sl" ;
        document.getElementById("sool_tõlge").innerHTML = "näputäis soola" ;
        document.getElementById('tühi_tõlge').innerHTML = "";
        x = 0;

    }
    
} 


