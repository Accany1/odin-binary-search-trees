import { Tree } from "./tree.js";
import { prettyPrint } from "./tree.js";

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
console.log(tree.isBalanced())
// console.log(tree.root)
// tree.insert(68)
// tree.insert(69)
// tree.insert(70)
// tree.insert(71)
// tree.deleteItem(4)
// const node = tree.find(1)
// console.log(tree.height(node))
// console.log(tree.depth(node))
// prettyPrint(tree.root)
// tree.levelOrder(element => console.log(element.data))
// tree.inOrder(element => console.log(element.data))
// tree.preOrder(element => console.log(element.data))
// tree.postOrder(element => console.log(element.data))

// tree.rebalance()
// prettyPrint(tree.root);