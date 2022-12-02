const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const sliderContainer = document.querySelector(".slider");
const imagesSlider = document.querySelectorAll(".image");
let indexPhoto = 1;
let numberImages = imagesSlider.length;


const nextPhotoSlider=()=>{ 
    sliderContainer.style.transform=`translateX(-${indexPhoto*800}px)`
    indexPhoto++
}

const prevPhotoSlider=()=>{ 
    sliderContainer.style.transform=`translateX(-${(indexPhoto-1)*800}px)`
    indexPhoto--
}
const getFirstPhoto=()=>{
    sliderContainer.style.transform=`translatex(0px)`
    indexPhoto = 1;
}
const getLastPhoto=()=>{
    sliderContainer.style.transform=`translatex(-${(3)*800}px)`
    indexPhoto=3;
}
btnNext.addEventListener("click",()=>{
    indexPhoto>=numberImages?getFirstPhoto():nextPhotoSlider()
    console.log(indexPhoto)
    console.log(numberImages)

})

btnPrev.addEventListener("click",()=>{ 
    indexPhoto<1?getLastPhoto():prevPhotoSlider()
})