// 랜덤번호 지정
// 유저가 번호입력 + 버튼 클릭
// 맞추면 정답입니다.
// 랜덤번호 < 유저번호 : down
// 랜덤번호 > 유저번호 : Up
// Reset 누르면 초기화
// 5번을 다 쓰면 게임 끝 + 버튼 disable
// 유저가 범위 밖을 입력하면 알려주고 기회 소모 X
// 이미 입력한 숫자는 알려주고 기회 소모 X

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let chance = 5;
let gameOver = false;
let history = [];

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus", function(){
    userInput.value = "";
});
 
function pickRandomNum() {
    computerNum = Math.floor(Math.random()*50)+1;
    console.log("정답", computerNum);
}

function play () {
    let userValue = userInput.value;

    if (userValue < 1 || userValue > 50) {
        resultArea.textContent = "1과 50 사이 숫자를 입력해주세요."
        return;
    }

    if (history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다."
        return;
    }
    chance -- ;
    chanceArea.textContent = `남은기회 : ${chance}번`;

    if(userValue < computerNum) {
        resultArea.textContent = " UP ! "
    } else if (userValue > computerNum) {
        resultArea.textContent = " DOWN ~"
    } else {
        resultArea.textContent = " 정답입니다. "
        gameOver = true
    }
    
    history.push(userValue);

    if (chance < 1) {
        gameOver=true; 
    } 
    if (gameOver == true) {
        playButton.disabled = true
    }
}
function reset () {
    userInput.value = "";
    pickRandomNum();
    resultArea.textContent = "결과값이 이곳에 나옵니다."
}
pickRandomNum();
