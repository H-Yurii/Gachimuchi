let slider = document.querySelector('.slider')
let sliderSlide = document.querySelectorAll('.slider__slide')
let buttons = document.querySelectorAll('.slider__nav-button')
let currentIndex = 0
let leftSlide = document.querySelector('.prev__slide')
let rightSlide = document.querySelector('.next__slide')
let body = document.querySelector('.body')
let colors = ['#ea5b5b', '#e1ce1f', '#b71212', '#aae16f']

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    body.style.backgroundColor = colors[index]
}

function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

function goToNextSlide() {
    currentIndex = (currentIndex + 1) % sliderSlide.length;
    showSlide(currentIndex);
}

function goToPrevSlide() {
    currentIndex = (currentIndex - 1 + sliderSlide.length) % sliderSlide.length;
    showSlide(currentIndex);
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => goToSlide(index));
});

showSlide(currentIndex)