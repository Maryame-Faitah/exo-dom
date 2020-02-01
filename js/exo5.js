let divCoeur = document.getElementById('divCoeur');
let btnImg = document.getElementById('btn-img');

let ajouter = () => {
    let img = document.createElement('img');
    img.src = "../public/img/coeur.png";
    img.classList = "col-1 m-0 p-0"
    divCoeur.appendChild(img);
}

btnImg.addEventListener("click",ajouter);

///////////////////////////////////////////////////////////

let btnRemove = document.getElementById('btn-remove');

let remove = () => {
    divCoeur.removeChild(divCoeur.lastChild);
}

btnRemove.addEventListener("click",remove);

///////////////////////////////////////////////////////////

let btnRemoveAll = document.getElementById('btn-removeAll');

let removeAll = () => {
    divCoeur.remove();
}

btnRemoveAll.addEventListener("click",removeAll);

