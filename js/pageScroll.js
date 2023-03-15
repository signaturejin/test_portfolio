// 필요한 태그 생성
const gnb = document.querySelectorAll(".gnb li a");
const page = document.querySelectorAll(".page");

console.log(page);
// 각 페이지 시작위치값 담아줄 배열
let secTop = [];

window.addEventListener("scroll",()=>{
    // 스크롤바 y값 담아주는 변수
    let scTop = window.scrollY;
    // 화면의 높이값
    let windowHeight = window.innerHeight;
    // 처음 ~ 끝까지의 높이값
    let fullHeight = document.body.scrollHeight;

    // 반복문 이용하여 각 페이지 시작위치값 담아줌
    page.forEach((item,index)=>{
        secTop[index] = item.offsetTop;
    });

    if(scTop >= secTop[0] && scTop < secTop[1]){
        gnbColor(0);
    }
    else if(scTop >= secTop[1] && scTop < secTop[2]){
        gnbColor(1);
    }
    else if(scTop >= secTop[2] && scTop < secTop[3]){
        gnbColor(2);
    }

    // 현 스크린 시작위치값 + 화면 높이값 = 풀페이지 높이값
    if(scTop + windowHeight >= fullHeight){
        gnbColor(3);
    }

    // for(let i=0; i<page.length; i++){
    //     if(scTop >= secTop[i] && scTop < secTop[i + 1]){
    //         gnbColor(i);
    //     }
    //     else if(scTop >= secTop[page.length - 1]){
    //         gnbColor(page.length - 1);
    //     }
    // }
});

// 해당 영역 도착하면 gnb 메뉴색깔이 변하는 함수
let gnbColor = (index)=>{
    //활성화 전 전부 비활성
    gnb.forEach((gnb,index)=>{
        gnb.classList.remove("on");
    });
    gnb[index].classList.add("on");

}