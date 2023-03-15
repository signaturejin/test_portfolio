const typing = document.querySelector(".typing");
let context = "웹 개발자 허유진 입니다 :)"; // 16

// 0부터 16까지 1씩 증가될 변수
let charIndex = 0;
// 16부터 0까지 1씩 감소될 변수
let maxIndex;

// 자동실행함수 사용해서 일정시간마다 글자 타이핑 효과
setTimeout(()=>{
    let autoTyping = setInterval(()=>{
        // 함수호출
        textToggle();
    },200);
},2800);

function textToggle(){
    // 텍스트 나오는 구간 / 16보다 작으면 글자 하나씩 타이핑
    if(charIndex < context.length){
        typing.textContent += context[charIndex];
        charIndex++;
        // charIndex값이 텍스트 길이값보다 클 경우
        if(charIndex >= context.length){
            // maxIndex에 길이값 넣어줌
            maxIndex = context.length;
            // 자동실행 멈춤
            stopAndStart();
        }
    }
    // 텍스트 지우는 구간 / 0보다 크거나 같으면 지움
    else if(maxIndex >= 0){
        typing.innerText = context.substring(0,maxIndex);
        maxIndex--;
        // maxIndex 값이 음수가 될 경우
        if(maxIndex < 0){
            charIndex = 0; // 숫자값 다시 초기화
            // 자동 타이핑 다시 시작
            stopAndStart();
        }
    }
}

function stopAndStart(){
    clearInterval(autoTyping);
    setTimeout(()=>{
        autoTyping = setInterval(()=>{
            textToggle();
        },200);
    },3000);
}