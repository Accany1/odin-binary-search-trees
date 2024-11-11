function Node(input) {
    return {
        data:input,
        left:null,
        right:null
    }
}

function Tree(root) {
    if (root === null) return
    console.log(root.data)
    Tree(root.left)
    Tree(root.right)
}

function buildTreeRecur(array, start, end) {
    if (start > end) return null

    //Find mid 
    let mid = start + Math.floor((end-start)/2)

    let root = Node(array[mid])

    root.left = buildTreeRecur(array, start, mid - 1)

    root.right = buildTreeRecur(array, mid +1, end)

    return root
}

function buildTree(array) {
  return buildTreeRecur(array, 0, array.length - 1)
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
 
const arr = [1, 2, 3, 4];
const root = buildTree(arr);
prettyPrint(root);