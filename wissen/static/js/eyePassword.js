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

/*security login*/

function passwordSpace(){
  if(!passwordMain.value.includes(" ")){
    
  }
}

function passwordLength() {
    if (passwordMain.value.length > 8) {
        textContainer2.style.display = "none";
        return true;
    } else {
        textContainer2.style.display = "flex";
        return false;
    }
}

function passwordequal1() {
    if (
        passwordMain.value === passwordVerify.value &&
        passwordVerify.value !== ""
    ) {
        textContainer.style.display = "none";
        return true;
    } else {
        textContainer.style.display = "flex";
        return false;
    }
}
function security1() {
    if (
        passwordLength() &&
        passwordequal1() &&
        
    ) {
        buttonSubmit.classList.remove("button-disabled");
    } else {
        buttonSubmit.classList.add("button-disabled");
    }
}

passwordMain.addEventListener("keyup", security1);
passwordVerify.addEventListener("keyup", security1);
