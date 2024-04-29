let members = [
    '전은지',
    '윤현지',
    '서지안', 
    '이해솔',
    '김성령'
]

// push
console.log(members.push('이지수'));
console.log(members)
// 추가하는 함수

// 내장함수
// 배열은 보통 for문으로 꺼냄 -> 하지만 리액트는 for문을 사용하지 않음
// 변경한다의 개념이 없음, 수정이 아닌 새로 생성해버리는 것
// 하나가 변경될 때마다 싹 다 바꿔버림...
// for문을 대체할 것

// splice()
console.log(members.splice(0, 3));
// 어디부터 어디까지는 안 쓰겠다고 잘라주는 것

// concat
console.log(members.concat("이지수"));
console.log(members);
// 

members = [
    '전은지',
    '윤현지',
    '서지안', 
    '이해솔',
    '김성령'
]

let members2 = [
    ...members
]
// ... : 이 뒤에 오는 배열 전체를 그대로 가져와줌

let memberInfo = {
    name: "지수",
    age: 24,
    gender: 'F' 
}

let memberInfo2 = {
    ...memberInfo,
    age: 12
}

console.log(memberInfo2);

// 만약 회원 정보 수정 시
// 전체 정보 중 비밀번호 하나만 변경되는 경우, 전체 배열을 다 가져와서
// 특정 하나만 그 뒤에 바꿔서 덮어쓰면 전체값을 다 선언해서 새로 생성해주는 것보다 빠름

console.log('-------------------------------------------------------')

// join()
console.log(members2.join());
// 배열의 값들을 컴마(,)로 이어서 쭉 나열해주는 함수
// 구분자 지정 가능
console.log(members2.join('/'));
console.log(members2.join(' '));

// 둘 다 정렬 가능한 경우는 서버가 아닌 프론트에서 정렬 해주는 게 좋음
// 정렬(sort), 반복문 대체

// sort()
members2.sort();
console.log(members2);
// 사전 순으로 정렬해줌 ㄱㄴㄷㄹ...
console.log(members2.reverse());
// 사전 역순으로 정렬

members

let numbers = [1,9,7,5,3]
console.log(numbers);

numbers.sort();
console.log(numbers);

// a, b를 비교
numbers.sort((a, b) => {
// 함수가 정렬의 조건이 된다?
    console.log(a + " : " + b);
    return 1;
});

// 1) a를 b보다 나중에 정렬하고 싶다면 (뒤에 두려면) 0보다 큰 수를 반환
// 2) a를 b보다 먼저 정렬하려 한다면 (앞에 두려면) 0보다 작은 수를 반환
// 3) 원래 순서를 유지하고 싶다면 0을 반환
numbers.sort((a, b) => {
    console.log(a + " : " + b);
    return a > b ? 1 : -1; // 오름차순 정렬
});
console.log(numbers);

numbers.sort((a, b) => {
    console.log(a + " : " + b);
    return a < b ? 1 : -1; // 내림차순 정렬
});
console.log(numbers);

(a, b) => a < b ? 1 : -1;
// a, b를 전달해서 이런 리턴값을 가지는 함수를 하나 만들어라
numbers.sort((a, b) => a < b ? 1 : -1);

// map
// 기존 배열의 요소를 전부 반복하면서
// return 된 값으로 새로운 배열을 만들어주는 함수
console.log(members2.map((m) => m + 1));
// m이라는 파라미터를 받아서 m을 리턴하는 함수

// 위 함수와 똑같음
// =>
let tmpMembers = [];
for(let m of members2){
    tmpMembers.push(m + 1);
}
// members2를 반복하면서 return된 m으로 새로운 배열을 만들어주는 함수

console.log(members2.map((m) => {
    if(m.length > 3){
        return m + "[vip]";
    } else {
        return m + "[gold]";
    }
}));

let classList = [{
    className : "자바 1장",
    time : "12:00",
    classNo : 1
},{
    className : "자바 2장",
    time : "13:00",
    classNo : 2
},{
    className : "자바 3장",
    time : "14:00",
    classNo : 3
}]

let studentList = [{
    name : "이지수2",
    classNo : 1
},{
    name : "이지수3",
    classNo : 2
},{
    name : "이지수1",
    classNo : 3
}]

// classList.map(c => {}); // c의 중괄호도 생략 가능, 단 하나일 때만

// classList.map(c => c); // c를 받아 c return

console.log(studentList.map(c => {
 for(let s of studentList){
    if(s.classNo === c.classNo){
        return {
            ...c,
            ...s
        }
    }
 }
 // filter로 변경해보기
 return s;
}));

// filter()
let numbers2 = [1, 8, 7, 6, 3]
let tmp2 = [];
for (let n of members2){
    if(n % 2 === 0){
        tmp2.push(n);
    }
}

// true인 값들은 성공, false인 값들은 배제

tmp2 = number2.filter(n => n % 2 === 0);
console.log(numbers2.filter(n => n % 2 ===0));

// find()
console.log(tmp2.find(n => n % 2 === 1)); // undefines는 거짓으로 처리?

// findIndex()
console.log(numbers2);
console.log(numeber2.find(n => n % 2 === 0));
// 이 인덱스에 맞는 번호를 찾기 위함

// reduce
// reduce((누적변수 , 배열의 요소) => {}, 초기값)
// 배열을 통해서 특정 변수 하나를 만들 때
console.log(numbers2.reduce((p, n) => p + n, 0));
// 배열 안의 값을 다 더하는 함수
numbers2.reduce((sum, n) => {
    console.log("p : " + p)
    console.log("n : " + n)
    return sum + n;
},0);


// 만들려는 데이터가 기존 데이터와 길이가 다른 경우
// 초기값에 배열을 넣어줄 수 있음
console.log(numbers2.reduce((sum, n) => {
    if (n % 2 === 1){
        sum.push(n);
    }
    return sum;
}, []));
// ui를 만들어낼 수 있다?
