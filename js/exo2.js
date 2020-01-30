//Variables
let exo1 = document.getElementById('section1');
let exo2 = document.getElementById('section2');
let exo3 = document.getElementById('section3');
let exo4 = document.getElementById('section4');
let exo5 = document.getElementById('section5');
let exo6 = document.getElementById('section6');
let exo7 = document.getElementById('section7');

/////////////////////////////////////////////////////////////

//Fonction1
let dnone1 = (button1) => {
    let button1 = document.getElementById('btn1');
    exo1.classList.remove('d-none');
    exo2.classList.add('d-none');
    exo3.classList.add('d-none');
    exo4.classList.add('d-none');
    exo5.classList.add('d-none');
    exo6.classList.add('d-none');
    exo7.classList.add('d-none');
}

//Appel fct
button1.addEventListener("click",dnone1);

/////////////////////////////////////////////////////////////

//Fonction2
let dnone2 = (button2) => {
    let button2 = document.getElementById('btn2');
    exo2.classList.remove('d-none');
    exo1.classList.add('d-none');
    exo3.classList.add('d-none');
    exo4.classList.add('d-none');
    exo5.classList.add('d-none');
    exo6.classList.add('d-none');
    exo7.classList.add('d-none');
}

//Appel fct
button2.addEventListener("click",dnone2);

/////////////////////////////////////////////////////

//Fonction3
let dnone3 = (button3) => {
    let button3 = document.getElementById('btn3');
    exo3.classList.remove('d-none');
    exo1.classList.add('d-none');
    exo2.classList.add('d-none');
    exo4.classList.add('d-none');
    exo5.classList.add('d-none');
    exo6.classList.add('d-none');
    exo7.classList.add('d-none');
}

//Appel fct
button3.addEventListener("click",dnone3);

/////////////////////////////////////////////////////

//Fonction4
let dnone4 = (button4) => {
    let button4 = document.getElementById('btn4');
    exo4.classList.remove('d-none');
    exo1.classList.add('d-none');
    exo2.classList.add('d-none');
    exo3.classList.add('d-none');
    exo5.classList.add('d-none');
    exo6.classList.add('d-none');
    exo7.classList.add('d-none');
}

//Appel fct
button4.addEventListener("click",dnone4);

/////////////////////////////////////////////////////

//Fonctions
let dnone5 = (button5) => {
    let button5 = document.getElementById('btn5');
    exo5.classList.remove('d-none');
    exo1.classList.add('d-none');
    exo2.classList.add('d-none');
    exo3.classList.add('d-none');
    exo4.classList.add('d-none');
    exo6.classList.add('d-none');
    exo7.classList.add('d-none');
}

//Appel fct
button5.addEventListener("click",dnone5);

/////////////////////////////////////////////////////

//Fonctions
let dnone6 = (button6) => {
    let button6 = document.getElementById('btn6');
    exo6.classList.remove('d-none');
    exo1.classList.add('d-none');
    exo2.classList.add('d-none');
    exo3.classList.add('d-none');
    exo4.classList.add('d-none');
    exo5.classList.add('d-none');
    exo7.classList.add('d-none');
}

//Appel fct
button6.addEventListener("click",dnone6);

/////////////////////////////////////////////////////

//Fonctions
let dnone7 = (button7) => {
    let button7 = document.getElementById('btn7');
    exo7.classList.remove('d-none');
    exo1.classList.add('d-none');
    exo2.classList.add('d-none');
    exo3.classList.add('d-none');
    exo4.classList.add('d-none');
    exo5.classList.add('d-none');
    exo6.classList.add('d-none');
}

//Appel fct
button7.addEventListener("click",dnone7);

