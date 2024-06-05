    window.addEventListener("DOMContentLoaded", function(){
    let now = new Date("2024/06/05");
    let firstDay = new Date("2024/04/06");
    let nowTime = now.getTime();
    let firstDayTime = firstDay.getTime();
    let passedTime = nowTime - firstDayTime;
    passedTime = Math.round(passedTime / (1000*60*60*24));
    // console.log("일수 : " + passedTime);
    // 옛날방식 , const resuldDiv = document.getElementById("result")
    const resultSpan = this.document.querySelector("#result");
    resultSpan.innerText = passedTime;
});