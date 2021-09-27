class Node {
	constructor(el) {
		this.el = el;
		this.prev = null;
		this.next = null;
	}

	insert(el, item) {
		const newNode = new Node(el)
		const currentNode = this.find(item)
		newNode.next = currentNode.next;
		newNode.prev = currentNode
		currentNode.next = newNode
		currentNode.next.prev = newNode
	}

	remove(item) {
		const node = this.find(item)
		node.prev.next = node.next;
		node.next.prev = node.prev;
		node.next = null;
		node.prev = null;
	}
}