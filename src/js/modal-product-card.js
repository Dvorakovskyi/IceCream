// Get the modal
var productsModal = document.getElementById('js-products');

// Get the button that opens the modal
var openProductsBtn = document.getElementsByClassName('js-products-open');

// Get the button that closes the modal
var closeProductsBtn = document.getElementById('js-products-close');

// When the user clicks on the open button, open the modal
openProductsBtn[0].onclick = function () {
  productsModal.style.display = 'block';
};

openProductsBtn[1].onclick = function () {
  productsModal.style.display = 'block';
};

// When the user clicks on the close button, close the modal
closeProductsBtn.onclick = function () {
  productsModal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    productsModal.style.display = 'none';
  }
};
