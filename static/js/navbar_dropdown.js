const button_menu=document.querySelector("#button_menu")
const dropdown_menu=document.querySelector("#dropdown_menu")
const dropdown_subcontainer1=document.querySelector("#dropdown_subcontainer1")
const dropdown_subcontainer2=document.querySelector("#dropdown_subcontainer2")
const dropdown_subcontainer3=document.querySelector("#dropdown_subcontainer3")
const dropdown_subcontainer4=document.querySelector("#dropdown_subcontainer4")
const dropdown_subcontainer5=document.querySelector("#dropdown_subcontainer5")
const dropdown_subcontainer6=document.querySelector("#dropdown_subcontainer6")


button_menu.addEventListener("click",(e) => {
    e.currentTarget.classList.toggle("open_button_menu");
    dropdown_menu.classList.toggle("open_dropdown_menu");
    dropdown_subcontainer1.classList.toggle("open_dropdown_subcontainer");
    dropdown_subcontainer2.classList.toggle("open_dropdown_subcontainer");
    dropdown_subcontainer3.classList.toggle("open_dropdown_subcontainer");
    dropdown_subcontainer4.classList.toggle("open_dropdown_subcontainer");
    dropdown_subcontainer5.classList.toggle("open_dropdown_subcontainer");
    dropdown_subcontainer6.classList.toggle("open_dropdown_subcontainer");
});