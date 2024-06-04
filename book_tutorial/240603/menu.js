/*DOM 선택
I. 옛날코드
document.getElementById(),
document.get어쩌구~저쩌구~()

II. 요즘코드
document.querySelector("CSS선택자"): 일치하는 첫번째 요소 선택 메소드
document.querySelectorAll("CSS선택자") : 모든 요소 선택 메소드
*/

const greenBt = document.querySelector("#greenBt");
const orangeBt = document.querySelector("#orangeBt");
const purpleBt = document.querySelector("#purpleBt");
const colorBox = document.querySelector("#box")
greenBt.addEventListener("click", function(){
//   alert("green!")

let color = this.innerText;
컬러변경함수(color); // 컬러번경함수 호출
});

orangeBt.addEventListener("click", function(){


let color = this.innerText;
컬러변경함수(color); // 컬러번경함수 호출
});

purpleBt.addEventListener("click", function(){


let color = this.innerText;
컬러변경함수(color); // 컬러번경함수 호출
});
function 컬러변경함수(colorName){
 
    colorBox.style.backgroundColor = colorName;
}

// function changeColor Box
/* greenBt.addEventListener("click", () =>{

}); */