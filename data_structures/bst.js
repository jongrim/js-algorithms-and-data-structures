module.exports = class Tree {
  constructor() {
    this.root = null;
  }

  add(val) {
    if (!this.root) {
      this.root = new Node(val);
    } else {
      let search = true;
      let node = this.root;
      while (search) {
        if (val <= node.value) {
          if (node.left) {
            node = node.left;
          } else {
            node.left = new Node(val);
            search = false;
          }
        } else {
          if (node.right) {
            node = node.right;
          } else {
            node.right = new Node(val);
            search = false;
          }
        }
      }
    }
  }

  toObject() {
    return this.root;
  }
};

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
