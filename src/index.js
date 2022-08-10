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

    // check the value of completed true or false
    if (newTodo.completed === true) {
      // const completed = document.createElement('li');
      // completed.classList.add('completed');
      // completed.innerHTML = `<input type="checkbox" checked> ${newTodo.description} <button class="delete">Delete</button>`;
      // lib.appendChild(completed);
      console.log('completed');
    } else {
      // const todo = document.createElement('li');
      // todo.innerHTML = `<input type="checkbox"> ${newTodo.description} <button class="delete">Delete</button>`;
      // lib.appendChild(todo);
      console.log('not completed');
    }

    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    todoItem.innerHTML = `
    <div class="data">
        <input type="checkbox" id="todo-stat">
        <label for="todo-1" data-id="${newTodo.id}" data-status="${newTodo.completed}" class="data-desc">${newTodo.description}</label>
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

// select all checkboxes
const checkboxes = document.querySelectorAll('#todo-stat');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    const todo = e.target.nextElementSibling;
    const status = todo.getAttribute('data-status');
    const TodoID = todo.getAttribute('data-id');
    // todo.classList.toggle('completed');
    todo.classList.toggle('completed');

    // find element in the localStorage
    const todos = JSON.parse(localStorage.getItem('todos'));
    // todos.forEach((todoI) => {
    //   const ids = todoI.id;
    // });
    let idObj = todos.find((o) => o.id === parseInt(TodoID, 10));
    const statUpdate = idObj.completed;

    // update todo completed in localStorage
    idObj.completed = statUpdate === true ? false : true;
    localStorage.setItem('todos', JSON.stringify(todos));
    // console.log(statUpdate);
  });
});
