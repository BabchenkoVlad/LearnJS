// функция которая должна запуститься через определенное время
const timerId = setTimeout(function () {
  console.log('Hello');
}, 2000);

// toge samoe
const timerId = setTimeout(logger, 2000);

function logger() {
  console.log('Hello');
}

// ostanovta timera
clearInterval(timerId);


// cherez kagdie 2 sekundi
setInterval(logger, 2000);


const id = setTimeout(function log() {
  console.log('Hello');
  id = setTimeout(log, 500);
}, 500);


//peremeshenie blocka na stranice
const btn = document.querySelector('.btn');
let timerId;
i = 0;
    
function myAnimation() {
  const elem = document.querySelector('.box');
  let pos = 0;

  const id = setInterval(frame, 10);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + "px";
    }
  }
}

btn.addEventListener('click', myAnimation);

