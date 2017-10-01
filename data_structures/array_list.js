module.exports = class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(val) {
    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    this.length--;
    const val = this.data[this.length];
    delete this.data[this.length];
    return val;
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    const val = this.data[index];
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;
    return val;
  }
};
