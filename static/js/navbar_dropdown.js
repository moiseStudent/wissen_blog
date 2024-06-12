const button_menu=document.querySelector("#button_menu")
const dropdown_menu=document.querySelector("#dropdown-menu")

button_menu.addEventListener("click",(e) => {
    e.currentTarget.classList.toggle("open_button_menu");
    dropdown_menu.classList.toggle("open_dropdown_menu");
});