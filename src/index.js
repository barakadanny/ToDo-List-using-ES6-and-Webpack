import './style.css';
import displayTasks from './populateTaskList.js';
import AddToDoList from './addRemoveTask.js';

const taskList = new AddToDoList();
displayTasks(taskList);

const addTodoBtn = document.getElementById('addTask');
addTodoBtn.addEventListener('click', () => {
  const id = `id${Math.random().toString(16).slice(2)}`;
  const description = document.getElementById('task').value.trim();
  const completed = false;
  const index = taskList.list.length + 1;

  const newTask = {
    id,
    description,
    completed,
    index,
  };
  if (description) {
    taskList.addTask(newTask);
    displayTasks(taskList);
  }
});

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
  taskList.clearCompletedTask();
  displayTasks(taskList);
});

const refreshPage = document.getElementById('refreshBtn');
refreshPage.addEventListener('click', () => {
  window.location.reload();
});
