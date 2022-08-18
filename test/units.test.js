import AddToDoList from '../src/addRemoveTask';

const todoList = new AddToDoList();

describe('Add and Remove a task', () => {
  test('Adding a new Item', () => {
    const todo = {
      id: 1,
      description: 'Learn React',
      completed: false,
    };

    todoList.addTask(todo);
    expect(todoList.list.length).toBe(1);
  });

  test('Removing an Item', () => {
    const todo = {
      id: 1,
      description: 'Learn React',
      completed: false,
    };

    todoList.addTask(todo);
    todoList.removeTask(1);
    expect(todoList.list.length).toBe(0);
  });
});
