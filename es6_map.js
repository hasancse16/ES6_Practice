
var myMap = new Map();

myMap.set('key1', 'Bangladesh');
myMap.set('key2', 'India');
myMap.set('key3', 'Srilanka');
myMap.set('key4', 'Canada');
myMap.set('key5', 'Australia');
myMap.set('key6', 'Singapore');

// console.log(myMap.get("key1"));
// console.log(myMap.values());
// console.log(myMap.keys());

// for(let item of myMap.values()) {
//     console.log(item);
// }

// for (let item of myMap.keys()) {
//     console.log(item);
// }

// Delete a key
// myMap.delete('key1');
// myMap.delete('key2');

// clear all keys
// myMap.clear();

// get a key
// console.log(myMap.get("key1"));

// for(let item of myMap.values()) {
//     console.log(item);
// }

if(myMap.has('key10')) {
    console.log('Key exists');
}else {
    console.log('Key does not exist');
}