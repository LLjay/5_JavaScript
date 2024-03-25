/**
 * Scope
 */

// 얘가 지금 누구한테 속해 있느냐, 그로 인해 누구에게 접근 가능하고 누구에게 접근 불가능한가

var number1 = 20;

function test1(){
    console.log(number1);
}

// test1();

// 브라우저 하나가 생길 때마다 만들어지는 하나의 객체가 window
// 그 요소들을 관리해주고 추가 생성 삭제해주는 건 document
// number1을 가지고 있는 건 window 객체

function test2(){ // 스코프라는 영역이 따로 생김, window가 가지고 있는 위의 변수와 다름
    var number1 = 40;
    console.log(number1);
    // 이 함수 안의 지역변수
    // 둘 다 var이고 같은 이름인데 함수 안에서 먼저 찾음
    // 위치에 따라 우선순위가 있는 것
    // 함수 내에서 찾다가 없으면 window 객체로 가서 찾는 것 (자바의 this)
}

// test2();

var number1 = 20;

function test3(){
    var number1 = 40;
    test4();
    console.log("number1 : " + number1);
}

function test4(){
    var number2 = 11;
    
    console.log("number2 : " + number2);
    console.log("number1 : " + number1);
    // 이 함수 안에 number1이 없으므로 이 함수를 호출한 곳 아니고 바로 window 객체 내에서 number1을 찾음
}

test3();
console.log(number1);

/**
 * JS => Lexical Scope
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * Dynamic Scope
 * 실행한 위치가 상위 스코프를 정한다.
 */

// var i = 1000;
// for (var i = 0; i < 10; i++){
//     console.log(i);
// }
// console.log("i = " + i);
// var는 for문에서 스코프를 만들지 않음
// var는 블록 레벨 스코프를 지원하지 않음 / 함수형 스코프는 지원함

let i = 1000;
for (let i = 0; i < 10; i++){
    console.log(i);
}
console.log("i = " + i);

// let은 블록 레벨 스코프 지원함, 다른 영역에서 만든 것이기 때문에 중복으로 생성됨

// 자바 스크립트의 클로즈?
