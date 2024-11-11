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