// DATA STRUCTURE AND ALGORITHMS:

// -Time Complexity - Measure of how fast is your code.
// -Space Complexity - How much memory does it take to run your code. 

// O(1) - Constant time
// O(log(N)) - Logarithmic time
// O(N) - Linear time
// O(N log (N) 
// O (N^2), O (N^3), O (N^4)
// O(2^N) -XXXXXX
// O(N!) - XXXXXXX

////// PALINDROME:
// O(N) time | O(1) 

///Stacks
var letters = [];

var word = "racecar"
var rword = "";

for (var i = 0; i < word.length; i++) {
///  letters.push(word[i])
 letters.unshift(word[i])
  console.log(letters, rword)
}

rword = letters.join("")
// for (var i = 0; i < word.length; i++) {
//   rword += letters.pop()
//   console.log(rword)
// }

if(rword === word){
  console.log(word + " is a palandrome")
} else {
  console.log(word + " is not a palandrome")
}


var Stack = function(){
	this.count = 0;
	this.storage = {};
	console.log("1st",this)
	
	this.push = function(value) {
	  this.storage[this.count] = value;
	  this.count++
	  console.log("push", this)
	}
	
	this.pop = function() {
	  if(this.count === 0) {
		return undefined;
		  
	  }
	
	  this.count--;
	  var result = this.storage[this.count];
	  delete this.storage[this.count];
	  return result;
	  console.log("pop", this)
	}
	
	this.size = function(){
	  return this.count;
	  console.log("size", this)
	}
	
	this.peek = function() {
	  return this.storage[this.count-1]
	  console.log("peek", this)
	}
	
	}
	
	var myStack = new Stack();
	
	myStack.push(1);
	myStack.push(2);
	myStack.push(3);
	console.log(myStack)
	console.log(myStack.peek);
	console.log(myStack.pop);
	console.log(myStack.peek)

	/////SETS
	function mySet() {
		//The var collection will hold the set
		var collection = [];
	  
	  //This method will check the presence of an element and return true or false
		this.has = function(element) {
		  return(collection.indexOf(element) !== -1);
		};
	  
	  //This method will return all the values in a set
		this.values = function() {
		  return collection;
		};
	  
	  //This method will add an element to the set
		this.add = function(element) {
		  if(!this.has(element)){
			collection.push(element);
			return true;
		  }
		  return false;
		};
	  
	  //This method willl remove an element from a set
		this.remove =function(element) {
		  if(this.has(element)){
			index = collection.indexOf(element);
			collection.splice(index,1);
			return true;
		  }
		  return false;
		};
	  
	  
	  //This method will return the size of the collection
		this.size = function(){
		  return collection.length;
		};
	  
	  
	  //This method will return the union of two sets
		this.union = function(otherSet) {
		  var unionSet = new Set();
		  var firstSet = this.values();
		  var secondSet = otherSet.values();
		  firstSet.forEach(function(e){
			unionSet.add(e);
		  });
		return unionSet;
		}
	  
	  
	  //This method will return the intersection of two sets as a new set
		this.intersection = function(otherSet) {
		  var intersectionSet = new mySet();
		  var firstSet = this.values();
		  firstSet.forEach(function(e){
			if(otherSet.has(e)){
			  intersectionSet.add(e);
			}
		  })
		  return intersectionSet;
		}
	  
	  //This method will return the difference of two sets as a new set
		  this.difference = function(otherSet) {
		  var differenceSet = new mySet();
		  var firstSet = this.values();
		  firstSet.forEach(function(e){
			if(!otherSet.has(e)){
			  differenceSet.add(e);
			}
		  })
		  return differenceSet;
		}
	  
	  //this method will test if the set is a subset of a different set
		this.subset = function(otherSet){
		  var firstSet = this.values();
		  return firstSet.every(function(value) {
			return otherSet.has(value);
		  })
		}
	  }
	  
	  var setA = new mySet();
	  var setB = new mySet();
	  setA.add("a");
	  setB.add("b");
	  setB.add("c");
	  setB.add("a");
	  setB.add("d");
	  console.log(setA.subset(setB))
	  console.log(setA.difference(setA))


	  ///////////////////////////QUEUE
	  function Queue(){
		collections = []
		this.print = function(){
		  console.log(collection)
		}
	  
		this.enqueue = function(element){
		  collections.push(element);
		}
	  
		this.dequeue = function(){
		  collections.shift();
		}
	  
		this.front = function() {
		  return collection[0];
		}
	  
		this.size = function() {
		  return collection.length;
		}
	  
		this.isEmpty = function(){
		  return(collectrion.length === 0);
	  }
	  
	  var q = new Queue();
	  q.enqueue("a");
	  q.enqueue("b");
	  q.enqueue("c");
	  q.enqueue("d");
	  q.print();
	  q.front();
	  q.print();



	  ///////// Priority Queue

	  function PriorityQueue(){
		var collection = [];
		this.printCollection = function(){
		  console.log(collection)
		}
	  
		this.enqueue = function(element){
		  if(this.isEmpty()){
			collection.push(element);
		  } else {
			var added = false;
			for(var i = 0; i<collection.length; i++){
			  if(element[1] < collection[i][1]){
				collection.splice(i,0,element);
				added = true;
				break;
			  }
			}
			if(!added){
			  collection.push(element);
			}
		  }
		};
	  
		this.dequeue = function(){
		  var value = collection.shift();
		  console.log(value[0]);
		};
	  
		this.front = function(){
		  console.log(collection[0])
		};
	  
		this.size = function(){
		  return collection.length;
		};
	  
		this.isEmpty = function(){
		  console.log(collection.length === 0)
		};
	  };
	  
	  var pq = new PriorityQueue();
	  pq.enqueue(["Beau Cranes", 2]);
	  pq.enqueue(["Quincy Larson", 3]);
	  pq.enqueue(["jack", 1]);
	  pq.printCollection();
	  pq.dequeue();
	  pq.front();
	  pq.printCollection();
	  




/////////////////// BINARY SEARCH TREE

class Node {
	constructor(value){
	  this.value = value
	  this.left = null
	  this.right = null
	}
  }
  
  class BST {
	constructor(value){
	  this.root = new Node(value)
	  this.count = 1
	}
  
	size(){
	  return this.count
	}
  
	insert(value) {
	  this.count++
  
	  let newNode = new Node(value)
  
	  const searchTree = node => {
		// if value < node.value, go left
		if (value < node.value){
		  ////if no left child, append new node
		  if(!node.left){
			node.left = newNode
		  }
		  //if left child, look left again
		  else {
			searchTree(node.left)
		  }
		}
		//if value > node.value, go right
		else if (value > node.value) {
		  //if no right child, append new node
		  if(!node.right){
			node.right = newNode
		  }
		  // if right child, look right again
		  else {
			searchTree(node.right)
		  }
		}
	  }
  
	  searchTree(this.root)
	}
  
	min(){
	  let currentNode = this.root
  
	  //continure traversing left until no more children
	  while (currentNode.left) {
		currentNode = currentNode.left
	  }
  
	  return currentNode.value
	}
  
	max(){
	  let currentNode = this.root
  
	  //continue traversing right until no more children
	  while (currentNode.right){
		currentNode = currentNode.right
	  }
  
	  return currentNode.value
	}
  
	contains(value){
	  let currentNode = this.root
  
	  while (currentNode){
		if (value === currentNode.value) {
		  return true
		}
		if (value < currentNode.value){
		  currentNode = currentNode.left
		} else {
		  currentNode = currentNode.right
		}
	  }
  
	  return false
	}
  
	// depth first search - branch by branch
  
	//in-order
	//left, root, right
	//2,3,12,15,28,36,39
	dfsInOrder(){
	  let result = []
  
	  const traverse = node => {
		//if left child exists, go left again
		if (node.left) traverse(node.left)
		//capture root node value
		result.push(node.value)
		//if right child exists, go right again
		if (node.right) traverse(node.right)
	  }
  
	  traverse(this.root)
  
	  return result
	}
  
	//pre-order//root, left, right
	// root, left, right
	//15,3,2,12,36,28,39,
	dfsPreOrder(){
	  let result = []
  
	  const traverse = node => {
		//capture root node value
		result.push(node.value)
		//if left child exists, go left again
		if (node.left) traverse(node.left)
		// if right child exists, go right again
		if (node.right) traverse(node.right)
	  }
  
	  traverse(this.root)
  
	  return result
	}
  
	// post-order
	//left, right, root
	//2,12,3,28,39,36,15
	dfsPostOrder(){
	  let result = []
  
	  const traverse = node => {
		//if left child exists, go left again
		if (node.left) traverse(node.left)
		//if right child exists, go right again
		if (node.right) traverse(node.right)
		//capture root node value
		result.push(node.value)
	  }
  
	  traverse(this.root)
  
	  return result
	}
  
	// breath first search - level by level
  
	//use a queue!
	//15, 3, 36, 2, 12, 28, 39
	bfs(){
	  let result = []
	  let queue = []
  
	  queue.push(this.root)
  
	  while(queue.length) {
		let currentNode = queue.shift()
  
		result.push(currentNode.value)
  
		if (currentNode.left) {
		  queue.push(currentNode.left)
		}
		if (currentNode.right) {
		  queue.push(currentNode.right)
		}
	  }
  
	  return result
	} 
  }
  
  const bst = new BST(15)
  
  bst.insert(3)
  bst.insert(36)
  bst.insert(2)
  bst.insert(12)
  bst.insert(28)
  bst.insert(39)
  
  // bst.size()
  
  bst.min()
  // bst.max()
  
  // bst.contains(2)
  // bst.contains(9)
  
  // // DFS!!!
  // // in-order: 2, 3, 12, 15, 28, 36, 39
  // bst.dfsInOrder()
  
  // // pre-order: 15, 3, 2, 12, 36, 28, 39
  // bst.dfsPreOrder()
  
  // // post-order: 2, 12, 3, 28, 39, 36, 15
  // bst.dfsPostOrder()
  
  // // BFS!!!
  // // 15, 3, 36, 2, 12, 28, 39
  // bst.bfs()

	  /////////////// Palandrome

function isPalindrome(string) {
	let reversed = '';		  /// declare an empty string
	for (let i = string.length -1; i >= 0; i--){ 	///// Set i to end of string then i- -
		reversed += string[i]; 		//////// add each letter backwards to reversed
	}
	return string === reversed	//// compare string to reversed
}

// Or

//  O(N) time | O(N) space

function isPalindrome(string, i=0) { 		////Set i as an argument for end of reversed
	const j = string.length -1 -i;	//////Set j at the end of the string
	return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
}	//// if i is equal to j (0) ? Then it’s true, if not: compare both ends of the string then call function again with i incremented .


// CAESAR CIPHER:
// 	O(N) time | O(1)

function caesarCipherEncryptor(string, key) { 
	const newLetters = [];		///// New Letters array
	const newKey = key % 26;		///// Set up new Letter location?
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); //// Custom alphabet keys
	for (const letter of string) {		//// for loop looking at each “letter” of the string
		newLetters.push(getNewLetter(letter, newKey, alphabet)); 
				//// helper function to get new letters
	}
	return newLetters.join('');	/// turn new letters to string
}

function getNewLetter(letter, key, alphabet) { 
///// helper method with argument letter in loop, key, alphabet

	const newLetterCode = alphabet.indexOf(letter) + key; //// getting the new letter index
	return alphabet[newLetterCode % 26] 
		////return the new letter with index in alphabet array
}

// RUN LENGTH:

function runLengthEncoding(string) {
	const newString = [];	 ///Delcare new string array
	let currentRun = 1;		//// Start point of run time
	
	for (let i = 1; i < string.length; i++) {	 //// for loop starting at index of 1
		const currentCharacter = string[i];	 //// set point of the begining of array
		const previousCharacter = string[i - 1]; ///// keep track of previous character
		
		if (currentCharacter !== previousCharacter || currentRun === 9){
		/// if currentCharacter is NOT equal to previous character or run time = to 9
			/// When letter changed or at 9

			newString.push(currentRun.toString());	 /// push number to string
			newString.push(previousCharacter);	 //// push letter to string
			currentRun = 0; /// Reset starting run time
		}
		currentRun++; 	///Keep loop going
	}
	newString.push(currentRun.toString());	 //// Push last run time
	newString.push(string[string.length -1])	 //// Push last string
	
	return newString.join('')
}


/// GENERATE CHARACTERS with DOCUMENT

// O(n + m) time | O(c) space
function generateDocument(characters, document) {
	const characterCounts = {}; //Empty hash map to keep track of unique characters
	
	for (const character of characters) {  //// for loop, character = individual data
		if (!(character in characterCounts)) characterCounts[character] = 0;
					/// if character is NOT in characterCounts add character & count to 0
		
		characterCounts[character]++; //add 1 to character count
	}
	for (const character of document) { /// for loop to check each chars in document
		if(!(character in characterCounts) || characterCounts[character] === 0) return false;
			//// if document characters are NOT in characterCount or in characterCount = FAIL
		characterCounts[character]--; /// if character IS in document, minus count to 1
	}
	return true; /// if it passes all of that, return true!
}


///FIRST NONE REPEATING CHARACTER

// O(n) time | O(1) space
function firstNonRepeatingCharacter(string) {
	const characterFrequencies = {}; /// Set hash map for frequency count
	for (const character of string){		/// for loop for string
		if(!(character in characterFrequencies)) characterFrequencies[character] = 0;
				///if the character is !NOT in the character frequencies add char with 0 count;
		characterFrequencies[character]++;
				///////add 1 to new character count
	}
	
	for(let i = 0; i < string.length; i++){ /// for loop for characterFrequencies
		const character = string[i] /// set character to every character of the string
			if(characterFrequencies[character] === 1) return i 
						///if the first characterFrequency[i] is equal to 1. That is the answer
	}
	
		return -1; ///// else return -1    //
}

//////ARRAY OF ARRAY SUM //// RECURSION

function productSum(array, multiplier = 1) { ////// Multiply by dept of array so multiplier starts with 1
	// Write your code here.
	  let sum = 0; ///// total sum 
	  for (const element of array){    /////// for loop verion to check each element in array
		  if (Array.isArray(element)){  ///////// check if element is an Array
			  sum+= productSum(element, multiplier + 1)   /////// RECURSION 
		  } else {
			  sum += element; //// if element is not an array, add element to sum
		  }
	  }
	  return sum * multiplier;  ///// after going through the array multiply by dept and return
  }
  
  var rangeSumBST = function(root, low, high) {
    console.log("hello",root.left)
    let sum = 0;

    function recursion(node) {
        if(!node){
           return
           }
        if (node.val >= low && node.val <= high) {
            sum+= node.val
        } 
            recursion(node.left)
            recursion(node.right)
        };  
   
    recursion(root)
    return sum;

};


