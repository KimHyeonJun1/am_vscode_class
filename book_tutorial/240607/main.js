

// 오래된 코드 전개 방식 => 요즘은 팝업차단으로 인해 잘 사용하지 않음!
/*  /*  const opener = document.querySelector("button"); // button 태그를 선택한다.
opener.addEventListener("click", openLayer);
    function openLayer(){
        //팝업차단 설정되어있다면, 결과를 볼 수 없음...
        //중요한 소식, 이벤트 ==> 사용자가 모르고 지나칠수 있음
        window.open("http://www.naver.com", "naverPop", "width=600,height=400,scrollbars=yes")


} */


/* 팝업 관련 메소드
열기,닫기, 파라미터
작성일자: 2024-06-07 */
function pops(){
const opener = document.querySelector(".opener"); // button 태그를 선택한다.
const closer = document.querySelector(".closer"); // button 태그를 선택한다.
const POPUP = document.querySelector("#popup");
//Q.닫기 버튼이 아닌 창 전체(빈곳)를 클릭했을때 닫게하려면?? (모달 팝업)
// window.addEventListener("click", closePopup);

opener.addEventListener("click", openPopup);
closer.addEventListener("click", closeopup);

function openPopup(){
   POPUP.classList.remove("hidden");
}
function closeopup(){
   POPUP.classList.add("hidden");
}
}