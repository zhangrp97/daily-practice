var result = []

var aa = function(arr) {
    arr.forEach(item => {
        if (Array.isArray(item)) {
            // result.push(...aa(item))
            aa(item)
        } else {
            result.push(item)
        }
    })
    return result
};
// var res = aa([1,[2,[3]]])
// console.log(res)
var mockTree = [
	{
		id: 1,
		children: [
            {
                id: 2,
                children: [
                    {
                        id: 3,
                        children: []
                    }
                ]
            },
            {
				id: 6, 
				children: []
			}
        ]
	},
    {
		id: 4, 
		children: [
            {
                id: 5,
                children: []
            }
        ]
	}
];
var flatTree = function(childrenArr) {
    childrenArr.forEach(item => {
        result.push(item)
        if (item.children.length > 0) {
            flatTree(item.children)
        }
    })
    return result
}
var treeData = flatTree(mockTree)
console.log(treeData)