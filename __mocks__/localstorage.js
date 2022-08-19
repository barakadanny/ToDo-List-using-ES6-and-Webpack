class localStorage {
  constructor() {
    this.TaskList = {};
  }

  clear() {
    this.TaskList = {};
  }

  getItem(key) {
    return this.TaskList[key];
  }

  setItem(key, value) {
    this.TaskList[key] = value;
  }

  removeItem(key) {
    delete this.TaskList[key];
  }
}

const newItem = new localStorage();

module.exports = newItem;
