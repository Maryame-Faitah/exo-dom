//Niveau1

let input1 = document.getElementById('input1');
let mySelect = document.getElementById('mySelect');
let input2 = document.getElementById('input2');
let egal = document.getElementById('egal');
let answer = document.getElementById('answer');

let calculette1 = () => {
    switch (mySelect.value) {
        case "+":
            answer.innerHTML = parseFloat(input1.value) + parseFloat(input2.value);
            break;
        case "-":
            answer.innerHTML = parseFloat(input1.value) - parseFloat(input2.value);
            break;
        case "*":
            answer.innerHTML = parseFloat(input1.value) * parseFloat(input2.value);
            break;
        case "/":
            answer.innerHTML = parseFloat(input1.value) / parseFloat(input2.value);
            break;
    }
}

egal.addEventListener("click",calculette1);

//Niveau2

let inputCalculette2 = document.getElementById("inputCalculette2");
let result = document.getElementById('result');
let btnEgal = document.getElementById('btnEgal');

let array1 = document.querySelectorAll('.signe');
let array2 = document.querySelectorAll('.nb');

let btnPlus = document.getElementsByClassName('signe')[0];
let btnMoins = document.getElementsByClassName('signe')[1];
let btnMult = document.getElementsByClassName('signe')[2];
let btnDiv = document.getElementsByClassName('signe')[4];
let btnC = document.getElementsByClassName('signe')[3];

array2.forEach(element => {
    element.addEventListener("click", ()=> {
        inputCalculette2.value += element.innerHTML;
    })
});
for(let i=0; i<array1.length; i++){
    array1[i].addEventListener("click", ()=> {
        inputCalculette2.value += array1[i].innerHTML;
    })
};
btnEgal.addEventListener("click", ()=> {
    result.innerHTML = eval(inputCalculette2.value);
});
btnC.addEventListener("click", ()=> {
    result.innerHTML = "";
    inputCalculette2.value = "";
});
