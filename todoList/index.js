let todoList = localStorage.getItem("todoList") 
                ? JSON.parse(localStorage.getItem("todoList")) : [];
// null이나 undefined 들어가면 에러 남

// JSON.stringfy(todoList) => todoList 변수에 담긴 배열 요소를 String(문자열)로 변환
// JSON.parse(localStorage.getItem("todoList")) => localStorage.getItem("todoList")에 저장된 String 데이터를 다시 배열 요소로 변환
// localStorage.setItem("todoList", JSON.stringfy(todoList)); => localStorage 영역에 key, value 형태로 데이터 저장
// localStorage.setItem("todoList") => localStorage 영역에 데이터를 key로 불러오는 것

window.onload = function(){
    drawTodoList();
}

// 1. innerHTML로 바로 넣어주기
// 할 일을 ul 태그에 넣어주기
// function addTodo(){
//     // 그냥 더하기
//     // input value와 ul 태그를 가져와서 넣어줄 것

//     // input 요소 가져오기
//     const searchInput = document.querySelector("#search-bar input")

//     // ul 요소 가져오기
//     const todoUl = document.querySelector(".todo-list");

//     todoUl.innerHTML += `<li>${searchInput.value}
//                         <div class="todo-remove-btn"><i class="fa-solid fa-xmark"></i></div></li>`
// }

// 2. 함수 분리
// 할 일을 todoList에 넣어주기
function addTodo(){
    const searchInput = document.querySelector("#search-bar input")
    todoList.push({
        title : searchInput.value,
        date : new Date().getTime(),
        // getTime으로 넣어주면 초로 나옴
        // status: "doing" // -> 끝난 경우 done으로 바꿀 것
        isDone: false // 이래야 조건 처리가 쉬움
    });

    searchInput.value = "";
    localStorage.setItem("todoList", JSON.stringify(todoList));
    drawTodoList();
}

// 할 일 목록을 ui에 그려주기
// function drawTodoList(){
//     const todoUl = document.querySelector(".todo-list");
//     toduUl.innerHTML = ""; // 혹은 jquery empty 함수로 비워주기

//     for(let todo of todoList){
//         todoUl.innerHTML += `<li>${todo.title}
//                         <div class="todo-remove-btn"><i class="fa-solid fa-xmark"></i></div></li>`
//     }
// }
// -> 그냥 전체를 다 비워주고 다시 생성해주는 방식

// 3. 스크립트로 만들어서 넣어주는 방식
function drawTodoList(){

    // const removeTodo = function(){

    // } 와 똑같음
    // 바깥에 만들어주면 메모리가 계속해서 window 안에 남아있음
    // 하지만 이 함수 안에 만들어주면 이 함수가 실행될 때에만 생성되고 해제됨
    // function removeTodo(){

    // }

    const removeTodo = function(removeTodo){
        todoList = todoList.filter(t => (removeTodo.date !== t.date && removeTodo.title !== t.title)) // 반환값이 true인 데이터만 남기고 전부 삭제된 배열을 반환
        localStorage.setItem("todoList", JSON.stringify(todoList));
        drawTodoList();
    }

    const todoUl = document.querySelector(".todo-list");
    toduUl.innerHTML = ""; 
    // 혹은 jquery empty 함수로 비워주기

    // 끝난 일 아직 안 끝난 일
    const toggleStatus = function(targetTodo){
        todoList = todoList.map(t => {
            if (t.date === targetTodo.date){
                t.isDone = !t.isDone;
            }
            return t;
        })
        // 바뀌는 하나의 내용만 바꾸고 나머지는 유지하고 싶음
        localStorage.setItem("todoList", JSON.stringify(todoList));
        drawTodoList();
    }

    for(let todo of todoList){
        const todoLi = document.createElement('li'); // <li><li>
        todoLi.className = todo.isDone ? "done" : "";
        todoLi.innerHTML = todo.title; // <li>${todo.title}</li>
        todoUl.appendChild(todoLi); // todoUl.innerHTML += `<li>${todo.title}
        // todoUl 뒤에 innerHTML로 넣어줄게

        const removeBtn = document.createElement('div');
        removeBtn.className = 'todo-remove-btn';
        removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        todoLi.appendChild(removeBtn);

        // todoLi.onclick = function(ev){
        //     todo.
        // }
       
        // 여기에 ev를 넣어줄 경우 i 태그로 넘어올 수도 있음
        removeBtn.onclick = function(ev){
            // todoList에서 데이터 지우기
            // ul에서 todoLi 지우기
            removeTodo(todo);
            // // 지우는 법
            // // todoLi
            // // 이렇게 그냥 가져와도 되고 this로 가져와도 됨
            // this.parentNode.remove();

            // 지우지 않고 재생성 하는 법

        }
    }
}