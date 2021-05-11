function BinarySearchTree() {
  function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  this.root = null;
  BinarySearchTree.prototype.insert = function (key) {
    var newNode = new Node(key);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  };

  BinarySearchTree.prototype.insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  };
  //先序遍历
  BinarySearchTree.prototype.preOrderTraversal = function (handler) {
    this.preOrderTraversalNode(this.root, handler);
  };
  BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      handler(node.key);
      this.preOrderTraversalNode(node.left, handler);

      this.preOrderTraversalNode(node.right, handler);
    }
  };
}

//中序遍历
BinarySearchTree.prototype.midOrderTraversal = function (handler) {
  this.midOrderTraversalNode(this.root, handler);
};

BinarySearchTree.prototype.midOrderTraversalNode = function (node, handler) {
  if (node !== null) {
    this.midOrderTraversalNode(node.left, handler);
    handler(node.key);
    this.midOrderTraversalNode(node.right, handler);
  }
};

//后序遍历
BinarySearchTree.prototype.postOrderTraversal = function (handler) {
  this.postOrderTraversalNode(this.root, handler);
};

BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
  if (node !== null) {
    this.postOrderTraversalNode(node.left, handler);

    this.postOrderTraversalNode(node.right, handler);
    handler(node.key);
  }
};

//获取最值

BinarySearchTree.prototype.min = function () {
  var node = this.root;
  while (node.left != null) {
    node = node.left;
  }
  return node.key;
};
BinarySearchTree.prototype.max = function () {
  var node = this.root;
  while (node.right != null) {
    node = node.right;
  }
  return node.key;
};
var bts = new BinarySearchTree();
bts.insert(8);
bts.insert(10);
bts.insert(12);
bts.insert(2);
bts.insert(9);
bts.insert(6);
bts.insert(4);

var resultStr = "";
bts.midOrderTraversal((key) => {
  resultStr += key + " ";
});

console.log(resultStr);
