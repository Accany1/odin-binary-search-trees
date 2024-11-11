import { Tree } from "./tree.js";
import { prettyPrint } from "./tree.js";

// Create a binary search tree from an array of random numbers < 100. You can create a function that returns an array of random numbers every time you call it if you wish.
const arrayCreator = (iter) => {
    let arr = []
    for (let i=0; i<iter; i++) {
        arr.push(Math.floor(Math.random()*100))
    }
    return arr
}

const arr = arrayCreator(29)
const tree = Tree(arr)
prettyPrint(tree.root)
// Confirm that the tree is balanced by calling isBalanced.
console.log(tree.isBalanced())
// Print out all elements in level, pre, post, and in order.
tree.levelOrder(element => console.log(element.data))
tree.inOrder(element => console.log(element.data))
tree.preOrder(element => console.log(element.data))
tree.postOrder(element => console.log(element.data))


// Unbalance the tree by adding several numbers > 100.
tree.insert(68)
tree.insert(69)
tree.insert(70)
tree.insert(71)

// Confirm that the tree is unbalanced by calling isBalanced.
console.log(tree.isBalanced())

//Balance the tree by calling rebalance.
tree.rebalance()

// Confirm that the tree is balanced by calling isBalanced.
console.log(tree.isBalanced())

//Print out all elements in level, pre, post, and in order.
tree.levelOrder(element => console.log(element.data))
tree.inOrder(element => console.log(element.data))
tree.preOrder(element => console.log(element.data))
tree.postOrder(element => console.log(element.data))

// tree.deleteItem(4)
// const node = tree.find(1)
// console.log(tree.height(node))
// console.log(tree.depth(node))
// prettyPrint(tree.root)



prettyPrint(tree.root);