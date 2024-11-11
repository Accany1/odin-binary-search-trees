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

  function buildTree(array, start = 0, end= array.length - 1) {
    if (start > end) return null
  
    //Find mid 
    let mid = start + Math.floor((end-start)/2)
  
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
    console.log(root)
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

  const inorder = (root) => {
      if (root !== null) {
        inorder(root.left);
        console.log(root.key + " ");
        inorder(root.right);
    }
  }

  return{
    root: buildTree(newArray),
    insert,
    deleteItem,
    find
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
// tree.insert(68)
// tree.deleteItem(4)
// console.log(tree.find(9))
prettyPrint(tree.root);
