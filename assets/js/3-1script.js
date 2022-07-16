// FORMA 1

function pintar(element) {
    ele.style.backgroundColor = "yellow";
}

let ele = document.getElementById("ele1");
ele.addEventListener("click", pintar, ele);

// FORMA 2

function pintar2(elementId) {
    const elemento = document.getElementById(elementId);
    elemento.style.backgroundColor = 'red';
}

// FOPRMA 3

const elem = document.getElementById("ele3");
function pintar3() {
    elem.style.backgroundColor = 'orange';
}
elem.addEventListener("click", pintar3);

// FORMA 4

function pintar(element) {
    element.target.style.backgroundColor = "blue";
}

let eleme = document.getElementById("ele4");
eleme.addEventListener("click", pintar, eleme);