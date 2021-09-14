function getMin() {
    var current = this.root
    while(current.left !== null) {
        current = current.left
    }
    return current.data
}

function find(data) {
    var current = this.root
    while(current !== null) {
        if(current.data === data) {
            return current
        } else if (current.data > data) {
            current = current.left
        } else {
            current = current.right
        }
    }
}

// 删除子节点
function remove(data) {
    root = removeData(this.root, data)
}
function removeData(node, data) {
    if (node === null) {
        return null
    }
    if (node === data.data) {
        // 没有子节点的节点
        if (node.left === null && node.right === null) {
            return null
        }
        if (node.left === null) {
            return node.right
        }
        if (node.right === null) {
            return node.left
        }
        // 有两个子节点的节点
        var tempNode = getSmallest(node.right)
        node.data = tempNode.data
        node.right = removeData(node.right, tempNode.data)
        return node
    }
    else if (data < node.data) {
        node.left = removeData(node.left, data)
        return node
    } 
    else {
        node.right = removeData(node.right, data)
        return node
    }
}