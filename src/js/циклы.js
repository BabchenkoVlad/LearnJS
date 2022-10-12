"use strict";

// let num = 50;

// while (num < 55) {
//   console.log(num);
//   num++;
// }


// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);


// for (let i = 1; i < 8; i++) {
//   console.log(num);
//   num++;
// }


// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     break;
//     // continue;
//   }
// }


// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }


// let result = '';
// const length = 8;

// for (let i = 1; i < length; i++) {

//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }
    
//   result += '\n';
// }

// console.log(result);


// first: for (let i = 0; i < 3; i++) {
//   console.log(`First level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level: ${j}`);
//     for (let k = 0; k < 3; k++) {
//       if (k === 2) continue first;
//       console.log(`Third level: ${k}`);
//     }
//   }
// }


for (i = 20; i >= 10; i--) {
  console.log(i);
  if (i === 13) break;
}    

for (i = 5; i <= 10; i++) {
  console.log(i);
}
    
for (i = 2; i <= 10; i = i + 2) {
  console.log(i);
}

for (let i = 2; i <= 16; i++) {
  if (i % 2 === 0) {
    continue;
  } else {
      console.log(i);
  }
}

let i = 2;
while (i <= 16) {
  console.log(i);
  i++;
  if (i % 2 === 0) {
    continue;
  } else {
      console.log(i);
  }
}

const arr = [];
for (i = 5; i <= 10; i++) {
  arr[i - 5] = i;
}
  console.log(arr);
  return arr;
