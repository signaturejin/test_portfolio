// 필요한 태그 생성
const sections = document.querySelectorAll(".section");
const header = document.querySelector(".hTop");

// 로고 이미지 담고 있는 태그
const logoImg = document.querySelector(".logo a");

// 각 영역 시작위치값 담기 위한 배열변수
let secStart = [];

// 스크롤 할 시
window.addEventListener("scroll",()=>{
    // 스크롤바 y값 변수에 대입
    let scTop = window.scrollY;

    // 각 영역들 시작위치값 배열에 대입
    sections.forEach((item,index)=>{
        secStart[index] = item.offsetTop;
    });

    if(scTop <= secStart[0] - 100){
        header.classList.remove("fixed");
        logoImg.innerHTML = `<img src="./img/logo.png" alt="">`;
    }
    else{
        header.classList.add("fixed");
        logoImg.innerHTML = `<img src="./img/logo2.png" alt="">`;
    }
});