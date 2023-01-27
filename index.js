// Daily Challenge : Show Only The Letters

let inpu = document.createElement("input");
document.body.appendChild(input);

input.addEventListener('input', check_letter);

function check_letter(e) {
    let check = this.value.split("");
    if (check[check.length-1].toUpperCase() == check[check.length-1].toLowerCase()) {
        check.pop();
    }
    this.value = check.join("");
}
OR

var volume = document.forms[0].children[0];
volume.onkeyup = function (event) {
    var str = volume.value;
    var x = event.keyCode;
    if (x < 65 || x > 122 || (x > 90 && x < 97)) {
        volume.value = str.slice(0, -1);
    }
};
OR

let container = document.getElementById('text-container');
let input = document.getElementById('text-input');
input.addEventListener('keypress', keyLogger);
let letters = /^[A-Za-z]+$/;
function keyLogger(element) {
    if (element.key.match(letters)){
        container.textContent += `${element.key}`;
    } else {
        container.textContent += ``;
    }
}