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


let result = '';
const length = 8;

for (let i = 1; i < length; i++) {

  for (let j = 0; j < i; j++) {
    result += "*";
  }
    
  result += '\n';
}

console.log(result);


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
    if (i % 2 === 0) {
      i++;
      continue;
    } else {
      console.log(i);
    }
    i++;
  }

const arr = [];
for (i = 5; i <= 10; i++) {
  arr[i - 5] = i;
}
console.log(arr);
return arr;



const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
      result[i] = arr[i];
}

console.log(result);
return result;



const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
  if (typeof(data[i]) === 'number') {
    data[i] = data[i] * 2;
  } else if (typeof(data[i]) === 'string') {
    data[i] = `${data[i]} - done`;
  }
}
console.log(data);
return data;



const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
for (let i = 1; i <= data.length; i++) {
  result[i - 1] = data[data.length - i];
}
console.log(result);
return result;


const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    result += " ";
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    result += "*";
  }
    
  result += '\n';
}

console.log(result);
