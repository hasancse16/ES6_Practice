
var mySet = new Set();
var mySet1 = new Set([1, 2, 3]);

mySet.add("Bangladesh");
mySet.add("nepal");
mySet.add("korea");
mySet.add("saudi arabia");
mySet.add("china");
mySet.add("kuwait");

// console.log(mySet1);

// delete
// mySet.delete("china");

//  clear
// mySet.clear();

// size
// console.log(mySet.size);

// values
console.log(mySet.values());

// has value
if(mySet.has("china")) {
    console.log("Key exists");
} else {
    console.log("Key does not exist");
}


// console.log(mySet);