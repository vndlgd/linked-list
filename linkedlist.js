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
    let tmp = headNode; // all tmp variables are pointers
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }

    let newNode = Node(value, null);
    tmp.nextNode = newNode;
  }

  // prepend(value) adds a new node containing value to the start of the list
  function prepend(value) {
    if (headNode.value === null) {
      headNode.value = value;
      return; // exit the function
    }

    let tmp = headNode;
    let newNode = Node(value, tmp);
    headNode = newNode;
  }

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
  function head() {
    return headNode;
  }

  // tail returns the last node in the list
  function tail() {
    if (headNode.value === null) {
      return null;
    } else {
      let tmp = headNode;

      // traverse to the very last node
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
      }

      return tmp;
    }
  }

  // at(index) returns the node at the given index
  function at(index) {
    let count = 0;
    let listSize = size();
    let tailNode = tail();
    if (index >= listSize) {
      return null;
    }

    if (index === 0) {
      return headNode;
    } else if (index === size - 1) {
      return tailNode;
    } else {
      let tmp = headNode;

      while (tmp.nextNode !== null) {
        count += 1;
        tmp = tmp.nextNode;
        if (count === index) {
          return tmp;
        }
      }
    }
  }

  // pop removes the last element from the list
  function pop() {
    // if list is empty, do nothing
    if (headNode.value === null) {
      return;
    }
    let tmp = headNode;

    // tmp next next node checks for the 2nd to last element
    // sets its next node to null so that last node is removed from the list
    while (tmp.nextNode.nextNode !== null) {
      tmp = tmp.nextNode;
    }

    tmp.nextNode = null;
  }

  // contains(value) returns true if the passed in value is in the list and otherwise returns false.
  function contains(value) {
    // if linked list is empty
    if (headNode.value === null) {
      return false;
    } else {
      // check if value is in the head node
      if (headNode.value === value) {
        return true;
      }

      let tmp = headNode;

      // or else, lets traverse the list to see if it contains that value
      while (tmp.nextNode !== null) {
        if (tmp.value === value) {
          return true;
        } else {
          tmp = tmp.nextNode;
        }
      }
    }

    let tailNode = tail();
    if (tailNode.value === value) {
      return true;
    }

    return false;
  }

  // find(value) returns the index of the node containing value, or null if not found.
  function find(value) {
    // if value not found in list, don't bother with finding index
    if (contains(value) === false) {
      return null;
    }

    // if value is at head
    if (headNode.value === value) {
      return 0;
    }

    let tmp = headNode;
    let index = 0;

    // else, traverse list to find
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
      index += 1;
      if (tmp.value === value) {
        return index;
      }
    }

    // if value is at last index
    let tailNode = tail();
    if (tailNode.value === value) {
      return true;
    }
  }

  // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  function toString() {
    let stringOutput = '';
    let listSize = size();

    if (listSize === 0) {
      return 'null';
    } else {
      stringOutput += `${headNode.value} -> `;
      let tmp = headNode;
      let tailNode = tail();

      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
        stringOutput += ` ${tmp.value} -> `;
      }

      stringOutput += `${tailNode.nextNode}`;

      console.log(stringOutput);
    }
  }

  // insertAt(value, index) that inserts a new node with the provided value at the given index.
  function insertAt(value, index) {
    if (headNode.value === null) {
    }
  }

  // removeAt(index) that removes the node at the given index.
  function removeAt(index) {
    const listSize = size();
    // if list is empty, remove nothing
    if (headNode === null) {
      return;
    } else if (index >= listSize) {
      console.log('Invalid index.');
      return;
    }
    const target = at(index);
    let prev = headNode;
    let curr = headNode.nextNode;

    // edge case if target is head node
    if (headNode.value === target.value) {
      headNode = curr;
      return;
    }

    // search for target in list and update nextNode values
    while (curr.nextNode !== null) {
      if (curr.value === target.value) {
        prev.nextNode = curr.nextNode;
        return; // exit loop
      } else {
        prev = prev.nextNode;
        curr = curr.nextNode;
      }
    }

    // edge case if target value is tail node
    if (curr.value === target.value) {
      prev.nextNode = null;
    }
  }

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
linkedlist.append('angel');
linkedlist.append('ivan');
linkedlist.append('sam');
linkedlist.prepend('luke');
linkedlist.prepend('jonah');
linkedlist.prepend('ethan');
// console.log(linkedlist.head());
// console.log(linkedlist.tail());
// console.log(linkedlist.contains('sam'));
// console.log(linkedlist.find('sam'));
console.log(linkedlist.at(3));
// linkedlist.pop();
console.log(linkedlist.size());
linkedlist.removeAt(5);
linkedlist.toString();
