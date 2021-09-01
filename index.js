const slider = document.querySelector('[data-slider]');
const prevButton = document.querySelector('[data-prev]');
const nextButton = document.querySelector('[data-next]');
const slides = document.querySelectorAll('[data-slide]');
const dots = document.querySelectorAll('[data-dot]');
const numSlides = slides.length;
let slideIndex = 0;

nextButton.addEventListener('click', ()=>{
    slides.forEach((slide)=>{
        slide.classList.remove("carousel__item--visible");
    })
    dots.forEach((dot)=>{
        dot.classList.remove("active");
    })

    slideIndex++;
    
    if (slideIndex > (numSlides - 1)) {
        slideIndex = 0;
    }

    slides[slideIndex].classList.add("carousel__item--visible");
    dots[slideIndex].classList.add("active");
})


prevButton.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("carousel__item--visible");
    });
    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    slideIndex--;

    if (slideIndex < 0) {
        slideIndex = numSlides - 1;
    }

    slides[slideIndex].classList.add("carousel__item--visible");
    dots[slideIndex].classList.add("active");
});

let playSlider;

let repeater = () => {
    playSlider = setInterval(function () {
        slides.forEach((slide) => {
            slide.classList.remove("carousel__item--visible");
        });
        dots.forEach((dot) => {
            dot.classList.remove("active");
        });

        slideIndex++;

        if (slideIndex > (numSlides - 1)) {
            slideIndex = 0;
        }

        slides[slideIndex].classList.add("carousel__item--visible");
        dots[slideIndex].classList.add("active");
    }, 1000);
}
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
    repeater();
});
