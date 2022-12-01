const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const sliderContainer = document.querySelector(".slider");
const imagesSlider = document.querySelectorAll(".image");
let indexPhoto = 0;
let numberImages = imagesSlider.length;

const getFirstPhoto = () => {
    sliderContainer.style.transform = `translateX(0px)`;
    indexPhoto = 0;
};

const getLastPhoto = () => {
    sliderContainer.style.transform = `translateX(-${(numberImages-1)*800}px)`
}

const nextPhotoSlider = () => {
    sliderContainer.style.transform = `translateX(-${indexPhoto * 800}px)`;
    indexPhoto = indexPhoto + 1;
};

const prevPhotoSlider = () => {
    sliderContainer.style.transform = `translateX(-${indexPhoto * 800}px)`;
    indexPhoto = indexPhoto - 1;
};





btnNext.addEventListener("click", () => {
    indexPhoto>numberImages?getFirstPhoto():nextPhotoSlider();
});
btnPrev.addEventListener("click", () => {
    indexPhoto<0?getLastPhoto():prevPhotoSlider()
});
