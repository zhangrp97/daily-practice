function Node(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
    this.show = show
}
function show() {
    return this.show
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
}
function inOrder(data) {
    var n = new Node(data, null, null);
    if (this.root === null) {
        this.root = n
    } else {
        var current = this.root;
        var parent;
        while(true) {
            parent = current;
            if (data < parent.data) {
                current = current.left;  // 如果这个节点比当前节点小，current指向当前节点的左节点
                if (current === null) {
                    // 如果parent没有左节点
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current === null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

// 中序
function midOrder(node) {
    if (node !== null) {
        midOrder(node.left) 
        log(node.show() + "")
        midOrder(node.right)
    }
}