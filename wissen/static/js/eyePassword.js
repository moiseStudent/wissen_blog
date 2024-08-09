const eye1 = document.getElementById("eye1");
const eye2 = document.getElementById("eye2");
const eyeContainer1 = document.getElementById("eye-container1");
const eyeContainer2 = document.getElementById("eye-container2");
const passwordMain = document.getElementById("password-main");
const passwordVerify = document.getElementById("password-verify");

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
