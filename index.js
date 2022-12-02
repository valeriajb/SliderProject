const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const sliderContainer = document.querySelector(".slider");
const imagesSlider = document.querySelectorAll(".image");
const groupItems = document.querySelectorAll(".itemSlider");
let indexPhoto = 1;
let numberImages = imagesSlider.length;

groupItems[0].style.backgroundColor="white"

const barColor=(indexPhoto)=>{ 
  remove()
  groupItems[indexPhoto-1].style.backgroundColor="white"
}
const remove = () => {
  groupItems.forEach((item) => {
    item.style.backgroundColor = "transparent";
  });
};

const nextPhotoSlider = () => {
  sliderContainer.style.transform = `translateX(-${indexPhoto * 800}px)`;
  indexPhoto++;
  barColor(indexPhoto)
};

const prevPhotoSlider = () => {
  sliderContainer.style.transform = `translateX(-${(indexPhoto - 1) * 800}px)`;
  barColor(indexPhoto)
  indexPhoto--;
};
const getFirstPhoto = () => {
  sliderContainer.style.transform = `translatex(0px)`;
  indexPhoto = 1;
  barColor(indexPhoto)
};
const getLastPhoto = () => {
  sliderContainer.style.transform = `translateX(-${(indexPhoto + 3) * 800}px)`;
  indexPhoto = 3;
  barColor(indexPhoto+1)

};
btnNext.addEventListener("click", () => {
  indexPhoto >= numberImages ? getFirstPhoto() : nextPhotoSlider();
  console.log(indexPhoto);
  console.log(numberImages);
});

btnPrev.addEventListener("click", () => {
  indexPhoto < 1 ? getLastPhoto() : prevPhotoSlider();
});

{
  groupItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      remove();
      item.style.backgroundColor = "white";
      sliderContainer.style.transform = `translateX(-${index * 800}px)`;
    });
  });
}
