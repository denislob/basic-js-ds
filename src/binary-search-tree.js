const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

    let activeNode = this.rootNode;

    while (activeNode) {
      if (newNode.data < activeNode.data) {
          if (!activeNode.left) {
            activeNode.left = newNode;
            return;
          }
          activeNode = activeNode.left;
      } else {
          if (!activeNode.right) {
            activeNode.right = newNode;
            return;
          }
          activeNode = activeNode.right;
      }
    }  
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let activeNode = this.rootNode;
    while (activeNode.data !== data) {
      if (data < activeNode.data) {
        activeNode = activeNode.left;
      } else {
        activeNode = activeNode.right;
      }
      if (activeNode === null) return null;
    }
    return activeNode;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let activeNode = this.rootNode;
    while (activeNode.left !== null) {
      activeNode = activeNode.left;
    }
    return activeNode.data;
  }

  max() {
    let activeNode = this.rootNode;
    while (activeNode.right !== null) {
      activeNode = activeNode.right;
    }
    return activeNode.data;
  }
}

module.exports = {
  BinarySearchTree
};