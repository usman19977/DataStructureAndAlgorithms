class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }      
}

class Tree{
    constructor(){
        this.root = null;
    }
    insert(node){
        let newNode = new TreeNode(node);

            if(!this.root){
                this.root = newNode;
                return ;
            }
            else {
                let current =  this.root;
                while(true){
                if(node < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return ; 
                    }   
                    else {
                        current = current.left
                    }
                }
                else if(node > current.value) {
                    if(current.right === null){
                        current.right = newNode;
                        return ;
                    }
                    else {
                        current = current.right
                    }
                }
                else if(node === current.value) {
                    return ;
                }
            }
        }
        
    }
}

let tree = new Tree();
tree.insert(4);tree.insert(2);tree.insert(7);tree.insert(1);tree.insert(3);tree.insert(6);tree.insert(9);

/*
Depth First Search Attempt
  Time Complexity = O(N) - Because we need to itrate over each and every node in tree
 Space Complexity = O(N) - Space Complexity should be Linear because we are using stack as DFS recursion;
*/
function invertBinaryTreeDFS(treeRoot){
    if(treeRoot === null) return treeRoot;
    let left = invertBinaryTree(treeRoot.left);
    let right = invertBinaryTree(treeRoot.right);
    treeRoot.right = left;
    treeRoot.left = right;

    return treeRoot;

}


/*
Breath First Search Attempt
 Time Complexity = O(N) - Because we need to itrate over each and every node in tree
 Space Complexity = O(W) - Space Complexity should be Linear because we are using queue as BFS recursion;
*/

function invertBinaryTreeBFS(treeRoot){
    let queue = [];
   
    queue.push(treeRoot);
    while(queue.length){
        let poppedNode = queue.shift();
        let left = poppedNode.left;
        let right = poppedNode.right;

        poppedNode.left = right;
        poppedNode.right = left;

        if(poppedNode.left) queue.push(left);
        if(poppedNode.right ) queue.push(right);

    }
    return treeRoot;
}

// console.log(invertBinaryTreeDFS(tree.root));
// console.log(invertBinaryTreeBFS(tree.root));


