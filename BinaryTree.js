class Node{
	constructor(node) {
		if (node.key && node.lChild && node.rChild) {
			this.key = node.key;
			this.lChild = node.lChild;
			this.rChild = node.rChild;
		} else {
			this.key = node;
			this.lChild = null;
			this.rChild = null;
		}
	}

	get key() {
		return this.innerKey;
	}
	set key(value) {
		this.innerKey = value;
	}

	get lChild() {
		return this.lSon;
	}
	set lChild(value) {
		this.lSon = value;
	}

	get rChild() {
		return this.rSon;
	}
	set rChild(value) {
		this.rSon = value;
	}
}

class BinaryTree {
	constructor(key) {
		this.root = new Node(key); 
	}

	insert(value, node) {
		if (!node)
			node = this.root;
		if (value < node.key) {
			if (!node.lChild) {
				node.lChild = new Node(value);
			}
			else {
				this.insert(value, node.lChild);
			}
		}
		else if (value > node.key) {
			if (!node.rChild) {
				node.rChild = new Node(value);
			}
			else {
				this.insert(value, node.rChild);
			}
		}
	}

	delete(value, node) {
		if (!node)
			node = this.root;
		if (value < node.key) {
			if (node.lChild) {
				this.delete(value, node.lChild);
			}
		} else if (value > node.key) {
			if (node.rChild) {
				this.delete(value, node.rChild);
			}
		}else {
			if (!node.rChild) {
				if (node.lChild) {
					const nodeLChild = node.lChild;
					node.key = nodeLChild.key;
					node.rChild = nodeLChild.rChild;
					node.lChild = nodeLChild.lChild;
				}
			} else if (node.rChild && node.rChild) {
				const nodeRChild = node.rChild;

				node.key = nodeRChild.key;
				if (!nodeRChild.lChild) {
					node.rChild = nodeRChild.rChild;
				} else {
					node.rChild = nodeRChild.lChild;
				}
			}
		}
	}

	localPrefix(action, node) {
		if (node) {
			action(node.key);
			this.localPrefix(action, node.lChild);
			this.localPrefix(action, node.rChild);
		}
	}

	prefix(action){
		this.localPrefix(action, this.root);
	}

	localPostfix(action, node) {
		if (node) {
			this.localPostfix(action, node.lChild);
			this.localPostfix(action, node.rChild);
			action(node.key);
		}
	}

	postfix(action){
		this.localPostfix(action, this.root);
	}

	localInfix(action, node) {
		if (node) {
			this.localInfix(action, node.lChild);
			action(node.key);
			this.localInfix(action, node.rChild);
		}
	}

	infix(action){
		this.localInfix(action, this.root);
	}

	print() {
		console.log(this.root);
	}
}

var tree = new BinaryTree(5);

tree.insert(4);
tree.insert(2);

tree.prefix(console.log);

tree.delete(4);
