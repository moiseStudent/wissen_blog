/*imagen ojo*/
const eye1 = document.getElementById("eye1");
const eye2 = document.getElementById("eye2");
/* container de imagen ojo*/
const eyeContainer1 = document.getElementById("eye-container1");
const eyeContainer2 = document.getElementById("eye-container2");
/*formulario de contraseña */
const passwordMain = document.getElementById("password-main");
const passwordVerify = document.getElementById("password-verify");
/*texto debajo del formulario*/
const textContainer = document.getElementById("text-container");
const textContainer2 = document.getElementById("text-container2");
const textContainer3 = document.getElementById("text-container3");
const textContainer4 = document.getElementById("text-container4");
/*boton */
const buttonSubmit = document.getElementById("button");
eye1.addEventListener("click", () =>
    eye1.src == "http://127.0.0.1:5000/static/picture/hide.png"
        ? ((eye1.src = "../static/picture/view.png"),
          (passwordMain.type = "password"))
        : ((eye1.src = "../static/picture/hide.png"),
          (passwordMain.type = "text"))
);
eye2.addEventListener("click", () =>
    eye2.src == "http://127.0.0.1:5000/static/picture/hide.png"
        ? ((eye2.src = "../static/picture/view.png"),
          (passwordVerify.type = "password"))
        : ((eye2.src = "../static/picture/hide.png"),
          (passwordVerify.type = "text"))
);

/*login security*/

function passwordUpperAndLower() {
    let contraseña = passwordMain.value;
    if (
        contraseña === contraseña.toUpperCase() ||
        contraseña === contraseña.toLowerCase()
    ) {
        textContainer4.style.display = "flex";
        return false;
    } else {
        textContainer4.style.display = "none";
        return true;
    }
}

function passwordSpace() {
    if (passwordMain.value.includes(" ")) {
        textContainer3.style.display = "flex";
        return false;
    } else {
        textContainer3.style.display = "none";
        return true;
    }
}

function passwordLength() {
    if (passwordMain.value.length >= 8) {
        textContainer2.style.display = "none";
        return true;
    } else {
        textContainer2.style.display = "flex";
        return false;
    }
}

function passwordEqual() {
    if (
        passwordMain.value === passwordVerify.value &&
        passwordVerify.value !== ""
    ) {
        textContainer.style.display = "none";
        return true;
    } else if (
        passwordMain.value !== passwordVerify.value &&
        passwordVerify.value !== ""
    ) {
        textContainer.style.display = "flex";
        return false;
    }
}
function security1() {
    /*explicacion: si no se hace esto no se ejecutan algunas funciones*/
    let result1 = passwordLength();
    let result2 = passwordSpace();
    let result3 = passwordEqual();
    let result4 = passwordUpperAndLower();
    if (result1 && result2 && result3 && result4) {
        buttonSubmit.classList.remove("button-disabled");
    } else {
        buttonSubmit.classList.add("button-disabled");
    }
}

passwordMain.addEventListener("keyup", security1);
passwordVerify.addEventListener("keyup", security1);
