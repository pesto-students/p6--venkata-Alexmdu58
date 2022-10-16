function createStack() {

let _items = [];
return {
push(item) {
_items.push(item);
},
pop() {
return _items.pop();
},
log() {
return _items;
},
};
}
const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // => 5
stack.push(5);
stack.push(50);
console.log(stack._items);//undefined
console.log(stack.log());// [ 10, 5, 50 ]
