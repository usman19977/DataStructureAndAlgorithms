
/*
Optimze Attempt
Time Complexity = O(N) - Because we have to g through over the whole list;
Space Complexity = O(1) - Space Complexity should be constant because we are not using any extra space in this approach
*/
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null
    }
    add(value){
        let newNode = new Node(value);
        if(!this.head){ this.head = newNode; return}
        else
        {   let current  = this.head;
            while(current.next) {
                current = current.next;

            }
            current.next = newNode;
        }

    }

    reverse(head) {
        if(head === null || head.next === null) {
            return head;
        }
        let newHead = this.reverse(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    }

    removeDublicatesFromSinglyLinkedListSorted(head){
            if(head === null || head.next === null) return head;
            let current = head;
            while(current){
                let tempNode = current.next;
                while(tempNode !== null && tempNode.value === current.value) {
                    tempNode = tempNode.next;
                } 
                current.next = tempNode;
                current  = tempNode;
            }
            return head;
    }
}
let linkedLL = new LinkedList();
linkedLL.add(1);
linkedLL.add(2);
linkedLL.add(3);
linkedLL.add(4);
linkedLL.add(5);
linkedLL.add(5);
linkedLL.add(5);
linkedLL.add(5);
linkedLL.add(7);
// linkedLL.reverse(linkedLL.head)
// linkedLL.removeDublicatesFromSinglyLinkedListSorted(linkedLL.head);



// console.log(linkedLL.head.next.next.next);

/*
Steps For Optimized Solution
1 - We start itrating the linkedlist we then which itrating the main list. 
2 - We define a variable which is next to the current node as distinct variable.
3 - Then we check while this variable not null and its value is also not equals to where we are at in the maine itrator.
4 - If thats the case then we will add incrementing our distinct variable .
5 - Else thats the case we will move our current.next to the temp distinct variable and by pointing this we overlap all the
repeating nodes till than and we reach the end .
**/
