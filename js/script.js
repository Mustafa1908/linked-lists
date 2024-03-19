class LinkedList {
  constructor() {
    this.listHead = null;
  }

  prepend(value) {
    let tmp = null;
    if (this.listHead != null) tmp = this.listHead;
    this.listHead = new Node(value);
    this.listHead.nextNode = tmp;
  }

  append(value) {
    if (this.listHead == null) this.prepend(value);
    else {
      let tmp = this.listHead;
      while (tmp.nextNode != null) tmp = tmp.nextNode;
      tmp.nextNode = new Node(value);
    }
  }

  size() {
    if (this.listHead === null) {
      return "The list is empty";
    }

    let size = 1;
    let tmp = this.listHead;
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
      size++;
    }
    return size;
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
console.log(linkedList.size());
console.log(linkedList);
