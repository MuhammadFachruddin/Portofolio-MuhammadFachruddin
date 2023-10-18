function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

let link1 = document.getElementById("link1")
let link2 = document.getElementById("link2")
let link3 = document.getElementById("link3")

link1.addEventListener('click', () => {
    scrollToElement('.header');
})

link2.addEventListener('click', () => {
    scrollToElement('.header', 1);
})

link3.addEventListener('click', () => {
    scrollToElement('.footer');
})

function btn_cv() {
    window.open('https://drive.google.com/file/d/1Rv1SjHcoxuAXXA58AQKqqfA231VTJOUF/view?usp=sharing', '_blank');
}

function btn_wa() {
    window.open('https://wa.me/+6289636765047', '_blank');
}