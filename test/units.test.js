import AddToDoList from '../src/addRemoveTask';

const todoList = new AddToDoList();

describe('AddToDoList', () => {
  test('Adding a new Item', () => {
    const todo = {
      id: 1,
      description: 'Learn React',
      completed: false,
    };

    todoList.addTask(todo);
    expect(todoList.list.length).toBe(1);
  });
});
