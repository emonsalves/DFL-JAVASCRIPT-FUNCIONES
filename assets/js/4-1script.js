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

function captureId(capture) {
    // Profe trate de validar que al hacer click en el body no marque error pero me pillo el tiempo!
    // Agradeceria un feedback 
    
    document.getElementById(capture.target.id).style.backgroundColor = colorGlobal;
    // console.log("capture ->", capture.target.id);
    // id = `#${capture.target.id}`;
    // console.log("id ->", id);
}

document.addEventListener("click", captureId);