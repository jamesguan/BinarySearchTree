"use strict";

class BinaryNode(){
  constructor(obj, leftObj, rightObj, key){
    this.object = obj;
    this.left = leftObj;
    this.right = rightObj;
    this.key = key;
  }
}

class BinarySearchTree(){
  constructor(){
    this.root = null;
  }

  isEmpty(){
    return root === null;
  }

  insert(obj){
    insert(obj, this.root);
  }
  insert(obj, binarynode){
  }
}
