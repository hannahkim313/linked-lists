import Node from './node.js';

const LinkedList = () => {
  let head = Node();

  const append = (value) => {
    if (head.value === null) {
      head.value = value;

      return;
    }

    let currNode = head;

    while (currNode.nextNode !== null) {
      currNode = currNode.nextNode;
    }

    const newNode = Node();
    newNode.value = value;
    currNode.nextNode = newNode;
  };

  const prepend = (value) => {
    if (head.value === null) {
      head.value = value;
    }

    const newHead = Node();
    newHead.value = value;
    newHead.nextNode = head;
    head = newHead;
  };

  const size = () => {
    if (head.value === null) {
      return 0;
    }

    let count = 1;
    let currNode = head;

    while (currNode.nextNode !== null) {
      count += 1;
      currNode = currNode.nextNode;
    }

    return count;
  };

  const getHead = () => head;

  const getTail = () => {
    if (head.value === null || head.nextNode === null) {
      return null;
    }

    let currNode = head;

    while (currNode.nextNode !== null) {
      currNode = currNode.nextNode;
    }

    return currNode;
  };

  const at = (index) => {
    if (head.value === null || index < 0 || index > size() - 1) {
      return null;
    }

    if (index === 0) {
      return head;
    }

    let count = 0;
    let currNode = head;

    while (count < index) {
      count += 1;
      currNode = currNode.nextNode;
    }

    return currNode;
  };

  const pop = () => {
    const indexOfPrevNode = size() - 2;
    const prevNode = at(indexOfPrevNode);
    prevNode.nextNode = null;
  };

  const contains = (value) => {
    let count = size();
    let currNode = head;

    while (count > 0) {
      if (currNode.value === value) {
        return true;
      }

      count -= 1;
      currNode = currNode.nextNode;
    }

    return false;
  };

  const findIndexOf = (value) => {
    if (!contains(value)) {
      return null;
    }

    let count = 0;
    let currNode = head;

    while (count < size()) {
      if (currNode.value === value) {
        return count;
      }

      count += 1;
      currNode = currNode.nextNode;
    }

    return count;
  };

  const toString = () => {
    let string = '';
    let currNode = head;

    while (currNode.nextNode !== null) {
      if (currNode.value !== null) {
        string += `( ${currNode.value} ) -> `;
      }

      currNode = currNode.nextNode;
    }

    string += `( ${currNode.value} ) -> null`;

    return string;
  };

  const insertAt = (value, index) => {
    if (index - 1 < 0) {
      prepend(value);
    } else {
      const nodeAtIndex = at(index);
      const newNode = Node();
      newNode.value = value;
      newNode.nextNode = nodeAtIndex;
      const prevNode = at(index - 1);
      prevNode.nextNode = newNode;
    }
  };

  const removeAt = (index) => {
    if (index > size() - 1) {
      return;
    }

    const prevNode = at(index - 1);
    const nextNode = at(index + 1);

    if (index === 0) {
      head.value = nextNode.value;
      head.nextNode = nextNode.nextNode;
    } else if (index === size() - 1) {
      prevNode.nextNode = null;
    } else {
      prevNode.nextNode = nextNode;
    }
  };

  return {
    append,
    prepend,
    size,
    getHead,
    getTail,
    at,
    pop,
    contains,
    findIndexOf,
    toString,
    insertAt,
    removeAt,
  };
};
