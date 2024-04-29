function test(){
    console.log("test 함수 실행")
}

test();

const test2 = function(){
    console.log(arguments) // 파라미터로 받을 수 있음, 하지만 arrow 함수는 arguments도 사용하지 않음
    // 하지만 보통 어떤 변수를 받을지 다 알고 쓰기 때문에 잘 쓰지 않음
}

test2("num1", 20);

// arguments : 인자를 받는 것들

/**
 * Arrow 함수
 */
// function이라는 말과 자리를 =>로 대체
// 좀 더 가벼움

// this가 혼란을 일으킨다?
// 함수가 실행될 때마다 this가 생성되기 때문에
// 따라서 리액트에서는 this를 빼버림, =>로 생성된 함수에서는 this를 부모의 것을 물려받음

// window에 들어가있음
// 기본적으로 자바 스크립트의 변수가 저장되는 곳은 window
// js 파일에서 만드는 것은 window에서 만들어짐...
const arrow1 = () => {
    console.log(this)
    // this를 생성하지 않기 때문에 console에 가보면 window를 출력
}

arrow1();

// 1. this, arguments 미사용
// 2. => 사용, 좀 더 가벼움