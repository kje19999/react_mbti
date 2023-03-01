 const main = document.querySelector("#main");
 const qna = document.querySelector("#qna");

 function begin() {
    main.style.WebKitAnimation = "fadeOut 1s"; //1s란 1초 동안 애니메이션이 실행되도록 하는 설정
    main.style.animation = "fadeOut 1s";
     setTimeout(()=>{
         qna.style.WebKitAnimation = "fadeIn 1s";
         qna.style.animation = "fadeIn 1s";       
         setTimeout(()=> {
             main.style.display = "none";
             qna.style.display =  "block";
         },400);
     }, 400);
 }