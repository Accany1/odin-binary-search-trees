function Node(data, left = null, right = null) {
    return {
        data:data,
        left:left,
        right:right
    }
}



function Tree(array) {
  let newArray

  //sorted and remove dupes
  if (Array.isArray(array)) {
    newArray = [...new Set(array.sort((a, b) => a - b))]
  } else {
    console.log("Use an array")
    return
  }

  let root = buildTree(newArray)

  function buildTree(array, start = 0, end = array.length - 1) {
    if (start > end) return null
  
    //Find mid 
    let mid = start + Math.floor((end - start) / 2)
  
    let root = Node(array[mid])
  
    root.left = buildTree(array, start, mid - 1)
  
    root.right = buildTree(array, mid +1, end)
  
    return root
  }

  function insert(value, root = this.root) {
    if (root === null){
      root = Node(value)
      return root
    }
      
    // Duplicates not allowed    
    if (root.data === value){
        return root
    }
        
    if (value < root.data){
        root.left = this.insert(value, root.left);
    } else if (value > root.data) {
        root.right = this.insert(value, root.right);
    }

    return root
  }

  function getSuccessor(root) {
    root = root.right
    while (root !== null && root.left !== null) {
      root = root.left
    }
    return root
  }

  function deleteItem(value, root = this.root) {
      if (root === null) {
        return root
      }

      if (root.data > value) {
        root.left = deleteItem(value, root.left)
      } else if (root.data < value) {
        root.right = deleteItem(value, root.right)
      } else {
        if (root.left === null) {
          return root.right
        }

        if (root.right === null) {
          return root.left
        }
        
        let succ = getSuccessor(root)
        root.data = succ.data
        root.right = deleteItem( succ.data, root.right)
      }
      return root
  }

  function find(value, root = this.root) {
    if (root === null || root.data === value) {
      return root
    }

    if (root.data < value) {
      return find(value, root.right)
    }

    return find(value, root.left)
  }

  function levelOrder(arr = [],root = this.root) {
    if (typeof arr !== 'function') {
      throw new Error('Use a callback function')
    }

    if (root === null) return

    const queue = []
    queue.push(root)

    while (queue.length > 0){
      const level = queue[0]
      arr(level, level.data)
      if (level.left !== null){
        queue.push(level.left)
      }
      if (level.right !== null){
        queue.push(level.right)
      }
      queue.shift()
    }
  }

  function inOrder(arr = [], root = this.root) {
    if (typeof arr !== 'function') {
      throw new Error('Use a callback function')
    }

    if (root === null) return

    inOrder(arr,root.left)

    arr(root)
    
    inOrder(arr,root.right)
  }

  function preOrder(arr = [], root = this.root) {
    if (typeof arr !== 'function') {
      throw new Error('Use a callback function')
    }

    if (root === null) return

    arr(root)

    preOrder(arr,root.left)
    
    preOrder(arr,root.right)
  }

  function postOrder(arr = [], root = this.root) {
    if (typeof arr !== 'function') {
      throw new Error('Use a callback function')
    }

    if (root === null) return

    postOrder(arr,root.left)
    
    postOrder(arr,root.right)

    arr(root)
  }

  function depth(node, root = this.root) {
    if (root === null) {
      return 0
    }

    if (root.data === node.data) {
      return 0
    }
    if (root.data < node.data) {
      return depth(node, root.right) + 1
    }
    if (root.data > node.data) {
      return depth(node, root.left) + 1
    } 
  }

  function height(node) {
    if (node === null) return 0

    const leftHeight = height(node.left)
    const rightHeight = height(node.right)

    return Math.max(leftHeight,rightHeight)+1
  }

  function isBalanced(root = this.root){
    if (!root) return true
    const leftHeight = height(root.left)
    const rightHeight = height(root.right)

    if (
      Math.abs(leftHeight-rightHeight) <= 1 &&
      isBalanced(root.left) &&
      isBalanced(root.right)
    ) {
      return true
    } else {
      return false
    }
  }
  
  function rebalance(root = this.root) {
    const queue = []
    inOrder(element => queue.push(element.data), root)
    this.root = buildTree(queue)
  }

  

  return{
    root,
    insert,
    deleteItem,
    find,
    levelOrder,
    inOrder,
    preOrder,
    postOrder,
    height,
    depth,
    isBalanced,
    rebalance
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
 
const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = Tree(arr);
prettyPrint(tree.root);
// console.log(tree.root)
tree.insert(68)
tree.insert(69)
tree.insert(70)
tree.insert(71)
// tree.deleteItem(4)
// const node = tree.find(1)
// console.log(tree.height(node))
// console.log(tree.depth(node))
// prettyPrint(tree.root)
// tree.levelOrder(element => console.log(element.data))
// tree.inOrder(element => console.log(element.data))
// tree.preOrder(element => console.log(element.data))
// tree.postOrder(element => console.log(element.data))
// console.log(tree.isBalanced())
tree.rebalance()
prettyPrint(tree.root);