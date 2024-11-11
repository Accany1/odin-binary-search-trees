function Node(data, left = null, right = null) {
    return {
        data:data,
        left:left,
        right:right
    }
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

function Tree(array) {
  let newArray

  //sorted and remove dupes
  if (Array.isArray(array)) {
    newArray = [...new Set(array.sort((a, b) => a - b))]
  } else {
    console.log("Use an array")
    return
  }

  return buildTree(newArray)
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
const root = Tree(arr);
prettyPrint(root);