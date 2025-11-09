const { NotImplementedError } = require('../lib/errors');
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
    
    if (this.rootNode === null) {
      this.rootNode = newNode;
      return;
    }
    let activeNode = this.rootNode;

    while (activeNode) {
      if (newNode.data < activeNode.data) {
        if (activeNode.left === null) {
          activeNode.left = newNode;
          return;   
        }
        activeNode = activeNode.left;
      } else {
        if (activeNode.right === null) {
          activeNode.right = newNode;
          return;
        }
        activeNode = activeNode.right;
      }
    }
  }

  find(data) {
    let activeNode = this.rootNode;
    while (activeNode.data !== data) {
      if (data < activeNode.data) {
        activeNode = activeNode.left
      } else {
        activeNode = activeNode.right;
      }
      if (activeNode === null) return null;
    }    
    return activeNode;
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  min() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  max() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }
}

module.exports = {
  BinarySearchTree
};