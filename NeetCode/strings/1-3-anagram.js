// given two strings s and t, retrun true if t is anagram of s and false otherwise.

//O (n^2) 
// function isAnagram(s, t) {
//   if (s.length != t.length) return false;
//   const mapS = new Map();
//   const mapT = new Map();

//   for (i = 0; i < s.length; i++) {
//     if (mapS.has(s[i])) {
//       mapS.set(s[i], mapS.get(s[i]) + 1);
//     } else {
//       mapS.set(s[i], 1);
//     }
//   }

//   for (i = 0; i < t.length; i++) {
//     if (mapT.has(t[i])) {
//       mapT.set(t[i], mapT.get(t[i]) + 1);
//     } else {
//       mapT.set(t[i], 1);
//     }
//   }

//   for (let [key, value] of mapS) {
//     if (mapT.has(key)) {
//       if (value != mapT.get(key)) {
//         return false;
//       }
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

//O(n^2)
// function isAnagram(s,t){
//     const charactersOfs = s.split("");
//     const charactersOft = t.split("");

//     charactersOfs.sort();
//     charactersOft.sort();

//     if (charactersOfs.join() == charactersOft.join()){
//         return true;
//     } else {
//         return false;
//     }
// }

// O(n)
function isAnagram(s, t) {
  if (s.length != t.length) return false;
  const counterMap = new Map();

  for (i = 0; i < s.length; i++) {

    if (counterMap.has(s[i])) {
      counterMap.set(s[i], counterMap.get(s[i]) + 1);
    } else {
      counterMap.set(s[i], 1);
    }

    if(counterMap.has(t[i])){
        counterMap.set(t[i],counterMap.get(t[i])-1)
    } else{
        counterMap.set(t[i],-1)
    }
  }

  for (let [alphabet, count] of counterMap) {
    if(count != 0) return false
  }

  return true;
}

// console.log(isAnagram("car","rab"))

const testCases = [
  {
    s: "anagram",
    t: "nagaram",
    expected: true,
  },
  {
    s: "rat",
    t: "car",
    expected: false,
  },
  {
    s: "",
    t: "",
    expected: true,
  },
  {
    s: "a",
    t: "a",
    expected: true,
  },
  {
    s: "a",
    t: "b",
    expected: false,
  },
  {
    s: "abc",
    t: "cba",
    expected: true,
  },
  {
    s: "ab",
    t: "a",
    expected: false,
  },
  {
    s: "aabbcc",
    t: "abcabc",
    expected: true,
  },
  {
    s: "aabbcc",
    t: "abccba",
    expected: true,
  },
  {
    s: "listen",
    t: "silent",
    expected: true,
  },
  {
    s: "triangle",
    t: "integral",
    expected: true,
  },
  {
    s: "apple",
    t: "papel",
    expected: true,
  },
  {
    s: "hello",
    t: "bello",
    expected: false,
  },
  {
    s: "abcd",
    t: "abcde",
    expected: false,
  },
];

function runTests(isAnagram) {
  testCases.forEach(({ s, t, expected }, index) => {
    const result = isAnagram(s, t);
    if (result === expected) {
      console.log(`✅ Test ${index + 1} passed`);
    } else {
      console.error(
        `❌ Test ${
          index + 1
        } failed. Input: s="${s}", t="${t}". Expected ${expected}, got ${result}`
      );
    }
  });
}

runTests(isAnagram);
