const pics = document.querySelectorAll(".pic");
const lightbox = document.querySelector("#lightbox")
const lightboxImage = document.querySelector("#lightboxImage");


const prevBt = document.querySelector(".prev");
const nextBt = document.querySelector(".next");
let current =1;
let lightboxIsShow = false;

prevBt.addEventListener("click", showPrevImage);
nextBt.addEventListener("click", showNextImage);

lightbox.addEventListener("click", (e) => { //gpt가 알려주는 lightbox가 직접 클릭된 경우에만 hideLightbox를 호출하도록 함.
    if (e.target === lightbox) {
        hideLightbox();
    }
});
/* lightbox.addEventListener("click", hideLightbox); */
function hideLightbox(){
    lightboxIsShow = false;
    lightbox.style.display = "none";
}
function showPrevImage(e){
    e.preventDefault();
    let prev = current -1;
    if(prev <= 0) {
        prev = 6;
    }
    current = prev; //전역 변수 current를 업데이트
    showLightbox(prev); // prev 번호 이미지를 보여주도록 함수 호출
}
function showNextImage(e){
    e.preventDefault();
    let next = current +1;
    if(next > 6){
      next = 1;
        
    }
    current = next;
    showLightbox(next);
}


pics.forEach(function(pic, index){
    let _curr = index + 1;
    pic.addEventListener("click", () =>{lightboxIsShow = true; 
        showLightbox(_curr);
    }); 
        
});
function showLightbox(num){
    if(lightboxIsShow){
        lightbox.style.display = "block";
    }
   
        let numLocation = `images/tree1 (${num}).jpg`
        lightboxImage.setAttribute("src", numLocation);
    }
    
    //console.dir(lightboxImage);