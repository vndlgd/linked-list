function LinkedList() {
  // TODO: implement the following functions
  let headNode = Node();

  // append(value) adds a new node containing value to the end of the list
  function append(value) {
    // if headNode is null, we add our first node to the linked list
    if (headNode.value === null) {
      headNode.value = value;
      return; // exit the function
    }
    // else, we traverse list until we are at the very end and then add node
    let tmp = headNode;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }

    let newNode = Node(value, null);
    tmp.nextNode = newNode;
  }

  // prepend(value) adds a new node containing value to the start of the list
  function prepend(value) {}

  // size returns the total number of nodes in the list
  function size() {
    let count = 0;
    if (headNode.value === null) {
      return 0;
    } else {
      count = 1;
      let tmp = headNode;
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
        count += 1;
      }
    }

    return count;
  }

  // head returns the first node in the list
  function head() {}

  // tail returns the last node in the list
  function tail() {}

  // at(index) returns the node at the given index
  function at(index) {}

  // pop removes the last element from the list
  function pop() {}

  // contains(value) returns true if the passed in value is in the list and otherwise returns false.
  function contains(value) {}

  // find(value) returns the index of the node containing value, or null if not found.
  function find(value) {}

  // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  function toString() {}

  // insertAt(value, index) that inserts a new node with the provided value at the given index.
  function insertAt(value, index) {}

  // removeAt(index) that removes the node at the given index.
  function removeAt(index) {}

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

function Node(value = null, nextNode = null) {
  // write code here
  return { value, nextNode };
}

let linkedlist = LinkedList();
linkedlist.append(1);
linkedlist.append(2);
linkedlist.append(3);

console.log(linkedlist.size());
