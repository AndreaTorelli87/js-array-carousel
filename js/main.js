const imageArray = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp"]

const imagesDom = document.getElementById("images");

let sliderContent = "";

for (let i = 0; i < imageArray.length; i++) {
   const addImageWrapper = 
   `<div class="image-wrapper h-100 d-none">
      <img class="image w-100 h-100 object-fit-cover" src="${imageArray[i]}">
    </div>`;
   
   sliderContent += addImageWrapper;
}

imagesDom.innerHTML = sliderContent;

const addImageWrapperDom = document.getElementsByClassName('image-wrapper h-100 d-none');

let currentImage = 0;

addImageWrapperDom[currentImage].classList.remove('d-none');