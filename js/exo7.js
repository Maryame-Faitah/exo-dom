//Variables
let tache = document.getElementById("tache");

let x = document.getElementById("x");

let output = document.getElementById("output");



//Fonctions
let afficher = ()=> {
    if (tache.value != "") {
        let paragraphe = document.createElement("p");
        paragraphe.innerHTML = tache.value;
    
        //ajout btn delete à coté mot
        let btnX = document.createElement("btn");
        btnX.innerHTML = "X";
        paragraphe.appendChild(btnX);
        btnX.addEventListener("click",()=> {
            paragraphe.remove();
        });

        output.appendChild(paragraphe);
        tache.value = "";
    }
}
let remove = ()=> {
    output.removeChild(output.lastChild);
}
let enter = ()=> {
    if (event.keyCode === 13) {
        afficher();
    }
}

x.addEventListener("click",remove);
tache.addEventListener("keydown",enter);

