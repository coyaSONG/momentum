const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(strToDo) {
  const li = document.createElement("li");
  li.id = strToDo.id;
  const span = document.createElement("span");
  span.innerText = strToDo.text;

  const img = document.createElement("img");
  img.src = "img/delete.png";
  img.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(img);
  todoList.appendChild(li);
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const getSaveToDos = localStorage.getItem(TODOS_KEY);

if (getSaveToDos) {
  const parsedToDos = JSON.parse(getSaveToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
