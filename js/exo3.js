let span = document.getElementById('span');
let input = document.getElementById('input');
let go = document.getElementById('go');

let replace = () => {
    if (input.value != "") {
        span.innerHTML = input.value;
        input.value = "";
    }
}

go.addEventListener("click",replace);
