document.addEventListener('DOMContentLoaded', function () {
  // references to the form and inputs
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const contactForm = document.getElementById('contactForm');
  const contactheader = document.getElementById('contact-header');
  const contactp = document.getElementById('contact-p');
  const submitButton = document.getElementById('submitButton');
  const thankYouMessage = document.getElementById('thankYouMessage');
  const plantsicon = document.getElementById('plantsicon');
  const tymsgp = document.getElementById('tymsgp');
  const tymsgh = document.getElementById('tymsgh');
  const continueButton = document.querySelector('.continue-button');

  // function to validate both fields and email format
  function checkFormValidity() {
    const nameValid = nameInput.value.trim() !== '';
    const emailValid = isValidEmail(emailInput.value.trim());
    if (!nameValid) {
      nameInput.classList.remove('contact-field-box-valid');
      nameInput.classList.add('contact-field-box-invalid');
    } else {
      nameInput.classList.remove('contact-field-box-invalid');
      nameInput.classList.add('contact-field-box-valid');
    }
    if (!emailValid) {
      emailInput.classList.remove('contact-field-box-valid');
      emailInput.classList.add('contact-field-box-invalid');
    } else {
      emailInput.classList.remove('contact-field-box-invalid');
      emailInput.classList.add('contact-field-box-valid');
    }
    submitButton.disabled = !(nameValid && emailValid);
  }

  // event listeners for inputs & modal
  nameInput.addEventListener('input', checkFormValidity);
  emailInput.addEventListener('input', checkFormValidity);
  continueButton.addEventListener('click', function () {
    closeModal();
  });

  // Function to close the modal
  function closeModal() {
    const modal = document.querySelector('.backdrop');

    // Hide the modal
    modal.classList.add('is-hidden');
  }

  // function to submit
  contactForm.addEventListener('submit', function (event) {
    // prevent the default form submission behavior
    event.preventDefault();

    // validate both fields and email format
    checkFormValidity();

    // Proceed with the form submission logic if the button is not disabled
    if (!submitButton.disabled) {
      // hide the form
      contactForm.style.display = 'none';
      contactheader.style.display = 'none';
      contactp.style.display = 'none';
      // show TY message
      thankYouMessage.style.display = 'block';
      plantsicon.style.display = 'block';
      tymsgp.style.display = 'block';
      tymsgh.style.display = 'block';
    }
  });

  // function to validate email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
