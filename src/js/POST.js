// в корне проекта server.php
<? php
// poluchenie JSON na PHP
// $_POST = json_decode(file_get_contents("php://input"), true);
echo var_dump($_POST);


// forms
// otpravka ne JSON zaprosa

const forms = document.querySelectorAll('form');

const massage = {
  loading: 'Zagruzka',
  success: 'Spasibo! mi s vami svyagemsya',
  failure: 'chto to poshlo ne tak'
};

forms.forEach(item => {
  postData(item);
});

function postData(form) {
  form.querySelectorAll('submit', (e) => {
    e.preventDefault();

    const statusMassage = document.createElement('div');
    statusMassage.classList.add('status');
    statusMassage.textContent = massage.loading;
    form.append(statusMassage);

    const request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    // XMLHttpRequest + multipart/form-data = NE OTPRAVIT NA SERVER
    // request.setRequestHeader('Content-type', 'multipart/form-data');
    // dlya JSON zaprosa
    // request.setRequestHeader('Content-type', 'application/json');
    const formData = new FormData(form);

    // JSON
    // const object = {};
    // formData.forEach(function (value, key) {
    //   object[key] = value;
    // });
    // const json = JSON.stringify(object);
    // request.send(json);

    request.send(formData);

    request.addEventListener('load', () => {
      if (request.status === 200) {
        console.log(request.response);
        showThanksModal(massage.success);
        form.reset();
        statusMassage.remove();
      } else {
        showThanksModal(massage.failure);
      }
    });
  });
}

// zamena modalnogo okna
function showThanksModal(message) {
  const prevModalDialog = document.querySelector('.modal__dialog');

  prevModalDialog.classList.add('hide');
  openModal();

  const thanksModal = document.createElement('div');
  thanksModal.classList.add('.modal__dialog');
  thanksModal.innerHTML = `
    <div class="modal__content">
      <div class="modal__close" data-close>x</div>
      <div class="modal__title">${message}</div>
    </div>
  `;

  document.querySelector('.modal').append(thanksModal);
  setTimeout(() => {
    thanksModal.remove();
    prevModalDialog.classList.add('show');
    prevModalDialog.classList.remove('hide');
    closeModal();
  }, 4000);

}