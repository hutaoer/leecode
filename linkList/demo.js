class Node {
	constructor(el) {
		this.el = el;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = new Node('head')
	}

	find(item) {
		let currentNode = this.head;
		while(currentNode && currentNode.el !== item) {
			currentNode = currentNode.next
		}
		return currentNode
	}

	findPrev(item) {
		let node = this.head;
		while(node.next !== null && node.next.el !== item) {
			node = node.next
		}
		return node
	}

	insert(el, item) {
		const newNode = new Node(el)
		const currentNode = this.find(item)
		// 当前节点的 next 指针，赋值给新节点
		newNode.next = currentNode.next;
		// 当前节点的 next指针 指向新节点
		currentNode.next = newNode
	}

	remove(item) {
		let prevNode = this.findPrev(item)
		if(prevNode.next !== null) {
			prevNode.next = prevNode.next.next;
		}
	}
}