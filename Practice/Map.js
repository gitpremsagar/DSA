// const sayings = new Map();

// sayings.set("dog","bark");
// sayings.set("cat","meao");
// sayings.set("sheep","baa");

// console.log(sayings.get("dog"));//bark

// //is donkey's saying available on the hash map?

// console.log("Is Donkey's saying available in Map?\nAns: ", `${sayings.has("donkey") ? "Yes" : "No" }`);
// console.log("Is Sheep's saying available in Map?\nAns: ", `${sayings.has("sheep") ? "Yes" : "No" }`);

//===========================================

const arr = ["a","b","c"]

const map1 = new Map();

map1.set(arr[0],0)
map1.set(arr[1],1)
map1.set(arr[2],2)

console.log("map1 = ",map1)

console.log("is b a key? ", map1.has(arr[1]))