const hamburger = document.getElementsByClassName("button--toggle")[0];
const menu = document.getElementsByClassName("navbar__links--hamburger")[0];
const firstImage = document.querySelector(".two .image");
const secondImage = document.querySelector(".three .image");
const galleryFirst = document.getElementById("one");
const gallerySecond = document.getElementById("two");
const galleryThird = document.getElementById("three");
const galleryFourth = document.getElementById("four");


menu.style.display = "none";
hamburger.onclick = function(e) {
  if (menu.style.display == "none"){
    menu.style.display = "flex";
  } else if (menu.style.display == "flex"){
    menu.style.display = "none";
  }
};

window.addEventListener("resize", function(e){
  const w = document.documentElement.clientWidth;
  if(w > 620){
    menu.style.display = "none";
  }

  if(w < 750) {
    firstImage.src = "./images/mobile/image-transform.jpg";
    secondImage.src = "./images/mobile/image-stand-out.jpg";
  }

  if(w < 701){
    galleryFirst.src = "./images/mobile/image-gallery-milkbottles.jpg";
    gallerySecond.src = "./images/mobile/image-gallery-orange.jpg";
    galleryThird.src = "./images/mobile/image-gallery-cone.jpg";
    galleryFourth.src = "./images/mobile/image-gallery-sugar-cubes.jpg";
  }
})