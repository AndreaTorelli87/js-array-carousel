const imageArray = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp"]

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

//DA RIVEDERE A MENTE FREDDA

// for (let i = 0; i < imageArray.length; i++) {

//    const thumbnail1 = document.getElementById("thumbnail1");

//    thumbnail1.addEventListener("click",
//       function(){
         
//          addImageWrapperDom[currentImage].classList.remove("show");
//          thumbnail[currentImage].classList.add("brightness");
//          currentImage = 1;
//          addImageWrapperDom[currentImage].classList.add("show");
//          thumbnail[currentImage].classList.remove("brightness");
//       }
//    )
// }

// QUESTO È UN ACCROCCHIO, LO SO... DOMANI LO MIGLIORO!

const thumbnail0 = document.getElementById("thumbnail0");

thumbnail0.addEventListener("click",
   function(){
      
      addImageWrapperDom[currentImage].classList.remove("show");
      thumbnail[currentImage].classList.add("brightness");
      currentImage = 0;
      addImageWrapperDom[currentImage].classList.add("show");
      thumbnail[currentImage].classList.remove("brightness");
   }
)

const thumbnail1 = document.getElementById("thumbnail1");

thumbnail1.addEventListener("click",
   function(){
      
      addImageWrapperDom[currentImage].classList.remove("show");
      thumbnail[currentImage].classList.add("brightness");
      currentImage = 1;
      addImageWrapperDom[currentImage].classList.add("show");
      thumbnail[currentImage].classList.remove("brightness");
   }
)

const thumbnail2 = document.getElementById("thumbnail2");

thumbnail2.addEventListener("click",
   function(){
      
      addImageWrapperDom[currentImage].classList.remove("show");
      thumbnail[currentImage].classList.add("brightness");
      currentImage = 2;
      addImageWrapperDom[currentImage].classList.add("show");
      thumbnail[currentImage].classList.remove("brightness");
   }
)

const thumbnail3 = document.getElementById("thumbnail3");

thumbnail3.addEventListener("click",
   function(){
      
      addImageWrapperDom[currentImage].classList.remove("show");
      thumbnail[currentImage].classList.add("brightness");
      currentImage = 3;
      addImageWrapperDom[currentImage].classList.add("show");
      thumbnail[currentImage].classList.remove("brightness");
   }
)

const thumbnail4 = document.getElementById("thumbnail4");

thumbnail4.addEventListener("click",
   function(){
      
      addImageWrapperDom[currentImage].classList.remove("show");
      thumbnail[currentImage].classList.add("brightness");
      currentImage = 4;
      addImageWrapperDom[currentImage].classList.add("show");
      thumbnail[currentImage].classList.remove("brightness");
   }
)