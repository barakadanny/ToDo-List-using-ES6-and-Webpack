export default class AddToDoList {
  constructor() {
    this.list = localStorage.getItem('taskList')
      ? JSON.parse(localStorage.getItem('taskList'))
      : [];
  }

  addTask(todo) {
    this.list.push(todo);
    localStorage.setItem('taskList', JSON.stringify(this.list));
  }

  removeTask(todoID) {
    this.list = this.list.filter((todo) => todo.id !== todoID);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    localStorage.setItem('taskList', JSON.stringify(this.list));
  }

  editTask(todoId, todoDescription) {
    this.list = this.list.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, description: todoDescription };
      }
      return todo;
    });
    localStorage.setItem('taskList', JSON.stringify(this.list));
  }

  completeTask(todoId, status) {
    const selected = this.list.findIndex((element) => element.id === todoId);
    this.list[selected].completed = status;
    localStorage.setItem('taskList', JSON.stringify(this.list));
  }

  clearCompletedTask() {
    this.list = this.list.filter((todo) => !todo.completed);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    localStorage.setItem('taskList', JSON.stringify(this.list));
  }
}
