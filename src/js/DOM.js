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
btn.addEventListener('mouseenter', (e) => {
    console.log('e.target');
    e.target.remove();
    console.log('Hover');
});


for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}

///////////////////////////////////////////////////////
const btns2 = document.querySelectorAll('button'),
    wrapper2 = document.querySelector('.btn-block');

// btns2[0].classList.length; // количество классов
// btns2[0].classList.item(0); // клас под номером 1
// btns2[0].classList.add('red'); // добавить класс
// btns2[0].classList.remove('blue'); // удалить
// btns2[0].classList.toggle('blue'); // добавил/удалил переключатель

// if (btns2[1].classList.contains('red')) {
//     console.log
// }

// dobavlenie udalenie klasa activnosti
btns2[0].addEventListener('click', () => {
    // if (!btns2[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    // 2ou variant
    btns2[1].classList.toggle('red');
});

wrapper2.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('Hello');
    }
});


// dobavlenie knopki
const btn2 = document.createElement('button');
btn2.classList.add('red');
wrapper2.append(btn2);
