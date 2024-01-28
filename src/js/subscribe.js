document.addEventListener('DOMContentLoaded', function () {
  const emailInputSubscribe = document.getElementById('emailsub');
  const subscribeButton = document.getElementById('subscribeButton');

  // Function to validate email for the subscribe form
  function isValidEmailSubscribe(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Function to check the validity of the email for the subscribe form
  function checkFormValiditySubscribe() {
    const emailValid = isValidEmailSubscribe(emailInputSubscribe.value.trim());
    subscribeButton.disabled = !emailValid;
  }

  // Event listener for input on the email field for the subscribe form
  emailInputSubscribe.addEventListener('input', checkFormValiditySubscribe);

  // Event listener for the subscribe button
  subscribeButton.addEventListener('click', function () {
    // Add any additional logic you need when the subscribe button is clicked
    // For example, you can submit the subscribe form
    // submitSubscribeForm();
  });

  // Function to submit the subscribe form
  function submitSubscribeForm() {
    // Your subscribe form submission logic goes here
  }
});
