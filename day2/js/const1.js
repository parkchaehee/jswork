//const1.js
//상수(Constant Variable)

let current_year = 2023;
current_year = 2022;

console.log(current_year);

//상수 - 재할당, 변경불가
const MONTH = 12;
//MONTH = 13; 재할당불가

console.log("1년은 " + MONTH + "달이 있습니다.");

//원의 넓이 계산하기
// circleArea = PI * radius * radius;
const PI = 3.14;
let radius = 4;
let circleArea;

//연산
circleArea = PI * radius * radius;

//출력
//document.write("원의 넓이: " + circleArea);

//공의 속도를 변환하는 프로그램 작성
//km -> mile 
let kph, mph;
const RATE_KPH_MPH = 1.609;

kph=prompt("공의 속도: ");
kph=parseFloat(kph);

mph = kph / RATE_KPH_MPH;

document.write(kph + "km는 " + mph.toFixed(2) + " 마일입니다.")