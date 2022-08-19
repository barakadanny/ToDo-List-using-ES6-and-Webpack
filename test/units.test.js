import AddToDoList from '../src/addRemoveTask';

const newItem = require('../__mocks__/localstorage.js');

global.localStorage = newItem;

const todoList = new AddToDoList();

describe('Add and Remove a task', () => {
  test('Clearing completed Items', () => {
    const todo = {
      id: 1,
      description: 'Learn React',
      completed: false,
    };

    todoList.addTask(todo);
    todoList.completeTask(1, true);
    todoList.clearCompletedTask();
    expect(todoList.list.length).toBe(0);
  });

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

  test('Editing an Item', () => {
    const todo = {
      id: 1,
      description: 'Learn React',
      completed: false,
    };

    todoList.addTask(todo);
    todoList.editTask(1, 'Learn React Native');
    expect(todoList.list[0].description).toBe('Learn React Native');
  });

  test('Completing an Item', () => {
    const todo = {
      id: 1,
      description: 'Learn React',
      completed: false,
    };

    todoList.addTask(todo);
    todoList.completeTask(1, true);
    expect(todoList.list[0].completed).toBe(true);
  });
});
