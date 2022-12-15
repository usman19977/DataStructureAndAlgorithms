/*
Optimze Attempt
Time Complexity = O(NlogN) - Because we will break it down to NlogN as we took advantage of BTS properties
Space Complexity = O(H) - Space Complexity should height of BST as we need to traverse till leaf
*/
class Node {
  constructor(value) {
    this.left = null;
    this.value = value;
    this.right = null;
  }
}
class Tree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) this.root = newNode;
    else {
      let root = this.root;
      while (true) {
        if (value < root.value) {
          if (root.left === null) {
            root.left = newNode;
            break;
          } else {
            root = root.left;
          }
        } else if (value > root.value) {
          if (root.right === null) {
            root.right = newNode;
            break;
          } else {
            root = root.right;
          }
        } else if (value === root.value) {
          return;
        }
      }
    }
  }

  findClosest(target, tree = this.root, closest = tree.value) {
    if (tree === null) return closest;
    if (Math.abs(tree.value - target) < Math.abs(closest - target)) {
      closest = tree.value;
    }

    if (target < tree.value) {
      return this.findClosest(tree.left, target, closest);
    } else if (target > tree.value) {
      return this.findClosest(tree.right, target, closest);
    } else {
      return closest;
    }
  }
}

// let newTree = new Tree();
// newTree.insert(3);
// newTree.insert(1);
// newTree.insert(2);

// newTree.insert(6);

// newTree.insert(9);
// newTree.insert(7);
// newTree.insert(990);

// console.log(newTree.findClosest(990));

/*
Steps For Optimized Solution
1 - We define a function findClosest in Tree Class with variable defined as Running Current Cloest as this.root.value in function params
2 - Then we define some of our basecases if tree.value is null return closest value
3 - We also check if (tree.value [ root at that time ] - target [ we had provided in Params ]) < (target - closest) 
If this is true then update the closest as tree.value
4 - Now we take advantage of BST property if target is less than tree.left then we should recursively call the function and update the root param as tree.left
same goes for right if target is greater than tree.right call the function recursely on tree.right
6 - If any of the conditions are not true then Else return the closest

**/
