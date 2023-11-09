//fee.js
//나이에따른 입장료 계산
let age = prompt("나이를 입력하세요", "8");
let fee = 0; //초기화

if(age >= 1 && age < 8){
  document.write("취학 전 아동입니다.<br>")
  fee = 1000;
}else if(age >= 8 && age<14){
  document.write("초등학생 입니다.");
  fee = 2000;
}else if(age >= 14, age<20){
  document.write("중고등학생입니다.");
  fee = 2500;
}else{
  document.write("성인입니다.");
  fee = 3000;
}
document.write("입장료는 <span class='accent'>" + fee + "</span>원 입니다.");