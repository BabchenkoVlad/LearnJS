'use strict';
// 1) обычная функция: this = window, но если use strict - undefined
// 2) контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка This: call, apply, bind



1);
function showThis(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }
}
showThis();


2);
const obj = {
  a: 20,
  b: 15,
  sum: function () {
    console.log(this);
  }
};
obj.sum();

3);
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`hello ${this.name}`);
  };
}
User.prototype.exit = function (name) {
  console.log(`Пользователь ${this.name} ушел`);
};
const ivan = new User('ivan', 28);
const alex = new User('alex', 26);
ivan.hello();

4);
function sayName(surname) {
  console.log(this);
  console.log(this.name + surname);
}
const user = {
  name: 'John'
};
sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);


function count(num) {
  return this * num;
}
const double = count.bind(2);
console.log(double(3));
console.log(double(13));




// Practice
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  console.log(this);
  // this.style.backgroundcolor = 'red';
});


// работает из за стрелочной функции
const obj = {
  num: 20,
  sayNumber: function () {
    const say = () => {
      console.log(this.num);
    };

    say();
  } 
};
obj.sayNumber();

// если стрелочная фкция может поместиться в одну строку
const double = a => a * 2;