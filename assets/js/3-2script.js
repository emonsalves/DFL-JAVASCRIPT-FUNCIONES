// FORMA 1
let boxCaptureId = document.querySelector("#btn-test");

function pintar(color = "green") {
    boxCaptureId.style.backgroundColor = color;
}

pintar();

document.querySelector("#btn-test").addEventListener("click", function () {
    pintar("red");
})

// FORMA 2

function pintar2(element, color = "green") {
    element.style.backgroundColor = color;
}

let color = "blue";
let ele = document.querySelector("#btn-test2");

pintar2(ele)

ele.addEventListener("click", () => {
    pintar2(ele, color);
})
