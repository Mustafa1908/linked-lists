class LinkedList {
  constructor() {
    this.listHead = null;
  }

  prepend(value) {
    let node = null;
    if (this.listHead != null) node = this.listHead;
    this.listHead = new Node(value);
    this.listHead.nextNode = node;
  }

  append(value) {
    if (this.listHead == null) this.prepend(value);
    else {
      let node = this.listHead;
      while (node.nextNode != null) node = node.nextNode;
      node.nextNode = new Node(value);
    }
  }

  size() {
    if (this.listHead === null) {
      return "The list is empty";
    }

    let size = 1;
    let node = this.listHead;
    while (node.nextNode != null) {
      node = node.nextNode;
      size++;
    }
    return size;
  }

  head() {
    return this.listHead;
  }

  tail() {
    let node = this.listHead;
    while (node != null) {
      if (node.nextNode === null) {
        return node;
      }

      node = node.nextNode;
    }
  }

  at(index) {
    let node = this.listHead;
    let iterator = 0;
    while (iterator != index) {
      if (node.nextNode === null) {
        return node;
      }

      node = node.nextNode;
      iterator++;
    }
    return node;
  }

  pop() {
    let node = this.listHead;
    while (node != null) {
      if (node.value === "text2") {
        node.nextNode = null;
        return this.listHead;
      }

      node = node.nextNode;
    }
  }

  contains(value) {
    let node = this.listHead;
    while (node != null) {
      if (node.value === value) {
        return true;
      }

      node = node.nextNode;
    }
    return false;
  }

  find(value) {
    if (this.listHead === null) {
      return;
    }

    let node = this.listHead;
    let iterator = 1;
    while (node != null) {
      if (node.value === value) {
        return iterator;
      }

      node = node.nextNode;
      iterator++;
    }
    return null;
  }

  toString() {
    let node = this.listHead;
    let stringifiedLinkedList = "";
    while (node !== null) {
      stringifiedLinkedList += `( ${node.value} ) -> `;
      node = node.nextNode;
    }
    return (stringifiedLinkedList += "null");
  }
}

class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}

let linkedList = new LinkedList();

linkedList.append("text1");
linkedList.append("text2");
linkedList.append("text3");

console.log(linkedList.size());
console.log(linkedList.head());
console.log(linkedList.tail());
console.log(linkedList.at(0));
console.log(linkedList.pop());
console.log(linkedList.contains("text2"));
console.log(linkedList.find("text2"));
console.log(linkedList.toString());
console.log(linkedList);
