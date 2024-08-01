const button = document.getElementById("button")
const imageButton = document.getElementById("image-button")

button.addEventListener("mouseover",()=> {imageButton.style.width = "25px", imageButton.style.opacity = "100"});
button.addEventListener("mouseout",()=> {imageButton.style.width = "0",imageButton.style.opacity = "0"})