//Implementation Of Linked List//
class Node{
    constructor(value = 0){
        this.value = value;
        this.next = null
    }
}
class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }  
    push(val){
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head; 
        }
        else {
            this.tail.next  = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    

}

let list1 = new LinkedList();
let list2 = new LinkedList();

//Adding Values To Both LinkedLists//
list1.push(10) , list2.push(20) , list1.push(30) ,list1.push(40) , list2.push(50)
list1.push(60) , list2.push(70) , list1.push(80) ,list1.push(90) , list2.push(100)


function mergeTwoSortedLists(list1,list2){
   
    if(list1 === null) return list2;
    if(list2 === null) return list1;
    if(list1.head.value <= list2.head.value){
        list1.next = mergeTwoSortedLists(list1.head.next ,list2.head);
        return list1;
    }
    else {
        list2.next = mergeTwoSortedLists(list1.head,list2.head.next);
        return list2;
    }

}

console.log(mergeTwoSortedLists(list1,list2));

