// var.js
// ?학생은 ?학년 ?반입니다.
//document.write()
//변수이름에 예약어 사용불가
var sName = "우영우";
var sGrade = 3;
var sClass = 4;


document.write(sName + " 학생은 " + sGrade + "학년 "
            +sClass + "반입니다.<br>")
document.write(sName + "&nbsp; &nbsp", sGrade + " ", sClass + " ");
console.log("이름: " + sName);

var ch1 ='1';
String.fromCharCode(ch1)
console.log(String.fromCharCode(ch1));

var ch2 ='B';
console.log(ch2);
console.log(ch2.charCodeAt(0));

//유니코드
//0번 인덱스의 코드값
let ch3 = '가';
console.log(ch3);
// document.write(ch3);
console.log(ch3.charCodeAt(0));

