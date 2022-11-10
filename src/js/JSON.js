'use strict';

const person = {
  name: 'Alex',
  tel: '+3800000000',
  parents: {
    mom: 'Olga',
    dad: 'Kolya'
  }
};


// глубокое клонирование объектов
const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Ann';

console.log(person);
console.log(clone);

