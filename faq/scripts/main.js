const wrapper = document.querySelectorAll(".faq__wrapper");

wrapper.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle("active");
    })
});

const menu = document.querySelectorAll(".menu__js_open");

menu.forEach(menu => {
    menu.addEventListener('click', () => {
        menu.classList.toggle("active");
    })
});

const button = document.querySelector("#modal__button");
const modal = document.querySelector("#modal");
const body = document.body;

button.addEventListener("click",modalHandler);
function modalHandler(e) {
    e.preventDefault();
    modal.classList.toggle("active");
    button.classList.toggle("active");
    body.classList.toggle("noscroll")
}