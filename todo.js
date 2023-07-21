const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const TODO__KEY = "todos";
let toDos = [];

todoForm.addEventListener("submit", todoSubmit);

function todoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = null;
  const todoObj = {
    Text: newTodo,
    id: Date.now(),
  };
  toDos.push(todoObj);
  paintTodo(todoObj);
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.Text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);

  todoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

function saveTodos() {
  localStorage.setItem(TODO__KEY, JSON.stringify(toDos));
}

const getTodos = localStorage.getItem(TODO__KEY);

if (getTodos) {
  const parseTodo = JSON.parse(getTodos);
  toDos = parseTodo;
  parseTodo.forEach(paintTodo);
}
