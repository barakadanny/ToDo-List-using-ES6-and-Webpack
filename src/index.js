import './style.css';

class todo {
  constructor(description) {
    this.id = todo.nextId++;
    this.description = description;
    this.completed = false;
  }
}

todo.nextId = 0;
const todolist = [];

class Displaytodo {
  // add todo
  static addTodo(newTodo, index) {
    const lib = document.querySelector('.todo-list');
    if (!localStorage.getItem('todos')) {
      const ErrorM = document.createElement('p');
      ErrorM.innerHTML = 'No todos to display';
      lib.appendChild(ErrorM);
    }

    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    todoItem.innerHTML = `
    <div class="data">
        <input  type="checkbox" id="todo-stat">
        <label for="todo-1" class="data-desc">${newTodo.description}</label>
    </div>
    <span><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span>
  `;
    lib.appendChild(todoItem);

    todolist.push(newTodo);
  }

  // set localStorage
  static setLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todolist));
  }

  // fetch get localStorage
  static getLocalStorage() {
    if (localStorage.getItem('todos')) {
      const todos = JSON.parse(localStorage.getItem('todos'));
      todos.forEach((todoI, index) => {
        const newTodo = new todo(todoI.description);
        Displaytodo.addTodo(newTodo, index);
      });
    } else {
      localStorage.setItem('todos', JSON.stringify(todolist));
    }
  }
}

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('.todo-desc').value;
  if (input !== '') {
    const newTodo = new todo(input);
    Displaytodo.addTodo(newTodo);
    Displaytodo.setLocalStorage();
    input.value = '';
  }
});

Displaytodo.getLocalStorage();

// const checkbox = document.querySelector('#todo-stat');
// checkbox.addEventListener('change', (e) => {
//   // const todo = e.target.parentNode.parentNode;
//   // todo.classList.toggle('completed');
//   console.log('checkbox cliqued');
// });

// select all checkboxes
const checkboxes = document.querySelectorAll('#todo-stat');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    const todo = e.target.nextElementSibling;
    // todo.classList.toggle('completed');
    todo.classList.toggle('completed');

    console.log(todo);
  });
});
