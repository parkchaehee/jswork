//calc-age.js
//나이계산프로그램
//write() -> getElementById().innerHTML


function calcAge(){
  //조건 : 현재연도는 상수로 선언
    //나이 = 현재연도-태어난해

    const YEAR = 2023;
    let age, birthYear;
    //입력
    birthYear = prompt("태어난 연도를 입력하세요.", "YYYY");
    
    if(birthYear == null){
      document.getElementById("print").innerHTML
      = "입력이 취소되었습니다.";
    }else if(isNaN(birthYear)){
      document.getElementById("print").innerHTML
      = "숫자를 입력해주세요.";
    }else{
      birthYear = parseInt(birthYear); //문자를 숫자로 바꿈
      //계산
      age = YEAR - birthYear;

      document.getElementById("print").innerHTML = 
      YEAR + "년 현재<br>" + birthYear + "년에 태어난 사람의 나이는 "
                  + age + "세 입니다.";
    }
}
