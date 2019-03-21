function LinkedList(){
	this.head = null;
	this.tail = null;

}

function Node(index, value, next, prev){
	this.value = value;
	this.next = next;
	this.prev = prev;
}

// var LL = new LinkedList();
// var userList = new LinkedList();
// var toDoList = new LinkedList();


// var node1 = new Node(100, 'node2', null);
// LL.addToTail(10)
// console.log(LL);



LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if( this.head ) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
}

LinkedList.prototype.addToTail = function(value){
	var newNode = new Node(value, null, this.tail);
	if( this.tail ) this.tail.next = newNode;
	else this.head = newNode;
	this.tail = newNode;
}

LinkedList.prototype.removeHead = function(){
	if(!this.head) return null;
	var val = this.head.value;
	this.head = this.head.next;
	if( this.head ) this.head.prev = null;
	else this.tail = null;
	return val;
}

// var ll = new LinkedList();
// ll.addToHead(1000);
// ll.addToHead(2000);
// ll.addToTail(3000);
// console.log(ll.removeHead);

LinkedList.prototype.removeTail = function(){
	if(!this.tail) return null;
	var val = this.tail.value;
	this.tail = this.tail.prev;
	if( this.tail ) this.tail.next = null;
	else this.head = null;
	return val;
}

// ll.addToHead('one');
// ll.addToHead('two');
// ll.addToHead('three');

LinkedList.prototype.search = function(searchValue){
	var currentNode = this.head;
	while(currentNode){
		if( currentNode.value = searchValue ) return currentNode.value;
		currentNode = currentNode.next;
	}
	return null;
}

// var myll = new LinkedList();

// myll.addToHead(123);
// myll.addToHead(79);
// myll.addToHead('hello');
// myll.addToTail(19);
// myll.addToTail('world');
// myll.addToTail(20);

// console.log(myll.search(70));

LinkedList.prototype.indexOf = function(value){
	var indexs = [];
	var currentIndex = 0;
	var currentNode = this.head;
	while(currentNode){
		if(currentNode.value === value){
			indexs.push(currentIndex)
		}
		currentNode = currentNode.next;
		currentIndex++;
	}
	return indexs;
}

// Constant runtime - Big O Notation:  "O (1)"
function log(array) {
 console.log(array[0]);
 console.log(array[1]);
}
 
log([1, 2, 3, 4]);
log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
 
 
// Linear runtime - Big O Notation:  "O (n)"
function logAll(array) {
 for (var i = 0; i < array.length; i++) {
   console.log(array[i]); 
 }
}
 
logAll([1, 2, 3, 4, 5]);
logAll([1, 2, 3, 4, 5, 6]);
logAll([1, 2, 3, 4, 5, 6, 7]);
 
 
// Exponential runtime - Big O Notation: "O (n^2)"
function addAndLog(array) {
 for (var i = 0; i < array.length; i++) {
   for (var j = 0; j < array.length; j++) {
     console.log(array[i] + array[j]);
   }
 } 
}
 
addAndLog(['A', 'B', 'C']);  // 9 pairs logged out
addAndLog(['A', 'B', 'C', 'D']);  // 16 pairs logged out
addAndLog(['A', 'B', 'C', 'D', 'E']);  // 25 pairs logged out
 
 
// Logarithmic runtime - Big O Notation: O (log n)
function binarySearch(array, key) {
    var low = 0;
    var high = array.length - 1;
    var mid;
    var element;
    
    while (low <= high) {
        mid = Math.floor((low + high) / 2, 10);
        element = array[mid];
        if (element < key) {
            low = mid + 1;
        } else if (element > key) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
