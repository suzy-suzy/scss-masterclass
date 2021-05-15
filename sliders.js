const slider = document.querySelector(".product__container"),
    sliderInner = document.querySelector(".product__columns"),
    sliderContent = document.querySelector(".product__column");

let pressed = false;
let startx;
let x;

slider.addEventListener("mausedown", (e) => {
    pressed = true;
    startx = e.offsetX;
    console.log(startx);
})