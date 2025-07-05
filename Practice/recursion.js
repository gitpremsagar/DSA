function main() {
  recursiveFunction(3);
  console.log("Recursion Ended!");
}

function recursiveFunction(x) {  
    if (x == 0) {
    return;
  }
  x--;
  recursiveFunction(x);  
  console.log("x = ", x);
}

main();

// // 1st call
// function recursiveFunction(3) {  
//     if (x == 0) {
//     return;
//   }
//   x--;
// //   x=2
//   recursiveFunction(2);  
//   console.log("x = ", 2);
// }

// // 2nd call
// function recursiveFunction(2) {  
//     if (x == 0) {
//     return;
//   }
//   x--;
// //   x=1
//   recursiveFunction(1);  
//   console.log("x = ", 1);
// }

// //3rd call
// function recursiveFunction(x) {  
//     if (x == 0) {
//     return;
//   }
//   x--;
// //   x=0
//   recursiveFunction(0);  
//   console.log("x = ", 0);
// }

// //4th call
// function recursiveFunction(0) {  
//     if (x == 0) {
//     return;
//   }
// //   x--;
// //   recursiveFunction(x);  
// //   console.log("x = ", x);
// }