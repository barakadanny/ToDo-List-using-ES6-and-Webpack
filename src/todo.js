class todo {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.id = todo.nextId++;
    console.log('hello from todo');
  }
}
