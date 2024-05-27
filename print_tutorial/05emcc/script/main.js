/* DOM 요소에 접근하기 : 가장 자주 사용하는
1) .getElementById() : id 값이 일치하는 DOM요소를 선택하는 메소드
2) . getElementByClassName(): clss 값이 일치하는  선택하는 메소드
3) 그 밖에 메소드
*/

/* CSSOM : Css objet Model
.querySelector("css선택자")--> .querySelector("menu")
.qertSelectorAll("css선택자") */

//아이디값이 menu인 DOM 객체를 menuBtn 이라는 변수에 할당
var menuBtn = document.querySelector("#menu");
var sideMenu = document.querySelector("#side");
menuBtn.addEventListener("click", function(){
    
    sideMenu.style.right = 0
    //숨겨진 사이드 메뉴를 보여줘
    //1)숨겨진 사이드 메뉴 HTML을 추가
    //2)사이드 메뉴에 ID 또는 CLASS 선택자 지정
    //3).querySelevtor() 해당 DOM요소를 선택하고,
    //4)CSS를 조작해서 결과적으로 숨겨진 메뉴를 보여지게 처리함

});

// #side 를 찾아서 클릭하면, display를 none으로 조작
sideMenu.addEventListener("click", function(){
    this.style.right = "-300px"
}) //this는 보통 나 자신을 가리키는 대명사 (sideMenu 또는 document.querySeletor("#side")로 지정하기보다)
// siteMenu =document.querySelector("#side")
