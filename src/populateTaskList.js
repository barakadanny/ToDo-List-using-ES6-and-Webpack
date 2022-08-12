const displayTasks = (taskList) => {
  const sortedTask = taskList.list.sort((a, b) => a.index - b.index);
  const taskContainer = document.getElementById('task-container');
  let taskHtml = '';
  sortedTask.forEach(({ completed, description, id }) => {
    const checkedTodo = completed ? 'checked' : '';
    const checkClass = completed ? 'checked' : '';
    taskHtml += `  <div class="todo-item">
                        <div>
                            <input id="${id}" class="todo-check" type="checkbox" ${checkedTodo} />
                            <input id="${id}" class="todo-edit ${checkClass}" type="text" value="${description}" />
                        </div>
                        <button id="${id}" class="remove-btn"><i id="remove" class="fa-solid fa-trash-can fa-lg"></i></button>
                    </div>
    `;
  });
  taskContainer.innerHTML = taskHtml;

  const removeBtn = document.querySelectorAll('.remove-btn');
  removeBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const element = btn.parentNode;
      element.remove();
      taskList.removeTask(e.target.parentNode.id);
    });
  });

  const taskContent = document.querySelectorAll('.todo-edit');
  taskContent.forEach((todo) => {
    todo.addEventListener('focusin', (e) => {
      e.target.parentNode.parentNode.style.background = 'rgb(241,240,204)';
      e.target.style.background = 'rgb(241,240,204)';
    });
    todo.addEventListener('focusout', (e) => {
      e.target.style.background = 'white';
      e.target.parentNode.parentNode.style.background = 'white';
    });
    todo.addEventListener('input', (e) => {
      taskList.editTask(e.target.id, e.target.value);
    });
  });

  const taskCheck = document.querySelectorAll('.todo-check');
  taskCheck.forEach((todo) => {
    todo.addEventListener('change', (e) => {
      const { id } = e.target;
      taskList.completeTask(id, e.target.checked);
      e.target.parentNode.lastElementChild.classList.toggle('checked');
    });
  });
};

export default displayTasks;
