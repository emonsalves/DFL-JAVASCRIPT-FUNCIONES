let colorGlobal;

document.addEventListener('keydown', function (press) {
    if (press.key === 'a') {
        colorGlobal = "brown";
        console.log("Color cargado :", colorGlobal);
    } else if (press.key === 's') {
        colorGlobal = "black";
        console.log("Color cargado :", colorGlobal);
    } else if (press.key === 'd') {
        colorGlobal = "orange";
        console.log("Color cargado :", colorGlobal);
    }
})

function pintar(element, colorGlobal) {
    element.style.backgroundColor = colorGlobal;
}

let ele = document.querySelector("#div1");
let ele1 = document.querySelector("#div2");
let ele2 = document.querySelector("#div3");
let ele3 = document.querySelector("#div4");

ele.addEventListener("click", () => {
    pintar(ele, colorGlobal);
})
ele1.addEventListener("click", () => {
    pintar(ele1, colorGlobal);
})
ele2.addEventListener("click", () => {
    pintar(ele2, colorGlobal);
})
ele3.addEventListener("click", () => {
    pintar(ele3, colorGlobal);
})


