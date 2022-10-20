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


const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
});
// const adv = document.querySelector('.promo__adv');
// adv.remove();

genre.textContent = 'драма';
poster.style.backgroundImage = "url('img/bg.jpg')";
movieList.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}  ${film}
            <div class="delete"></div>
        </li>
    `;
});


const btn = document.querySelector('button');

// btn.onclick = function () {
//   alert('click');
// };
btn.addEventListener('click', () => {
  alert('Click');
});
