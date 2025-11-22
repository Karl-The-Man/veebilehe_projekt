const nupp = document.getElementById("nupp");
nupp.addEventListener("click", teisenda);

let x = 0

function teisenda() {
    if (x == 0) {
    document.getElementById('makaronid_ühik').innerHTML = "0.55 lbs of pasta";
    document.getElementById("koor_ühik").innerHTML = "0.105 gallons of heavy cream";
    document.getElementById("juust_ühik").innerHTML = "0.22 lbs of blue cheese";
    document.getElementById("mandlid_ühik").innerHTML = "Roasted almond slices" ;
    x = 1;
    }
    else if (x == 1) {
        document.getElementById('js_sisend').innerHTML = "VABADUSE EEST POLE PÄÄSU";
        x = 2;

    }
    
    else if (x == 2) {
        document.getElementById('js_sisend').innerHTML = "Okei, kui sa just peale käid";
        x = 3
    }

    else if (x == 3) {
        document.getElementById('makaronid_ühik').innerHTML = "Lemmik maitsega makaroni kuju ~250g";
        document.getElementById("koor_ühik").innerHTML = "Koor (toidu/köögi/vahu olenevald kui rammusa pasta tuju on) 1 potsik ";
        document.getElementById("juust_ühik").innerHTML = "Sinihallitusjuust (oma maitse järgi hallitunud, ilmselt hea ka teist värvi hallitusega) ";
        document.getElementById("mandlid_ühik").innerHTML = "Mandlilaastud";
        document.getElementById('js_sisend').innerHTML = "";
        x = 0;

    }
    
} 







