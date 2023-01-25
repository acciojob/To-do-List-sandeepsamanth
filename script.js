//your code here

const input = document.querySelector('#newTodoInput');
const button = document.querySelector('#addTodoBtn');
const todoList = document.querySelector('#todoList');

button.addEventListener('click', function() {
  if(input.value.trim() != ""){
    const newTodo = document.createElement('li');
    newTodo.innerText = input.value;
    todoList.appendChild(newTodo);
    input.value = "";
  }
});
