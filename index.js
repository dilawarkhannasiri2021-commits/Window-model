'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; btnsOpenModal.length > i; i++) {
  btnsOpenModal[i].addEventListener(
    'click',
    openModal
    // function () {
    // console.log('button clicked');
    // model.classList.remove('hidden');
    // overlay.classList.remove('hidden');}
  );
}

btnCloseModal.addEventListener(
  'click',
  closeModal
  //  function () {
  //   model.classList.add('hidden');
  //   overlay.classList.add('hidden');}
);

overlay.addEventListener(
  'click',
  closeModal
  //     function() {
  //     model.classList.add('hidden');
  //     overlay.classList.add('hidden');
  // }
);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    // if (!model.classList.contains('hidden')) {
    closeModal();
  }
});
