//Variables
let tache = document.getElementById("tache");
let output = document.getElementById("output");

//Fonctions
let afficher = ()=> {
    if (tache.value != "") {
        //Ajouter tâche
        let paragraphe = document.createElement("p");
        paragraphe.innerHTML = tache.value;
    
        //Supprimer tâche
        let btnX = document.createElement("button");
        btnX.innerHTML = "X";
        paragraphe.appendChild(btnX);
        btnX.addEventListener("click",()=> {
            paragraphe.remove();
        });

        output.appendChild(paragraphe);
        tache.value = "";
    }
}

let enter = ()=> {
    if (event.keyCode === 13) {
        afficher();
    }
}


tache.addEventListener("keydown",enter);

/////////////////////////////////////////////////////////////////////////////

