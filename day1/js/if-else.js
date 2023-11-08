// if-else.js

//단독 if문
//if ~ else문

//속도 위반 판정 프로그램
//속도를 입력받아 속도 위반을 판정하는 프로그램



let limit_speed = prompt("속도를 입력하세요.");

if(limit_speed == null){
  document.write("입력이 취소되었습니다.");
}else{
  if(limit_speed >= 50){
    document.write("안전 속도 위반입니다.<br>");
  }else{
    document.write("규정속도입니다.<br>");
  }
  document.write("시속 " + limit_sppeed + "km입니다.");
}


