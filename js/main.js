const imageArray = ["img/1.webp","img/2.webp","img/3.webp","img/4.webp","img/5.webp","img/6.webp","img/7.webp","img/8.webp","img/9.webp","img/10.webp"]

const imagesDom = document.getElementById("images");
const thumbnailsDom = document.getElementById("thumbnails");

let sliderContent = "";
let thumbnailsContent = "";

for (let i = 0; i < imageArray.length; i++) {
   const addImageWrapper = 
      `<div class="image-wrapper h-100 hide">
         <img class="image w-100 h-100 object-fit-cover" src="${imageArray[i]}">
      </div>`;
   const addDivThumbnails = 
      `<div id="thumbnail${i}" class="thumbnail-wrapper brightness">
         <img class="image w-100 h-100 object-fit-cover" src="${imageArray[i]}">
      </div>`
   
   sliderContent += addImageWrapper;
   thumbnailsContent += addDivThumbnails;
}

imagesDom.innerHTML = sliderContent;
thumbnailsDom.innerHTML = thumbnailsContent;

const addImageWrapperDom = document.getElementsByClassName("image-wrapper h-100 hide");
const thumbnail = document.getElementsByClassName("thumbnail-wrapper");

let currentImage = 0;

addImageWrapperDom[currentImage].classList.add("show");
thumbnail[currentImage].classList.remove("brightness");

const nextDom = document.querySelector("#next");
const prevDom = document.querySelector("#prev");

nextDom.addEventListener("click",
   function(){

      if (currentImage < addImageWrapperDom.length - 1) {
         addImageWrapperDom[currentImage].classList.remove("show");
         thumbnail[currentImage].classList.add("brightness");
         currentImage++;
         addImageWrapperDom[currentImage].classList.add("show");
         thumbnail[currentImage].classList.remove("brightness");
      } else {
         addImageWrapperDom[currentImage].classList.remove("show");
         thumbnail[currentImage].classList.add("brightness");
         currentImage = 0;
         addImageWrapperDom[currentImage].classList.add("show");
         thumbnail[currentImage].classList.remove("brightness");
      }  
   }
)

prevDom.addEventListener("click",
   function(){

      if (currentImage > 0) {
         addImageWrapperDom[currentImage].classList.remove("show");
         thumbnail[currentImage].classList.add("brightness");
         currentImage--;
         addImageWrapperDom[currentImage].classList.add("show");
         thumbnail[currentImage].classList.remove("brightness");
      } else {
         addImageWrapperDom[currentImage].classList.remove("show");
         thumbnail[currentImage].classList.add("brightness");
         currentImage = addImageWrapperDom.length - 1;
         addImageWrapperDom[currentImage].classList.add("show");  
         thumbnail[currentImage].classList.remove("brightness");
      }  
   }
)

for (let i = 0; i < imageArray.length; i++) {

   const pippo = document.getElementById(`thumbnail${i}`);

   let pluto = pippo;

   pluto.addEventListener("mouseover", //"click"
      function(){
         
         addImageWrapperDom[currentImage].classList.remove("show");
         thumbnail[currentImage].classList.add("brightness");
         currentImage = i;
         addImageWrapperDom[currentImage].classList.add("show");
         thumbnail[currentImage].classList.remove("brightness");
      }
   )
}
