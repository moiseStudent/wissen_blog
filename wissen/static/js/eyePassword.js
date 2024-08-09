const eye1 = document.getElementById("eye1");
const eye2 = document.getElementById("eye2");
const eyeContainer1 = document.getElementById("eye-container1");
const eyeContainer2 = document.getElementById("eye-container2");

function eyechange1() {
    eye1.src = "../static/picture/hide.png";
}
function eyechange2() {
    eye2.src = "../static/picture/hide.png";
}

addEventListener(eyeContainer1, eyechange1);
addEventListener(eyeContainer2, eyechange2);
