// Linked List 實作 Stack
// 需含 push、pop、size method
// stack.push(1)
// stack.push(2) 
// stack.push(3) 
// stack.pop() // 3 
// stack.size() // 2 

// JS 沒有內建方法，用物件來模擬 Linked List 來實作 Stack
// 定義 node，要有 data & next
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

// Linked List 實作 Stack，定義 LinkedList
class LinkedList {
    constructor() {
        this.head = null
        // this.tail = null
        this.length = 0
    }
    // push，新增 node (最上面)
    push(data) {
        let newNode = new Node(data)
        if(!this.head) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next !== null) {
                current = current.next
            }
            current.next = newNode
        }
        this.length += 1
    }

    // pop，移除最上面的 data
    Node = (id) => {
        if(id<0 || id >= this.length) {
            return null
        }
        let current = this.head
        let currentID = 0
        while (currentID < id) {
            currentID += 1
            current = current.next
        }
        return current
    }

    pop = () => {
        const prevNode = this.Node(this.length - 2);
        const delNode = prevNode.next;
        const nextNode = delNode.next;
        prevNode.next = nextNode
        this.length -= 1;
        return delNode.value;
      }
    
    // size，回傳長度
    size = () => {
        return this.length
    }
}

const Stack = new LinkedList()

