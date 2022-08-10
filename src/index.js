import './style.css';

// todo list object
const todoList = [
  {
    id: 1,
    completed: false,
    description: 'Learn React',
  },
  {
    id: 2,
    completed: false,
    description: 'Learn Redux',
  },
  {
    id: 3,
    completed: false,
    description: 'Learn React Router',
  },
];

const todoListElement = document.querySelector('.todo-list');

// generate dynamic todo list
for (let i = 0; i < todoList.length; i += 1) {
  const todoD = todoList[i];

  const todoItem = document.createElement('li');
  todoItem.classList.add('todo-item');

  todoItem.innerHTML = `
    <div class="data">
        <input type="checkbox" id="todo">
        <label for="todo-1">${todoD.description}</label>
    </div>
    <span><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span>
  `;
  todoListElement.appendChild(todoItem);
}
