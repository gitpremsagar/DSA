const sayings = new Map();

sayings.set("dog","bark");
sayings.set("cat","meao");
sayings.set("sheep","baa");

console.log(sayings.get("dog"));//bark

//is donkey's saying available on the hash map?

console.log("Is Donkey's saying available in Map?\nAns: ", `${sayings.has("donkey") ? "Yes" : "No" }`);
console.log("Is Sheep's saying available in Map?\nAns: ", `${sayings.has("sheep") ? "Yes" : "No" }`);