/*
Optimzed Attempt
Time Complexity = O(N) - Because we need to itrate over each and Node In A LinkedList
Space Complexity = O(1) - Space Complexity should be constant because we are not using and space in this approach
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
    loopInALinkedList(head){
        let first = head.next;
        let second = head.next.next;
        while(first !== second){
            first = first.next;
            second = second.next.next;
        }
        first = head;
        while(first !== second){
            first = first.next;
            second = second.next;
        }
        return first;
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
// linkedLL.loopInALinkedList(linkedLL.head);
// console.log(linkedLL)
/*
Steps For Optimized Solution
1 - Create Two Variables First Pointer and Second Pointer
2 - Itrate over the linked list in one pass and exit if first pointer is not equal to second pointer ( first = first.next , second = second.next.next )
3 - In first we increment first by one ( next ) and second by twice ( next.next )
4 - When we exist the loop now we reset our first pointer to the head.
5 - Again we start looping but now we move both pointers at same speed and when first !== second exit our first pointer 
will be the one from where loop originates
*/
