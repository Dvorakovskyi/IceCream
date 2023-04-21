(() => {
  const refs = {
    openLocationBtn: document.querySelectorAll('.js-location-open'),
    closeLocationBtn: document.querySelector('.js-location-close'),
    locationModal: document.querySelector('.js-location'),
    body: document.querySelector('body'),
  };

  refs.openLocationBtn[0].addEventListener('click', toggleModal);
  refs.closeLocationBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.locationModal.classList.toggle('backdrop--is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
