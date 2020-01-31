//Déplacer le carré rose d'une div à l'autre
let carre1 = document.getElementById('carre1');
let carre2 = document.getElementById('carre2')
let btn1 = document.getElementById('btn-change');

let deplacer = () => {
    if (carre2.classList.contains('d-none')) {
        carre1.classList.add('d-none');
        carre2.classList.remove('d-none');
    }else if(carre1.classList.contains('d-none')){
        carre2.classList.add('d-none');
        carre1.classList.remove('d-none');
    }
}

btn1.addEventListener("click", deplacer);

//Compteur
let btn2 = document.getElementById('btn-reset');
let spanBtn2 = document.getElementById('nb');
let compteur = 0;

let afficher = () => {
    spanBtn2.innerHTML = ++compteur;
}
let reset = () => {
    spanBtn2.innerHTML = 0;
}

btn1.addEventListener("click",afficher);
btn2.addEventListener("click",reset);