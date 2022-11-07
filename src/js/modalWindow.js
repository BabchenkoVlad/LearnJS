// модальное окно
const modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('[data-close]');

function openModal() {
  modal.classList.add('show');
  modal.classList.remove('hide');
// kompaktniu variant
//  modal.classList.toggle('show');
  document.body.style.overflow = 'hidden';
  clearInterval(modalTimerId);
}

modalTrigger.forEach(btn => {
  btn.addEventListener('click', openModal);
});

function closeModal() {
  modal.classList.add('hide');
  modal.classList.remove('show');
// kompaktniu variant
//  modal.classList.toggle('show');
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.activeElement('keydown', (e) => {
  if (e.code === "Escape" && modal.classList.contains('show')) {
    closeModal();
  }
});

// vizov modalki cherez 10 sec
const modalTimerId = setTimeout(openModal, 10000);

// modal after scroll down
function showModalByScroll() {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
    openModal();
    window.removeEventListener('scroll', showModalByScroll);
  }
}

window.addEventListener('scroll', showModalByScroll);