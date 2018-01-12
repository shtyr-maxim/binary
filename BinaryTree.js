class Node{
	constructor(key){
		if (key.key && key.lChild && key.rChild){
			this.key = key.key;
			this.lSon = key.lChild;
			this.rSon = key.rChild;
		} else {
			this.key = key;
			this.lSon = null;
			this.rSon = null;
		}
	}

	set lChild(key){
		this.lSon = key;
	}
	get lChild(){
		return this.lSon;
	}

	set rChild(key){
		this.rSon = key;
	}
	get rChild(){
		return this.rSon;
	}

	
}

class BinaryTree{
	constructor(key){
		this.root = new Node(key); 
	}

	insert(value){
		var rootCopy = this.root;

		while (rootCopy != null){
			if (value < rootCopy.key){
				if (rootCopy.lChild == null){
					rootCopy.lChild = new Node(value);
					rootCopy = null;
				}
				else{
					rootCopy = rootCopy.LChild;
				}
			}
			else if (value > rootCopy.key){
				if (rootCopy.rChild == null){
					rootCopy.rChild = new Node(value);
					rootCopy = null;
				}
				else{
					rootCopy = rootCopy.rChild;
				}
			}
			else
				rootCopy = null;
		}
	}

	
	delete(value){
		var rootCopy = this.root;

		while (rootCopy != null){
			if (value < rootCopy.key){
				if (rootCopy.lChild == null){
					//rootCopy.lChild = new Node(value);
					rootCopy = null;
				}
				else{
					var tempLSon = rootCopy.lChild;
					if (tempLSon.key == value){
						if (tempLSon.lSon == null && tempLSon.lSon == null){
							rootCopy.lChild = null;
						}
						else if (tempLSon.lSon == null){
							rootCopy.rChild = tempLSon.lSon;
						}
						else if (tempLSon.rSon == null){
							rootCopy.lChild = tempLSon.rSon;
						}
						else{
							if (tempLSon.rSon.lSon != null){
								tempLSon.rSon.lSon = null;
								rootCopy.lChild = tempLSon.rSon.lSon;
							}
						}
						rootCopy = null;
					}
				}
			}
			else if (value > rootCopy.key){
				if (rootCopy.rChild == null){
					//rootCopy.rChild = new Node(value);
					rootCopy = null;
				}
				else{
					rootCopy = rootCopy.rChild;
				}
			}
			else
				rootCopy = null;
		}
	} 

	print(){
		console.log(this.root);
	}
}

var tree = new BinaryTree(5);
tree.insert(4);
tree.insert(2);
tree.print();