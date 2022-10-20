'use strict';

const box = document.getElementById('box');
      btns = document.getElementsByTagName('button');
      circles = document.getElementsByClassName('circle');
      hearts = document.querySelectorAll('.heart');
      oneHeart = document.querySelector('.heart');

box.style.cssText = `background-color: blue; width: 500px`;

hearts.forEach(item => {
  item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');

div.classList.add('class');
wrapper.append(div);
wrapper.prepend(div);


