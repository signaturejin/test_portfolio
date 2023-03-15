const imgs = document.querySelectorAll(".imgWrap img");
const leftText = document.querySelectorAll(".leftText");
const rightText = document.querySelectorAll(".rightText");

window.addEventListener("scroll",()=>{

    let scTop = window.scrollY;

    //건물 이미지 각각 top 위치값을 -로 줘서 위로 올라가는 느낌처럼 표현
    imgs[0].style.top = "-" + (scTop / 3.5) + "px";
    imgs[1].style.top = "-" + (scTop / 4.5) + "px";
    imgs[2].style.top = "-" + (scTop / 6.5) + "px";

    leftText.forEach((item,index)=>{
        item.style.left = `${(scTop / 4)}px`
    });
    rightText.forEach((item,index)=>{
        item.style.right = `${(scTop / 4)}px`
    });
});